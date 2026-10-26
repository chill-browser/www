export type Platform = 'macos' | 'windows' | 'linux'
export type Architecture = 'arm64' | 'x64'

export type ReleaseAsset = {
  name: string
  browser_download_url: string
}

export type SystemInfo = {
  platform: Platform
  arch: Architecture
  label: string
}

export const releaseUrl = 'https://github.com/chill-browser/desktop/releases/latest'
const apiUrl = 'https://api.github.com/repos/chill-browser/desktop/releases/latest'

export const platforms: { platform: Platform; label: string }[] = [
  { platform: 'macos', label: 'macOS' },
  { platform: 'windows', label: 'Windows' },
  { platform: 'linux', label: 'Linux' },
]

export function detectSystem(): SystemInfo {
  const nav = navigator as Navigator & {
    userAgentData?: { platform?: string; architecture?: string }
  }

  const platformSource = `${nav.userAgentData?.platform ?? ''} ${navigator.platform ?? ''} ${navigator.userAgent}`.toLowerCase()
  const platform: Platform = platformSource.includes('mac')
    ? 'macos'
    : platformSource.includes('win')
      ? 'windows'
      : 'linux'

  const archSource = `${nav.userAgentData?.architecture ?? ''} ${navigator.userAgent}`.toLowerCase()
  const arch: Architecture = /arm64|aarch64/.test(archSource) ? 'arm64' : 'x64'

  return {
    platform,
    arch,
    label: platforms.find((item) => item.platform === platform)?.label ?? 'Linux',
  }
}

export async function loadReleaseAssets(): Promise<ReleaseAsset[]> {
  const response = await fetch(apiUrl, {
    headers: { Accept: 'application/vnd.github+json' },
  })

  if (!response.ok) {
    throw new Error(`Release request failed with ${response.status}`)
  }

  const data = (await response.json()) as { assets?: unknown }

  if (!Array.isArray(data.assets)) return []

  return data.assets.filter(
    (asset): asset is ReleaseAsset =>
      typeof asset === 'object' &&
      asset !== null &&
      typeof (asset as ReleaseAsset).name === 'string' &&
      typeof (asset as ReleaseAsset).browser_download_url === 'string',
  )
}

export function pickAsset(
  assets: ReleaseAsset[],
  platform: Platform,
  arch: Architecture,
): ReleaseAsset | undefined {
  const candidates = assets.filter((asset) => {
    const name = asset.name.toLowerCase()

    if (platform === 'macos') {
      return /mac|darwin|osx/.test(name) && /\.(dmg|zip)$/.test(name)
    }
    if (platform === 'windows') {
      return /win/.test(name) && /\.(exe|zip)$/.test(name)
    }
    return /linux/.test(name) && /\.(tar\.xz|tar\.bz2|appimage|flatpak)$/.test(name)
  })

  if (!candidates.length) return undefined

  if (platform === 'macos') {
    return (
      candidates.find((asset) => /universal/.test(asset.name.toLowerCase())) ??
      candidates.find((asset) =>
        arch === 'arm64'
          ? /arm64|aarch64/.test(asset.name.toLowerCase())
          : /x64|x86_64|intel|amd64/.test(asset.name.toLowerCase()),
      ) ??
      candidates[0]
    )
  }

  return (
    candidates.find((asset) =>
      arch === 'arm64'
        ? /arm64|aarch64/.test(asset.name.toLowerCase())
        : /x64|x86_64|amd64|installer\.(exe|zip)$/.test(asset.name.toLowerCase()),
    ) ??
    candidates.find((asset) => !/arm64|aarch64|x64|x86_64/.test(asset.name.toLowerCase())) ??
    candidates[0]
  )
}
