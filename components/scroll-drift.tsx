"use client"

import { useEffect, useRef, type ReactNode } from "react"

/**
 * Elementos visíveis no momento. Todos compartilham um único rAF, então o
 * custo por quadro não cresce com o tamanho da página — só com o que está
 * de fato na tela, que são poucos.
 */
const tracked = new Set<HTMLElement>()
let frame = 0
let listening = false

/** Mede cada elemento rastreado e grava o quanto ele já atravessou a tela. */
function measure() {
  frame = 0

  for (const el of tracked) {
    const rect = el.getBoundingClientRect()
    const runway = window.innerHeight + rect.height
    /* 0 quando encosta na borda de baixo, 1 quando sai por cima. */
    const crossed = (window.innerHeight - rect.top) / runway
    el.style.setProperty("--drift", (crossed * 2 - 1).toFixed(4))
  }
}

/* Só agenda quando a página se move: parado, nenhum quadro é gasto. */
function onScroll() {
  if (!frame && tracked.size) frame = requestAnimationFrame(measure)
}

/**
 * Publica no elemento a variável `--drift`, de -1 a 1, conforme ele atravessa
 * a tela — -1 logo abaixo da dobra, 0 no centro, 1 ao sair por cima.
 *
 * É o parallax por rolagem sem depender de `animation-timeline: view()`, que
 * aqui resolveria para o `overflow-hidden` dos cartões em vez da página.
 * O IntersectionObserver garante que só o que está à vista é medido.
 */
export function ScrollDrift({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    if (!listening) {
      window.addEventListener("scroll", onScroll, { passive: true })
      window.addEventListener("resize", onScroll, { passive: true })
      listening = true
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) tracked.add(el)
      else tracked.delete(el)
      onScroll()
    })

    observer.observe(el)

    return () => {
      observer.disconnect()
      tracked.delete(el)
    }
  }, [])

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  )
}
