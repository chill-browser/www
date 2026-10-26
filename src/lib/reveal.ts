import { animate, inView } from 'motion'
import type { Action } from 'svelte/action'

type RevealOptions = {
  delay?: number
}

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
  if (typeof window === 'undefined') return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  node.style.opacity = '0'
  node.style.transform = 'translateY(22px)'

  const stop = inView(
    node,
    () => {
      animate(
        node,
        {
          opacity: [0, 1],
          transform: ['translateY(22px)', 'translateY(0px)'],
        },
        {
          duration: 0.7,
          delay: (options?.delay ?? 0) / 1000,
          ease: 'easeOut',
        },
      )
    },
    { amount: 0.18 },
  )

  return {
    destroy() {
      stop()
    },
  }
}
