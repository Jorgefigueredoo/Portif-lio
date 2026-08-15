import type React from "react"
import { Code2, Rocket, Building2, Quote } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading, accentVars, type Accent } from "@/components/section-heading"

export function About() {
  const cards: {
    accent: Accent
    accent2: Accent
    Icon: typeof Code2
    title: string
    body: React.ReactNode
  }[] = [
    {
      accent: "red",
      accent2: "steel",
      Icon: Code2,
      title: "Foco técnico",
      body: (
        <>
          Tenho foco em <strong className="font-semibold text-neon-red">APIs REST, autenticação OAuth2/JWT e integração front-end/back-end</strong>. Durante meu estágio na{" "}
          <strong className="font-semibold text-neon-red">2D Telecom</strong>, atuei em suporte técnico, desenvolvendo
          habilidades em resolução de problemas, diagnóstico de sistemas e comunicação eficaz com stakeholders.
        </>
      ),
    },
    {
      accent: "green",
      accent2: "crimson",
      Icon: Rocket,
      title: "Inovação",
      body: (
        <>
          Em 2026 participei do <strong className="font-semibold text-neon-green">CampusMobile 2026</strong>, onde evolui
          soluções em um ambiente de mentorias e inovação, fortalecendo minha visão de produto e desenvolvimento ágil.
        </>
      ),
    },
    {
      accent: "lime",
      accent2: "steel",
      Icon: Building2,
      title: "Atuação atual",
      body: (
        <>
          Atualmente faço parte da Prefeitura do Recife como{" "}
          <strong className="font-semibold text-neon-lime">Analista de Inovação</strong> na Secretaria de Planejamento e
          Gestão (SEPLAN), contribuindo com tecnologia e inovação na gestão pública da cidade.
        </>
      ),
    },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading tag="01 — Sobre" accent="red" title={<>Sobre <span className="grad-text">Mim</span></>} />

        {/* Parágrafo de abertura em destaque */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-neon-crimson/15 via-panel/60 to-neon-red/10 p-8 backdrop-blur-xl sm:p-12">
            <Quote className="absolute right-8 top-6 h-24 w-24 text-ink/[0.06]" />
            <p className="relative max-w-4xl text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              Desenvolvedor Full Stack com sólida formação em tecnologias modernas como Java, Spring Boot, React e
              MySQL, com experiência prática no desenvolvimento de aplicações web completas, desde a concepção até a
              implantação.
            </p>
          </div>
        </Reveal>

        {/* Cartões coloridos */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {cards.map(({ accent, accent2, Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="neon-card h-full p-8" style={accentVars(accent, accent2)}>
                <div className="neon-icon mb-6 h-14 w-14">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="leading-relaxed text-ink-soft">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
