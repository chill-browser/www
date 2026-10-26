<script lang="ts">
  import logo from './assets/logo.svg'
  import BrowserFrame from './lib/BrowserFrame.svelte'
  import elements from './assets/devtools/elements.png'
  import consoleShot from './assets/devtools/console.png'
  import network from './assets/devtools/network.png'
</script>

<main class="min-h-screen bg-sand text-navy">
  <header class="shell flex h-[74px] items-center justify-between">
    <div class="flex items-center gap-3">
      <img src={logo} alt="" width="30" height="30" />
      <span class="font-display text-[27px] leading-none tracking-[-0.02em]">Chill</span>
    </div>
    <a class="text-[13px] text-navy/60 hover:text-navy" href="https://github.com/chill-browser/www">About this page</a>
  </header>

  <section class="shell grid min-h-[calc(100svh-74px)] items-center gap-14 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
    <div class="min-w-0">
      <p class="text-[13px] text-navy/50">Welcome to</p>
      <h1 class="mt-3 max-w-[9ch] text-[clamp(3.2rem,6.4vw,6.2rem)] leading-[0.92] tracking-[-0.04em]">
        Chill Browser
      </h1>
      <p class="mt-7 max-w-[42ch] text-[18px] leading-[1.6] text-navy/75">
        A calmer browser, with Chrome DevTools inside. Vertical tabs, workspaces and the tools you
        already know, in the same window.
      </p>
      <div class="mt-9 flex flex-wrap items-center gap-5">
        <a class="btn btn-navy" href="https://chill-browser.github.io/www/">Explore the site</a>
        <a class="text-link text-navy/60" href="https://github.com/chill-browser/desktop/releases/latest">Get updates ↗</a>
      </div>
    </div>
    <div class="min-w-0">
      <BrowserFrame />
    </div>
  </section>

  <section class="border-t-0 bg-sage py-20 text-navy lg:py-24">
    <div class="shell">
      <h2 class="max-w-[12ch] text-[clamp(2.4rem,4.2vw,3.8rem)]">A look inside.</h2>
      <div class="mt-10 grid gap-6 sm:grid-cols-3">
        <figure class="m-0 min-w-0">
          <img src={elements} width="455" height="1193" alt="Chrome DevTools Elements panel in Chill Browser." class="h-[320px] w-full object-cover object-top" loading="lazy" />
          <figcaption class="mt-3 text-[12px] text-navy/65">Elements</figcaption>
        </figure>
        <figure class="m-0 min-w-0">
          <img src={consoleShot} width="453" height="1193" alt="Chrome DevTools Console panel in Chill Browser." class="h-[320px] w-full object-cover object-top" loading="lazy" />
          <figcaption class="mt-3 text-[12px] text-navy/65">Console</figcaption>
        </figure>
        <figure class="m-0 min-w-0">
          <img src={network} width="453" height="1193" alt="Chrome DevTools Network panel in Chill Browser." class="h-[320px] w-full object-cover object-top" loading="lazy" />
          <figcaption class="mt-3 text-[12px] text-navy/65">Network</figcaption>
        </figure>
      </div>
    </div>
  </section>
</main>
