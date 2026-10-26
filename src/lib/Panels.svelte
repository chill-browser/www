<script lang="ts">
  import { onMount } from 'svelte'
  import { cubicOut } from 'svelte/easing'
  import { fade, fly } from 'svelte/transition'
  import elements from '../assets/devtools/elements.png'
  import consoleShot from '../assets/devtools/console.png'
  import network from '../assets/devtools/network.png'
  import sources from '../assets/devtools/sources.png'
  import application from '../assets/devtools/application.png'
  import { reveal } from './reveal'

  type Panel = {
    name: string
    description: string
    image: string
    alt: string
    caption: string
  }

  const panels: Panel[] = [
    {
      name: 'Elements',
      description: 'The DOM tree, attributes, the box model and the styles that shape the selected node.',
      image: elements,
      alt: 'The Elements panel in Chill Browser, with a selected div, the Styles pane and a box model.',
      caption: 'The selected node, its styles and its box model.',
    },
    {
      name: 'Console',
      description: 'Logs, errors and a JavaScript prompt with the page as its context.',
      image: consoleShot,
      alt: 'The Console panel in Chill Browser, showing a Chill Browser context and a JavaScript prompt.',
      caption: 'Logs, errors and a prompt, with the page as its context.',
    },
    {
      name: 'Network',
      description: 'Every request, response, header and timing, recorded while the page runs.',
      image: network,
      alt: 'The Network panel in Chill Browser, showing request filters, a timeline and one data.json request.',
      caption: 'Requests, responses, headers and timing.',
    },
    {
      name: 'Sources',
      description: 'The code as it loads, with breakpoints, scope and the call stack.',
      image: sources,
      alt: 'The Sources panel in Chill Browser, showing a page tree, a paused debugger and the call stack.',
      caption: 'The code, breakpoints, scope and the call stack.',
    },
    {
      name: 'Application',
      description: 'Storage, cookies, service workers and the manifest, in one place.',
      image: application,
      alt: 'The Application panel in Chill Browser, showing IndexedDB storage and a key-value table.',
      caption: 'Storage, cookies, service workers and the manifest.',
    },
  ]

  let active = $state(0)

  onMount(() => {
    panels.forEach((panel) => {
      const image = new Image()
      image.src = panel.image
    })
  })
</script>

<section id="devtools" class="bg-navy py-24 text-sand lg:py-32">
  <div class="shell">
    <div class="grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
      <h2 use:reveal class="max-w-[12ch] text-[clamp(2.8rem,5vw,5rem)]">
        The difference is built in.
      </h2>
      <p use:reveal={{ delay: 80 }} class="max-w-[44ch] text-[17px] leading-[1.6] text-sand/70">
        Chrome DevTools, inside the browser. Inspect, edit and debug the page you're on without
        opening another app.
      </p>
    </div>

    <div class="mt-14 grid items-start gap-14 lg:grid-cols-[0.82fr_1fr] lg:gap-20">
      <div use:reveal class="flex min-w-0 flex-col">
        {#each panels as panel, index}
          <button
            type="button"
            onclick={() => (active = index)}
            onmouseenter={() => (active = index)}
            aria-pressed={active === index}
            class="group block w-full py-4 text-left"
          >
            <span class="flex items-center justify-between gap-5">
              <span
                class="display text-[clamp(1.9rem,3.1vw,3.45rem)] transition-colors duration-200 {active === index ? 'text-mint' : 'text-sand/25'}"
              >
                {panel.name}
              </span>
              <span
                class="h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-200 {active === index ? 'bg-mint' : 'bg-sand/15'}"
              ></span>
            </span>
            {#if active === index}
              <span class="mt-1 block max-w-[42ch] text-[15px] leading-[1.55] text-sand/60">
                {panel.description}
              </span>
            {/if}
          </button>
        {/each}
      </div>

      <figure use:reveal={{ delay: 120 }} class="m-0 min-w-0 bg-sage p-4 sm:p-6 lg:p-8">
        <div class="relative overflow-hidden">
          {#key active}
            <img
              src={panels[active].image}
              width="455"
              height="1193"
              alt={panels[active].alt}
              class="h-[440px] w-full object-cover object-top sm:h-[540px] lg:h-[min(62vh,660px)]"
              in:fly={{ y: 18, duration: 450, easing: cubicOut }}
              out:fade={{ duration: 160 }}
            />
          {/key}
        </div>
        <figcaption class="mt-4 text-[13px] text-navy/70">
          {panels[active].name} · {panels[active].caption}
        </figcaption>
      </figure>
    </div>
  </div>
</section>
