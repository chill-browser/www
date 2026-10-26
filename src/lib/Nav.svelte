<script lang="ts">
  import logo from '../assets/logo.svg'
  import { sourceUrl } from './site'
  import { onAnchor } from './scroll'
</script>

<header class="fixed inset-x-0 top-0 z-50 bg-navy text-sand">
  <div class="shell flex h-[74px] items-center justify-between gap-8">
    <a
      href="#top"
      class="flex items-center gap-3"
      aria-label="Chill Browser home"
      onclick={(event) => onAnchor(event, 'top')}
    >
      <img src={logo} alt="" width="30" height="30" class="h-[30px] w-[30px]" />
      <span class="font-display text-[27px] leading-none tracking-[-0.02em]">Chill</span>
    </a>

    <nav class="hidden items-center gap-8 lg:flex" aria-label="Primary">
      <a class="nav-link" href="#browser" onclick={(event) => onAnchor(event, 'browser')}>Browser</a>
      <a class="nav-link" href="#devtools" onclick={(event) => onAnchor(event, 'devtools')}>DevTools</a>
      <a class="nav-link" href="#inspect" onclick={(event) => onAnchor(event, 'inspect')}>Inspect</a>
    </nav>

    <div class="flex items-center gap-5">
      <a class="nav-link hidden sm:inline" href={sourceUrl} rel="noopener">GitHub</a>
      <a
        class="btn btn-mint min-h-10 px-4 text-[13px]"
        href="#download"
        onclick={(event) => onAnchor(event, 'download')}
      >
        Download
      </a>
    </div>
  </div>
</header>
