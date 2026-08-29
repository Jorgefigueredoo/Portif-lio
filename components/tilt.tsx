"use client"

import { useEffect, useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from "react"

interface TiltProps {
  children: ReactNode
  /** Ângulo máximo da inclinação, em graus. */
  strength?: number
  /** Reflexo de luz que acompanha o ponteiro sobre o cartão. */
  glare?: boolean
  className?: string
}

/** Estado escrito no elemento a cada quadro. */
interface Frame {
  rx: number
  ry: number
  px: number
  py: number
  on: number
  ease: string
}

const RESTING: Frame = { rx: 0, ry: 0, px: 0, py: 0, on: 0, ease: "620ms" }

/**
 * Inclina o conteúdo em 3D seguindo o ponteiro e passa um reflexo de luz
 * por cima, como se o cartão fosse uma placa de vidro sob um foco.
 *
 * No desktop cada cartão reage ao próprio mouse. Em telas de toque não há
 * hover para seguir, então o CSS assume o comando e inclina os cartões pelo
 * campo global de <PointerField> — giroscópio, arrasto ou rolagem.
 *
 * As leituras de posição acontecem no evento e as escritas só no
 * requestAnimationFrame, então nunca há layout e paint no mesmo quadro.
 */
export function Tilt({ children, strength = 7, glare = true, className = "" }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  const next = useRef<Frame>(RESTING)

  const flush = () => {
    frame.current = 0
    const el = ref.current
    if (!el) return

    const { rx, ry, px, py, on, ease } = next.current
    el.style.setProperty("--tilt-rx", `${rx.toFixed(2)}deg`)
    el.style.setProperty("--tilt-ry", `${ry.toFixed(2)}deg`)
    el.style.setProperty("--tilt-px", `${px.toFixed(1)}px`)
    el.style.setProperty("--tilt-py", `${py.toFixed(1)}px`)
    el.style.setProperty("--tilt-on", `${on}`)
    el.style.setProperty("--tilt-ease", ease)
  }

  const schedule = () => {
    if (!frame.current) frame.current = requestAnimationFrame(flush)
  }

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    /* O dedo fica com o campo global; aqui só entram mouse e caneta. */
    if (event.pointerType === "touch") return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    next.current = {
      rx: (0.5 - y) * 2 * strength,
      ry: (x - 0.5) * 2 * strength,
      px: x * rect.width,
      py: y * rect.height,
      on: 1,
      /* Curto enquanto segue o ponteiro, longo para voltar ao lugar. */
      ease: "110ms",
    }
    schedule()
  }

  const handleLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    /* Um toque nunca escreve estilo inline: isso apagaria o retorno do CSS. */
    if (event.pointerType === "touch") return
    next.current = RESTING
    schedule()
  }

  useEffect(() => () => {
    if (frame.current) cancelAnimationFrame(frame.current)
  }, [])

  return (
    <div className={`tilt ${className}`} onPointerMove={handleMove} onPointerLeave={handleLeave}>
      <div ref={ref} className="tilt-inner">
        {children}
        {glare && <span aria-hidden className="tilt-glare" />}
      </div>
    </div>
  )
}
