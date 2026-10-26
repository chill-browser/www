<script lang="ts">
  import { onMount } from 'svelte'
  import { reveal } from './reveal'

  let sectionEl: HTMLElement
  let inspecting = $state(false)
  let tag = $state('<section>')
  let size = $state('0 × 0')
  let display = $state('block')
  let widthValue = $state('0px')
  let heightValue = $state('0px')
  let paddingValue = $state('0px')
  let marginValue = $state('0px')
  let borderValue = $state('0px')
  let boxValue = $state('0 × 0')

  let overlay: HTMLDivElement | null = null
  let currentTarget: HTMLElement | null = null

  const shortClasses = (element: Element) => {
    const names = Array.from(element.classList).filter((name) => !name.startsWith('is-inspect'))
    if (!names.length) return ''
    return `.${names.slice(0, 2).join('.')}`
  }

  const labelFor = (element: Element) => {
    const tagName = element.tagName.toLowerCase()
    const id = element.id ? `#${element.id}` : ''
    return `${tagName}${id}${shortClasses(element)}`
  }

  const collapseSpacing = (value: string) => {
    const parts = value.split(' ').filter(Boolean)
    if (parts.length === 4 && parts.every((part) => part === parts[0])) return parts[0]
    return value
  }

  const update = (element: Element | null) => {
    if (!element) return
    const rect = element.getBoundingClientRect()
    const styles = getComputedStyle(element)
    const content = `${Math.round(rect.width)} × ${Math.round(rect.height)}`
    const padding = collapseSpacing(
      `${styles.paddingTop} ${styles.paddingRight} ${styles.paddingBottom} ${styles.paddingLeft}`,
    )
    const margin = collapseSpacing(
      `${styles.marginTop} ${styles.marginRight} ${styles.marginBottom} ${styles.marginLeft}`,
    )
    const border = collapseSpacing(
      `${styles.borderTopWidth} ${styles.borderRightWidth} ${styles.borderBottomWidth} ${styles.borderLeftWidth}`,
    )

    tag = `<${labelFor(element)}>`
    size = content
    display = styles.display
    widthValue = `${Math.round(rect.width)}px`
    heightValue = `${Math.round(rect.height)}px`
    paddingValue = padding
    marginValue = margin
    borderValue = border
    boxValue = content
  }

  const clearTarget = () => {
    currentTarget?.classList.remove('is-inspect-target')
    currentTarget = null
    if (overlay) overlay.style.display = 'none'
  }

  const setInspect = (next: boolean) => {
    inspecting = next
    document.body.classList.toggle('is-inspecting', next)
    if (!next) {
      clearTarget()
      update(sectionEl)
    }
  }

  onMount(() => {
    update(sectionEl)

    overlay = document.createElement('div')
    overlay.className = 'inspect-tag'
    overlay.setAttribute('aria-hidden', 'true')
    document.body.appendChild(overlay)

    const targetAt = (x: number, y: number) => {
      const element = document.elementFromPoint(x, y) as HTMLElement | null
      if (!element || element === document.documentElement || element === document.body) return null
      if (element.closest('[data-inspect-ignore]')) return null
      return element
    }

    const handlePointer = (event: PointerEvent) => {
      if (!inspecting) return
      const element = targetAt(event.clientX, event.clientY)
      if (!element) return

      if (element !== currentTarget) {
        currentTarget?.classList.remove('is-inspect-target')
        currentTarget = element
        currentTarget.classList.add('is-inspect-target')
      }

      update(element)

      if (overlay) {
        overlay.style.display = 'block'
        overlay.textContent = `${labelFor(element)} · ${boxValue}`
        const labelWidth = overlay.offsetWidth
        const labelHeight = overlay.offsetHeight
        const left = Math.max(12, Math.min(event.clientX + 14, window.innerWidth - labelWidth - 12))
        const top = Math.max(12, Math.min(event.clientY + 14, window.innerHeight - labelHeight - 12))
        overlay.style.left = `${left}px`
        overlay.style.top = `${top}px`
        overlay.style.bottom = 'auto'
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && inspecting) setInspect(false)
    }

    const blockClicks = (event: MouseEvent) => {
      if (!inspecting) return
      const target = event.target as HTMLElement | null
      if (target?.closest('[data-inspect-toggle]')) return
      event.preventDefault()
      event.stopPropagation()
    }

    document.addEventListener('pointermove', handlePointer)
    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', blockClicks, true)

    return () => {
      document.removeEventListener('pointermove', handlePointer)
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', blockClicks, true)
      document.body.classList.remove('is-inspecting')
      currentTarget?.classList.remove('is-inspect-target')
      overlay?.remove()
    }
  })
</script>

<section id="inspect" bind:this={sectionEl} class="bg-mint py-24 text-navy lg:py-32" aria-labelledby="inspect-title">
  <div class="shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
    <div class="min-w-0">
      <h2 id="inspect-title" use:reveal class="text-[clamp(2.8rem,5vw,5rem)]">Inspect this page.</h2>
      <p use:reveal={{ delay: 80 }} class="mt-7 max-w-[46ch] text-[17px] leading-[1.6] text-navy/75">
        Turn on inspect mode and move across the page. The selection follows the pointer, with the
        tag, classes, box model and real dimensions. Press Escape to leave.
      </p>

      <div use:reveal={{ delay: 150 }} class="mt-9 flex flex-wrap items-center gap-5">
        <button
          type="button"
          class="btn btn-navy"
          data-inspect-toggle
          aria-pressed={inspecting}
          onclick={() => setInspect(!inspecting)}
        >
          {inspecting ? 'Turn off inspect mode' : 'Turn on inspect mode'}
        </button>
        <span class="text-[13px] font-semibold" aria-live="polite">{inspecting ? 'On' : 'Off'}</span>
      </div>

      <p use:reveal={{ delay: 210 }} class="mt-5 max-w-[44ch] text-[14px] leading-[1.65] text-navy/60">
        This is the same idea as the Elements picker, running on this page. Nothing is sent anywhere.
      </p>
    </div>

    <div
      use:reveal={{ delay: 120 }}
      class="inspector min-w-0 p-5 sm:p-6 lg:p-7"
      data-ui
      data-inspect-ignore
      aria-label="Live element inspector"
    >
      <div class="flex items-center justify-between gap-4 bg-[#0d3569] px-4 py-0 text-[12px] text-sand/55">
        <div class="flex gap-5">
          <span class="border-b-2 border-mint py-3 text-sand">Elements</span>
          <span class="py-3">Console</span>
          <span class="py-3">Network</span>
        </div>
        <span class="text-[18px] leading-none" aria-hidden="true">…</span>
      </div>

      <div class="px-1 py-6 sm:px-2">
        <p class="text-[12px] text-sand/50">Selected element</p>
        <code class="inspector-code mt-2 block truncate text-[13px] text-mint">{tag}</code>
        <p class="mt-1 text-[12px] text-sand/55">{size}</p>

        <div class="mx-auto mt-7 w-full max-w-[260px]">
          <div class="inspector-box-margin px-3 pb-3 pt-4 text-center text-[11px] text-sand/60">
            <span class="mb-2 block">margin <b class="text-sand">{marginValue}</b></span>
            <div class="inspector-box-border px-3 pb-3 pt-4">
              <span class="mb-2 block">border <b class="text-sand">{borderValue}</b></span>
              <div class="inspector-box-padding px-3 pb-3 pt-4">
                <span class="mb-2 block">padding <b class="text-sand">{paddingValue}</b></span>
                <div class="inspector-box-content grid min-h-14 place-items-center px-2 text-[12px] text-sand">
                  {boxValue}
                </div>
              </div>
            </div>
          </div>
        </div>

        <dl class="mt-6 grid gap-2 border-t border-sand/10 pt-5 text-[12px]">
          <div class="flex justify-between gap-6"><dt class="text-sand/45">display</dt><dd>{display}</dd></div>
          <div class="flex justify-between gap-6"><dt class="text-sand/45">width</dt><dd>{widthValue}</dd></div>
          <div class="flex justify-between gap-6"><dt class="text-sand/45">height</dt><dd>{heightValue}</dd></div>
          <div class="flex justify-between gap-6"><dt class="text-sand/45">padding</dt><dd>{paddingValue}</dd></div>
        </dl>
      </div>
    </div>
  </div>
</section>
