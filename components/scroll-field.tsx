"use client"

import { useEffect } from "react"

/** Aproximação por quadro do progresso e da velocidade. */
const PROGRESS_EASE = 0.16
const SPEED_EASE = 0.18

/** Quanto do impulso sobra a cada quadro. Abaixo de 1, a página relaxa sozinha. */
const SPEED_DECAY = 0.9

/** Pixels de rolagem em um quadro que já contam como velocidade máxima. */
const FULL_SPEED = 52

const EPSILON = 0.0004

const clamp = (value: number, min: number, max: number) => (value < min ? min : value > max ? max : value)

/**
 * Publica o estado da rolagem no <html> como variáveis CSS globais:
 *
 *   --scroll-progress  0 a 1, quanto da página já passou
 *   --scroll-speed     -1 a 1, velocidade com sinal (negativo = subindo)
 *
 * O evento de scroll só anota o impulso, um único requestAnimationFrame
 * interpola e grava, e o loop se desliga quando tudo assenta. A velocidade decai a cada quadro, então a
 * página desacelera sozinha quando o dedo ou a roda param.
 */
export function ScrollField() {
  useEffect(() => {
    const root = document.documentElement

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let progress = 0
    let shownProgress = 0
    /** Impulso do último quadro de rolagem, antes de ser suavizado. */
    let impulse = 0
    let shownSpeed = 0
    let lastY = window.scrollY
    let frame = 0

    const paint = () => {
      frame = 0

      impulse *= SPEED_DECAY
      shownSpeed += (impulse - shownSpeed) * SPEED_EASE
      shownProgress += (progress - shownProgress) * PROGRESS_EASE

      root.style.setProperty("--scroll-progress", shownProgress.toFixed(4))
      root.style.setProperty("--scroll-speed", shownSpeed.toFixed(4))

      const restless = Math.abs(shownSpeed) > EPSILON || Math.abs(progress - shownProgress) > EPSILON

      if (restless) {
        frame = requestAnimationFrame(paint)
      } else {
        /* Encaixa nos valores exatos para não deixar sobra visível. */
        shownSpeed = 0
        shownProgress = progress
        root.style.setProperty("--scroll-progress", progress.toFixed(4))
        root.style.setProperty("--scroll-speed", "0")
      }
    }

    const onScroll = () => {
      const y = window.scrollY
      const runway = document.documentElement.scrollHeight - window.innerHeight

      impulse = clamp((y - lastY) / FULL_SPEED, -1, 1)
      lastY = y
      progress = runway > 0 ? clamp(y / runway, 0, 1) : 0

      if (!frame) frame = requestAnimationFrame(paint)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
