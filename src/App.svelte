<script lang="ts">
  import { onMount } from 'svelte'
  import Nav from './lib/Nav.svelte'
  import Hero from './lib/Hero.svelte'
  import Browser from './lib/Browser.svelte'
  import Panels from './lib/Panels.svelte'
  import Inspect from './lib/Inspect.svelte'
  import Closing from './lib/Closing.svelte'
  import { scrollToId } from './lib/scroll'

  onMount(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  })

  const skipToContent = (event: MouseEvent) => {
    event.preventDefault()
    scrollToId('main')
    document.getElementById('main')?.focus()
  }
</script>

<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-mint focus:px-4 focus:py-3 focus:text-[14px] focus:font-semibold focus:text-navy"
  onclick={skipToContent}
>
  Skip to content
</a>

<Nav />

<main id="main" tabindex="-1">
  <Hero />
  <Browser />
  <Panels />
  <Inspect />
  <Closing />
</main>
