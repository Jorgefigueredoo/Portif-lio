"use client"

import { useEffect } from "react"

/** Tipagem do pedido de permissão de giroscópio no iOS 13+. */
type OrientationPermission = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">
}

/** Aproxima `atual` de `alvo` por quadro. Quanto maior, mais seco o movimento. */
const EASE = 0.15

/** Abaixo disso o valor é considerado assentado e o loop se desliga. */
const EPSILON = 0.0004

const clamp01 = (value: number) => (value < 0 ? 0 : value > 1 ? 1 : value)

/**
 * Publica a posição do ponteiro no <html> como variáveis CSS globais:
 *
 *   --ptr-x / --ptr-y    posição de 0 a 100 na viewport (facho de luz)
 *   --ptr-dx / --ptr-dy  distância do centro, de -1 a 1 (parallax e inclinação)
 *   --ptr-glow           0 a 1, acende o brilho após a primeira interação
 *
 * Fontes de entrada, em ordem de prioridade: mouse/caneta, arrasto do dedo,
 * giroscópio e — no celular — a própria rolagem da página.
 *
 * Nenhum evento escreve no DOM: todos apenas movem o alvo. Um único
 * requestAnimationFrame interpola e grava as variáveis, e ele se desliga
 * sozinho quando o movimento assenta. Como as variáveis alimentam apenas
 * `transform` e `opacity`, não há layout nem paint durante a animação.
 */
export function PointerField() {
  useEffect(() => {
    const root = document.documentElement
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)")
    const coarse = window.matchMedia("(pointer: coarse)")

    if (calm.matches) return

    const target = { x: 0.5, y: 0.5, glow: 0 }
    const shown = { x: 0.5, y: 0.5, glow: 0 }
    const keys = ["x", "y", "glow"] as const

    let frame = 0
    /** Instante do último toque e da última leitura do sensor. Servem para as
        três fontes do celular se revezarem em vez de disputarem o alvo. */
    let touchedAt = 0
    let tiltedAt = 0

    const paint = () => {
      frame = 0
      let moving = false

      for (const key of keys) {
        const delta = target[key] - shown[key]
        if (Math.abs(delta) > EPSILON) {
          shown[key] += delta * EASE
          moving = true
        } else {
          shown[key] = target[key]
        }
      }

      root.style.setProperty("--ptr-x", (shown.x * 100).toFixed(2))
      root.style.setProperty("--ptr-y", (shown.y * 100).toFixed(2))
      root.style.setProperty("--ptr-dx", (shown.x * 2 - 1).toFixed(4))
      root.style.setProperty("--ptr-dy", (shown.y * 2 - 1).toFixed(4))
      root.style.setProperty("--ptr-glow", shown.glow.toFixed(3))

      if (moving) frame = requestAnimationFrame(paint)
    }

    const aim = (x: number, y: number, glow: number) => {
      target.x = clamp01(x)
      target.y = clamp01(y)
      target.glow = glow
      if (!frame) frame = requestAnimationFrame(paint)
    }

    /** Desktop e caneta: posição absoluta na viewport. */
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return
      aim(event.clientX / window.innerWidth, event.clientY / window.innerHeight, 1)
    }

    /** Saiu da janela: o brilho se apaga e o campo volta ao centro. */
    const onPointerLeave = () => aim(0.5, 0.5, 0)

    /** Celular: o arrasto do dedo comanda diretamente. */
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0]
      if (!touch) return
      touchedAt = event.timeStamp
      aim(touch.clientX / window.innerWidth, touch.clientY / window.innerHeight, 1)
    }

    /**
     * Giroscópio: `gamma` é a inclinação lateral e `beta` a frontal.
     * A referência de `beta` é 45°, que é como o aparelho costuma ser segurado.
     */
    const onOrientation = (event: DeviceOrientationEvent) => {
      const { gamma, beta } = event
      if (gamma === null || beta === null) return
      if (event.timeStamp - touchedAt < 1200) return
      tiltedAt = event.timeStamp
      aim((gamma + 45) / 90, (beta - 5) / 80, 1)
    }

    /** Sem toque nem giroscópio, a rolagem faz a luz passear pela tela. */
    const onScroll = () => {
      if (!coarse.matches) return

      const now = performance.now()
      if (now - touchedAt < 1200 || now - tiltedAt < 1200) return

      const runway = document.documentElement.scrollHeight - window.innerHeight
      const progress = runway > 0 ? clamp01(window.scrollY / runway) : 0
      aim(0.5 + Math.sin(progress * Math.PI * 2) * 0.32, progress, 1)
    }

    /** O iOS só libera o giroscópio a partir de um gesto real do usuário. */
    const askForGyroscope = () => {
      const api = window.DeviceOrientationEvent as OrientationPermission | undefined
      if (!api) return
      if (typeof api.requestPermission !== "function") return
      api
        .requestPermission()
        .then((answer) => {
          if (answer === "granted") window.addEventListener("deviceorientation", onOrientation)
        })
        .catch(() => {
          /* Recusado ou indisponível: o toque e a rolagem seguem no comando. */
        })
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("pointerleave", onPointerLeave)
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchstart", askForGyroscope, { passive: true, once: true })
    window.addEventListener("scroll", onScroll, { passive: true })

    /* Android e desktops com sensor entregam o evento sem pedir permissão. */
    const gyroscopeIsOpen =
      typeof window.DeviceOrientationEvent !== "undefined" &&
      typeof (window.DeviceOrientationEvent as OrientationPermission).requestPermission !== "function"

    if (gyroscopeIsOpen) window.addEventListener("deviceorientation", onOrientation)

    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("pointerleave", onPointerLeave)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchstart", askForGyroscope)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("deviceorientation", onOrientation)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
