import type React from "react"

/**
 * Deslocamento em px que acompanha o ponteiro, lido das variáveis globais
 * publicadas por <PointerField> (`--ptr-dx` / `--ptr-dy`, ambas de -1 a 1).
 *
 * Use profundidades diferentes entre camadas para criar o parallax: valores
 * altos parecem estar à frente, valores negativos afundam no fundo.
 * Só mexe em `transform`, então a composição fica toda na GPU.
 */
export function parallax(depth: number, extra?: string): React.CSSProperties {
  const shift = `translate3d(calc(var(--ptr-dx) * ${depth}px), calc(var(--ptr-dy) * ${depth}px), 0)`
  return { transform: extra ? `${shift} ${extra}` : shift }
}
