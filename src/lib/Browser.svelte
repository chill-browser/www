<script lang="ts">
  import browserPrint from '../assets/prints/chill-browser.png'
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

    <figure use:reveal={{ delay: 120 }} class="print-stage m-0 min-w-0">
      <img
        src={browserPrint}
        width="1609"
        height="1043"
        alt="Chill Browser with vertical tabs and workspaces."
        class="print-frame h-[420px] w-full object-cover object-left-top sm:h-[520px] lg:h-[min(58vh,600px)]"
      />
      <figcaption class="relative z-[1] mt-3 text-[12px] text-navy/55">The browser, with the quiet parts kept.</figcaption>
    </figure>
  </div>
</section>
