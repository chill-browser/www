<script lang="ts">
  import { onMount } from 'svelte'
  import logo from '../assets/logo.svg'
  import { sourceUrl } from './site'
  import {
    detectSystem,
    loadReleaseAssets,
    pickAsset,
    releaseUrl,
    type ReleaseAsset,
  } from './download'
  import { reveal } from './reveal'
  import { onAnchor } from './scroll'

  let assets = $state<ReleaseAsset[]>([])
  const system = detectSystem()

  const primary = $derived(pickAsset(assets, system.platform, system.arch))
  const primaryUrl = $derived(primary?.browser_download_url ?? releaseUrl)

  onMount(() => {
    loadReleaseAssets()
      .then((releaseAssets) => (assets = releaseAssets))
      .catch(() => {})
  })
</script>

<section id="download" class="bg-navy py-24 text-sand lg:py-32">
  <div class="shell">
    <img use:reveal src={logo} alt="" width="58" height="58" class="h-[58px] w-[58px]" />
    <h2 use:reveal={{ delay: 70 }} class="mt-8 max-w-[14ch] text-[clamp(2.7rem,6.5vw,6.5rem)]">
      The quiet web.<br />One download.
    </h2>
    <p use:reveal={{ delay: 130 }} class="mt-7 max-w-[42ch] text-[17px] leading-[1.6] text-sand/70">
      Chill is free and open source. Pick your system and make the web a little calmer.
    </p>

    <div use:reveal={{ delay: 200 }} class="mt-10 flex flex-wrap items-center gap-5">
      <a class="btn btn-mint" href={primaryUrl}>Download for {system.label}</a>
      <a class="text-link text-sand" href={releaseUrl}>All downloads <span aria-hidden="true">↗</span></a>
    </div>
    <p use:reveal={{ delay: 250 }} class="mt-8 text-[13px] text-sand/45">
      macOS, Windows and Linux. Other builds are on <a class="transition-colors hover:text-sand" href={releaseUrl}>GitHub</a>.
    </p>
  </div>
</section>

<footer class="overflow-hidden bg-navy pb-10 pt-10 text-sand">
  <div class="shell">
    <p use:reveal class="display -ml-[0.045em] text-[clamp(7rem,21vw,21rem)] leading-[0.72] text-sand">
      Chill
    </p>
    <div class="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <nav class="flex flex-wrap gap-x-8 gap-y-3 text-[13px]" aria-label="Footer">
        <a class="hover:underline" href={sourceUrl} rel="noopener">GitHub</a>
        <a class="hover:underline" href={releaseUrl} rel="noopener">Download</a>
        <a class="hover:underline" href="https://zen-browser.app" rel="noopener">Built on Zen</a>
        <a class="hover:underline" href="#top" onclick={(event) => onAnchor(event, 'top')}>Back to top</a>
      </nav>
      <p class="max-w-[34ch] text-[13px] leading-[1.6] text-sand/50">
        A calmer browser, with Chrome DevTools inside. Built on Zen.
      </p>
    </div>
  </div>
</footer>
