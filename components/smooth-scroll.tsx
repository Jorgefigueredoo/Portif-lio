"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/** Instância ativa do Lenis, para quem precisa rolar até um ponto exato. */
let current: Lenis | null = null

/** Rola até `target` pelo Lenis quando ele existe; senão, pelo navegador. */
export function scrollToTarget(target: number | HTMLElement, offset = 0) {
  if (current) {
    current.scrollTo(target, { offset })
    return
  }
  const top = typeof target === "number" ? target : target.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top: top + offset, behavior: "smooth" })
}

/**
 * Rolagem suave global com Lenis, ligada ao GSAP.
 *
 * - O Lenis passa a controlar o scroll da janela; a cada quadro o
 *   `gsap.ticker` avança o Lenis e o `ScrollTrigger.update` reage,
 *   então todo scrollytelling fica sincronizado com a inércia.
 * - Links de âncora (`#sobre`, `#projects`...) passam pelo Lenis para
 *   deslizar em vez de pular.
 * - Com "reduzir movimento" ligado, nada disso roda: a página usa o
 *   scroll nativo do navegador.
 *
 * Não renderiza nada.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    current = lenis

    // O ScrollTrigger recalcula os gatilhos a cada quadro do Lenis.
    lenis.on("scroll", ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time * 1000) // gsap.ticker entrega segundos; o Lenis quer ms
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Âncoras internas deslizam pelo Lenis.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.('a[href^="#"]') as
        | HTMLAnchorElement
        | null
      if (!anchor) return
      const id = anchor.getAttribute("href")
      if (!id || id === "#") return
      const target = document.querySelector(id)
      if (!target) return
      event.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: -80 })
    }
    document.addEventListener("click", onClick)

    return () => {
      document.removeEventListener("click", onClick)
      gsap.ticker.remove(raf)
      lenis.destroy()
      current = null
    }
  }, [])

  return null
}
