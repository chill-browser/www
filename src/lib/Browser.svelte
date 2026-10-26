<script lang="ts">
  import logo from '../assets/logo.svg'
  import { reveal } from './reveal'

  const features = [
    {
      title: 'Vertical tabs',
      copy: 'Tabs live on the side, leaving the page room to breathe.',
    },
    {
      title: 'Workspaces',
      copy: 'Keep work, reading and side projects in separate spaces.',
    },
    {
      title: 'Split view',
      copy: 'Compare two pages in one window, without another app.',
    },
    {
      title: 'Compact mode',
      copy: 'When you need the whole screen, the browser steps aside.',
    },
  ]
</script>

<section id="browser" class="bg-sand py-24 text-navy lg:py-32">
  <div class="shell grid items-center gap-16 lg:grid-cols-[1fr_0.74fr] lg:gap-24">
    <div class="min-w-0">
      <h2 use:reveal class="max-w-[12ch] text-[clamp(2.8rem,5vw,5rem)]">
        The browser, first.
      </h2>
      <p use:reveal={{ delay: 80 }} class="mt-7 max-w-[44ch] text-[17px] leading-[1.6] text-navy/75">
        A calmer way to keep tabs, projects and pages in one place. Built on Zen, with the quiet
        parts kept intact.
      </p>

      <ul class="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {#each features as feature}
          <li use:reveal class="flex gap-3">
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal"></span>
            <span>
              <strong class="block font-display text-[24px] font-normal leading-tight tracking-[-0.02em]">
                {feature.title}
              </strong>
              <span class="mt-1 block max-w-[30ch] text-[14px] leading-[1.55] text-navy/60">
                {feature.copy}
              </span>
            </span>
          </li>
        {/each}
      </ul>

      <p use:reveal class="mt-10 text-[14px] text-navy/55">
        The quiet foundation is Zen.
        <a class="underline decoration-teal/60 underline-offset-4 hover:text-teal" href="https://zen-browser.app" rel="noopener">
          See what it is built on ↗
        </a>
      </p>
    </div>

    <div use:reveal={{ delay: 120 }} class="browser-showcase">
      <div class="side-panel" data-ui role="img" aria-label="Chill Browser sidebar with Personal, Work and Study workspaces and vertical tabs.">
        <div class="side-panel__head">
          <img src={logo} alt="" width="24" height="24" />
          <span>Chill</span>
        </div>

        <div class="side-panel__workspaces" aria-hidden="true">
          <span class="is-active">Personal</span>
          <span>Work</span>
          <span>Study</span>
        </div>

        <div class="side-panel__tabs" aria-hidden="true">
          <div class="side-panel__tab is-active">
            <span class="side-panel__dot"></span>
            <span>The quiet web</span>
          </div>
          <div class="side-panel__tab">
            <span class="side-panel__dot"></span>
            <span>Design notes</span>
          </div>
          <div class="side-panel__tab">
            <span class="side-panel__dot"></span>
            <span>Changelog</span>
          </div>
          <div class="side-panel__tab">
            <span class="side-panel__dot"></span>
            <span>Reading list</span>
          </div>
          <div class="side-panel__tab">
            <span class="side-panel__dot"></span>
            <span>A calmer internet</span>
          </div>
        </div>

        <div class="side-panel__new">
          <span>+ New tab</span>
          <span>⌘ T</span>
        </div>
      </div>
    </div>
  </div>
</section>
