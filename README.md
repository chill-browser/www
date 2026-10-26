<div align="center">
  <img src="./public/favicon.svg" width="72" height="72" alt="Chill Browser" />
  <h1>Chill Browser — Website</h1>
  <p><strong>A calmer browser, with Chrome DevTools inside.</strong></p>
  <p>
    <a href="https://github.com/chill-browser/desktop">Browser source</a>
    ·
    <a href="https://github.com/chill-browser/desktop/releases/latest">Downloads</a>
    ·
    <a href="https://zen-browser.app">Built on Zen</a>
  </p>
</div>

![Chill Browser website preview](./public/readme-preview.png)

## What this is

The landing page for **Chill Browser**, a Zen-based browser with Chrome DevTools docked inside. The site leads with the browser itself, then shows the DevTools difference, a live element inspector, and platform-aware downloads.

## Stack

- **Svelte 5** with Vite 8 and TypeScript
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **Motion** for entrance and scroll reveals
- **GSAP ScrollTrigger** for the hero parallax
- **Instrument Sans** + **Junicode** as the type pair

## Run

```bash
npm install
npm run dev
```

```bash
npm run check
npm run build
npm run preview
```

## Structure

```text
src/
├── App.svelte
├── app.css
├── assets/
│   ├── devtools/      # real Chrome DevTools captures
│   ├── fonts/         # Junicode
│   └── logo.svg
└── lib/
    ├── Nav.svelte
    ├── Hero.svelte
    ├── BrowserFrame.svelte
    ├── Browser.svelte
    ├── Panels.svelte
    ├── Inspect.svelte
    ├── Closing.svelte
    ├── download.ts
    ├── reveal.ts
    ├── scroll.ts
    └── site.ts
```

## Palette

| Role | Hex | Token |
| --- | --- | --- |
| Night | `#092b5a` | `--color-navy` |
| Accent | `#09738a` | `--color-teal` |
| Stage | `#78a890` | `--color-sage` |
| Field | `#9ed1b7` | `--color-mint` |
| Paper | `#e7d9b4` | `--color-sand` |

## Downloads

The download buttons detect the current platform, read the latest GitHub release, and point straight at the matching asset. The release page is the fallback for other builds.

- **macOS** — coming from a native build
- **Windows** — coming from a native build
- **Linux x86_64** — available now

## License

Part of the Chill Browser project. The browser is based on Zen Browser and built with the Chrome DevTools frontend.
