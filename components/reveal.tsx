"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * `rise` — sobe, desfoca e assenta a escala. É a entrada padrão da página.
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

/** Revela o conteúdo com fade + subida quando ele entra na viewport. */
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
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
