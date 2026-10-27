import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"

interface SectionHeadingProps {
  /** Número da seção, ex.: "01" */
  index: string
  /** Nome curto da seção, ex.: "Sobre" */
  label: string
  title: ReactNode
  description?: ReactNode
  /** Conteúdo extra alinhado à direita do título (desktop). */
  aside?: ReactNode
}

/**
 * Cabeçalho editorial das seções: uma régua com o número e o nome em mono,
 * o título grande à esquerda e, opcionalmente, a descrição ou um extra à
 * direita. Trechos em destaque do título usam `.accent-serif`.
 */
export function SectionHeading({ index, label, title, description, aside }: SectionHeadingProps) {
  return (
    <div className="mb-14 sm:mb-20">
      <Reveal variant="wipe">
        <div className="flex items-center gap-4 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
          <span className="text-tone-accent">({index})</span>
          <span>{label}</span>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <h2 className="text-balance text-[2.6rem] font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h2>
        </Reveal>
        {(description || aside) && (
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            {description && <p className="text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>}
            {aside}
          </Reveal>
        )}
      </div>
    </div>
  )
}
