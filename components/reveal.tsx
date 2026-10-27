"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * `rise` — sobe e assenta. É a entrada padrão da página.
 * `wipe` — o bloco se desenha de baixo para cima, como uma cortina.
 */
type RevealVariant = "rise" | "wipe"

interface RevealProps {
  children: ReactNode
  /** Atraso da animação em milissegundos */
  delay?: number
  variant?: RevealVariant
  className?: string
}

/**
 * Revela o conteúdo quando ele entra na viewport.
 *
 * O observador fica no invólucro externo, que nunca é recortado: a cortina
 * do `wipe` zera a área visível do elemento animado, e o Chrome desconta o
 * `clip-path` do próprio alvo no IntersectionObserver — observando o alvo,
 * ele nunca seria considerado visível.
 */
export function Reveal({ children, delay = 0, variant = "rise", className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      <div
        className={`reveal reveal-${variant} h-full ${visible ? "is-visible" : ""}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  )
}
