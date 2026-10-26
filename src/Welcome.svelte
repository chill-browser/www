<script lang="ts">
  import logo from './assets/logo.svg'

  const features = [
    {
      title: 'Vertical tabs',
      copy: 'Tabs sit on the side, where you can read them. Your current task stays in view.',
    },
    {
      title: 'Workspaces',
      copy: 'Keep work, reading and side projects apart. Switch context without losing the thread.',
    },
    {
      title: 'Split view',
      copy: 'Two pages, one window. Compare, reference or follow along without another screen.',
    },
    {
      title: 'Compact mode',
      copy: 'When the page needs the whole screen, the browser quietly steps aside.',
    },
  ]
</script>

<main class="min-h-svh bg-sand text-navy">
  <header class="shell flex h-[74px] items-center justify-between">
    <a class="flex items-center gap-3" href="./">
      <img src={logo} alt="" width="30" height="30" />
      <span class="font-display text-[27px] leading-none tracking-[-0.02em]">Chill</span>
    </a>
    <a class="text-[13px] text-navy/55 hover:text-navy" href="https://github.com/chill-browser/desktop">
      Source
    </a>
  </header>

  <section class="shell grid gap-14 pb-20 pt-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24 lg:pt-20">
    <div class="min-w-0">
      <p class="text-[12px] font-medium uppercase tracking-[0.18em] text-teal">Welcome!</p>
      <h1 class="mt-5 max-w-[9ch] text-[clamp(3.2rem,5.8vw,5.8rem)] leading-[0.93] tracking-[-0.04em]">
        Welcome to Chill.
      </h1>
      <p class="mt-8 max-w-[40ch] text-[18px] leading-[1.6] text-navy/70">
        A calmer browser, with the tools already in place. Settle in, open a few tabs, and let the
        page be the point.
      </p>
      <div class="mt-10 flex flex-wrap items-center gap-7">
        <a class="btn btn-navy" href="https://chill-browser.github.io/www/">Start browsing</a>
        <a class="text-link text-navy" href="https://github.com/chill-browser/desktop">
          View the source <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>

    <div class="min-w-0 border-t border-navy/15 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
      <div class="flex items-baseline justify-between gap-6">
        <p class="text-[12px] font-medium uppercase tracking-[0.18em] text-navy/45">What is different</p>
        <span class="font-display text-[13px] text-navy/35">01—04</span>
      </div>
      <ol class="mt-2">
        {#each features as feature, index}
          <li class="grid grid-cols-[34px_1fr] gap-4 border-b border-navy/15 py-6 sm:gap-6 sm:py-7">
            <span class="pt-1 font-display text-[12px] text-teal">0{index + 1}</span>
            <div class="min-w-0">
              <h2 class="font-display text-[clamp(1.45rem,2.3vw,2rem)] leading-tight tracking-[-0.02em]">
                {feature.title}
              </h2>
              <p class="mt-2 max-w-[44ch] text-[14px] leading-[1.6] text-navy/60">{feature.copy}</p>
            </div>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <footer class="shell flex flex-wrap items-center justify-between gap-4 border-t border-navy/15 py-6 text-[12px] text-navy/50">
    <span>Chill Browser</span>
    <span>Built on Zen. Made for a calmer web.</span>
  </footer>
</main>
