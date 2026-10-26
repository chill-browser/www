<script lang="ts">
  import logo from '../assets/logo.svg'
</script>

<div
  class="browser-frame"
  data-ui
  role="img"
  aria-label="Chill Browser with vertical tabs, Personal and Work workspaces, a calm new tab page, and Chrome DevTools in the toolbar."
>
  <div class="browser-bar">
    <div class="browser-brand">
      <img src={logo} alt="" width="18" height="18" />
      <span>Chill</span>
    </div>

    <div class="browser-workspaces" aria-hidden="true">
      <span class="is-active">Personal</span>
      <span>Work</span>
      <span>Study</span>
    </div>

    <div class="browser-address" aria-hidden="true">
      <span class="browser-address__dot"></span>
      chill://newtab
    </div>

    <span class="browser-devtools" aria-hidden="true" title="Chrome DevTools"></span>
    <span class="browser-menu" aria-hidden="true">…</span>
  </div>

  <div class="browser-body">
    <aside class="browser-side" aria-hidden="true">
      <div class="browser-side__label">Tabs</div>
      <div class="browser-tab is-active">
        <span class="browser-tab__dot"></span>
        <span>The quiet web</span>
        <span class="browser-tab__close">×</span>
      </div>
      <div class="browser-tab">
        <span class="browser-tab__dot"></span>
        <span>Design notes</span>
        <span class="browser-tab__close">×</span>
      </div>
      <div class="browser-tab">
        <span class="browser-tab__dot"></span>
        <span>Changelog</span>
        <span class="browser-tab__close">×</span>
      </div>
      <div class="browser-tab">
        <span class="browser-tab__dot"></span>
        <span>Reading list</span>
        <span class="browser-tab__close">×</span>
      </div>
      <div class="browser-new">+ New tab</div>
    </aside>

    <div class="browser-page" aria-hidden="true">
      <div class="browser-page__meta">A quieter place to start</div>
      <h3>Make room<br />for the quiet.</h3>
      <p>A calmer place to read, think and build. Less noise, more of the web you came for.</p>
      <div class="browser-search">
        <span>Search the web</span>
        <span class="browser-search__key">⌘ K</span>
      </div>
      <div class="browser-quick">
        <span>Read</span>
        <span>Notes</span>
        <span>Docs</span>
        <span>Workspaces</span>
      </div>
    </div>
  </div>
</div>
