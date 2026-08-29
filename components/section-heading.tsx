import type React from "react"
import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"

/**
 * Tons do sistema. Os nomes descrevem o papel, não a cor: assim a paleta pode
 * mudar sem que os componentes passem a mentir sobre o que pedem.
 * Os valores reais mudam conforme o tema (ver globals.css).
 */
export type Accent = "accent" | "accent-soft" | "slate" | "graphite" | "graphite-deep" | "graphite-soft"

/** Referência CSS ao tom, ex.: rgb(var(--tone-accent)). */
export function accentColor(accent: Accent, alpha?: number) {
  return alpha === undefined ? `rgb(var(--tone-${accent}))` : `rgb(var(--tone-${accent}) / ${alpha})`
}

/** Variáveis consumidas por .neon-card e .section-tag. */
export function accentVars(accent: Accent, accent2: Accent = accent): React.CSSProperties {
  return {
    "--accent-rgb": `var(--tone-${accent})`,
    "--accent-2-rgb": `var(--tone-${accent2})`,
  } as React.CSSProperties
}

interface SectionHeadingProps {
  /** Etiqueta numerada, ex.: "01 — Sobre" */
  tag: string
  accent: Accent
  title: ReactNode
  description?: string
}

export function SectionHeading({ tag, accent, title, description }: SectionHeadingProps) {
  return (
    <Reveal variant="wipe" className="mx-auto mb-16 max-w-3xl text-center">
      <span className="section-tag" style={accentVars(accent)}>
        {tag}
      </span>
      <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">{title}</h2>
      {description && <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">{description}</p>}
    </Reveal>
  )
}
