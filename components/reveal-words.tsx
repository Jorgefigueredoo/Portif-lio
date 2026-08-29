"use client"

import { Fragment, useEffect, useRef, useState } from "react"

interface RevealWordsProps {
  text: string
  /** Palavras a partir deste índice recebem `highlightClassName`. */
  highlightFrom?: number
  highlightClassName?: string
  /** Atraso antes da primeira palavra, em milissegundos. */
  delay?: number
  /** Intervalo entre uma palavra e a seguinte, em milissegundos. */
  step?: number
  className?: string
}

/**
 * Faz o título subir palavra por palavra, cada uma saindo de trás da linha
 * anterior. É o `Reveal` levado ao nível da palavra: mesmo IntersectionObserver,
 * mesma curva, mas com o escalonamento vindo do índice.
 *
 * O texto continua legível como uma frase única para leitores de tela: as
 * quebras são só `<span>`, e o espaço entre palavras é preservado.
 */
export function RevealWords({
  text,
  highlightFrom,
  highlightClassName = "",
  delay = 0,
  step = 70,
  className = "",
}: RevealWordsProps) {
  const ref = useRef<HTMLSpanElement>(null)
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
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = text.split(" ")

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => {
        const highlighted = highlightFrom !== undefined && index >= highlightFrom

        return (
          <Fragment key={`${word}-${index}`}>
            <span className="word-mask">
              <span
                className={`word-rise ${visible ? "is-visible" : ""} ${highlighted ? highlightClassName : ""}`}
                style={{ transitionDelay: `${delay + index * step}ms` }}
              >
                {word}
              </span>
            </span>
            {/* O espaço fica fora da máscara para não ser recortado. */}
            {index < words.length - 1 ? " " : null}
          </Fragment>
        )
      })}
    </span>
  )
}
