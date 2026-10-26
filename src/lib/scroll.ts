const NAV_OFFSET = 88

export function scrollToId(id: string) {
  const element = document.getElementById(id)
  if (!element) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET

  window.scrollTo({
    top,
    behavior: reduced ? 'auto' : 'smooth',
  })

  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  }
}

export function onAnchor(event: MouseEvent, id: string) {
  event.preventDefault()
  scrollToId(id)
}
