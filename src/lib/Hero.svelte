<script lang="ts">
  import { onMount } from 'svelte'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import browserPrint from '../assets/prints/chill-browser.png'
  import { reveal } from './reveal'
  import { onAnchor } from './scroll'

  let frameEl: HTMLElement
  let heroEl: HTMLElement

  onMount(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!frameEl || !heroEl) return

    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.fromTo(
        frameEl,
        { y: 0 },
        {
          y: -42,
          ease: 'none',
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      )
    })

    return () => context.revert()
  })
</script>

<section id="top" bind:this={heroEl} class="bg-navy pt-[74px] text-sand">
  <div class="grid min-h-[calc(100svh-74px)] grid-cols-1 lg:grid-cols-[1.02fr_0.98fr]">
    <div class="page-pad flex min-w-0 flex-col justify-center py-16 lg:py-24">
      <h1
        use:reveal
        class="max-w-[18ch] text-[clamp(3rem,6.05vw,6.3rem)] leading-[0.93] tracking-[-0.04em]"
      >
        A calmer browser.<br />With serious tools.
      </h1>

      <p
        use:reveal={{ delay: 80 }}
        class="mt-8 max-w-[42ch] text-[clamp(1.05rem,1.35vw,1.25rem)] leading-[1.55] text-sand/85"
      >
        Vertical tabs, workspaces and a quiet interface, with Chrome DevTools built in. The browser
        gets out of the way; the tools are already there.
      </p>

      <div use:reveal={{ delay: 150 }} class="mt-10 flex flex-wrap items-center gap-6">
        <a class="btn btn-mint" href="#download" onclick={(event) => onAnchor(event, 'download')}>Download Chill</a>
        <a class="text-link text-sand" href="#browser" onclick={(event) => onAnchor(event, 'browser')}>
          Explore the browser <span aria-hidden="true">↓</span>
        </a>
      </div>

      <p use:reveal={{ delay: 220 }} class="mt-7 text-[13px] text-sage">
        Free and open source · macOS on Apple Silicon and Linux
      </p>
    </div>

    <div class="flex min-w-0 items-center justify-center bg-sage px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div use:reveal={{ delay: 120 }} class="w-full max-w-[650px]">
        <div bind:this={frameEl} class="print-stage will-change-transform">
          <img
            src={browserPrint}
            width="1609"
            height="1043"
            alt="Chill Browser showing its welcome screen with vertical tabs."
            class="print-frame"
          />
        </div>
      </div>
    </div>
  </div>
</section>
