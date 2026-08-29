import { Calendar, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading, accentVars, accentColor, type Accent } from "@/components/section-heading"

export function Experience() {
  const experiences: {
    accent: Accent
    accent2: Accent
    title: string
    company: string
    period: string
    location: string
    description: string[]
  }[] = [
    {
      accent: "accent-soft",
      accent2: "accent",
      title: "Participante - CampusMobile 2026",
      company: "Instituto NET Claro Embratel / LSI-TEC",
      period: "Janeiro - Fevereiro 2026",
      location: "São Paulo, SP",
      description: [
        "Participação em programa intensivo de inovação focado em soluções mobile para agronegócio",
        "Desenvolvimento colaborativo de MVP com apresentação para banca avaliadora técnica",
        "Networking com profissionais do ecossistema de startups e empresas de tecnologia",
        "Aplicação prática de metodologias ágeis e ferramentas de gestão de projetos",
      ],
    },
    {
      accent: "graphite-deep",
      accent2: "graphite",
      title: "Residência no Porto Digital",
      company: "Liferay",
      period: "Ago 2025 - Dez 2025",
      location: "Recife, PE",
      description: [
        "A Residência no Porto Digital foi um grande desafio para mim e para o meu squad, no qual desenvolvemos uma solução web completa",
        "Desenvolvimento do front-end utilizando HTML, CSS e JavaScript, e do back-end em Java com Spring Boot",
        "Atuei como líder responsável pelo desenvolvimento back-end da aplicação, implementando autenticação JWT para validação e segurança dos dados integrados ao banco de dados",
        "Realizamos a hospedagem da aplicação utilizando Vercel no front-end e Render no back-end, com PostgreSQL como banco de dados",
        "Experiência altamente colaborativa, com forte aprendizado técnico, trabalho em equipe e resolução de problemas reais",
        "Além dessa experiência, tive a honra de ser reconhecido com o certificado de Aluno Destaque da Residência, em virtude do meu desempenho durante o desenvolvimento da aplicação.",
      ],
    },
    {
      accent: "slate",
      accent2: "graphite-soft",
      title: "Estagiário de Suporte Técnico",
      company: "2D Telecom",
      period: "Junho 2024 - Junho 2025",
      location: "Recife, PE",
      description: [
        "Atendimento técnico a clientes corporativos com resolução de incidentes de conectividade",
        "Diagnóstico e troubleshooting de redes, melhorando tempo de resposta a chamados",
        "Suporte presencial e remoto, desenvolvendo habilidades de comunicação técnica",
        "Documentação de processos e criação de base de conhecimento para equipe",
      ],
    },
  ]

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          tag="02 — Trajetória"
          accent="accent"
          title={<><span className="grad-text">Experiência</span></>}
        />

        {/* Linha do tempo */}
        <div className="relative">
          <span
            aria-hidden
            className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-tone-accent via-tone-accent/40 to-transparent sm:block"
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Reveal key={exp.title} delay={index * 90}>
                <div className="relative sm:pl-16">
                  {/* Marcador da linha do tempo */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-8 hidden h-10 w-10 place-items-center rounded-full border-4 border-page sm:grid"
                    style={{
                      backgroundColor: accentColor(exp.accent),
                      boxShadow: `0 0 24px ${accentColor(exp.accent, 0.8)}`,
                    }}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-page" />
                  </span>

                  <div className="neon-card p-8" style={accentVars(exp.accent, exp.accent2)}>
                    <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink">{exp.title}</h3>
                        <p
                          className="mt-2 w-fit rounded-lg px-3 py-1 font-semibold"
                          style={{
                            color: accentColor(exp.accent),
                            backgroundColor: accentColor(exp.accent, 0.12),
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-ink-dim lg:items-end">
                        <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-panel-2/60 px-3 py-1">
                          <Calendar className="h-4 w-4" style={{ color: accentColor(exp.accent) }} />
                          {exp.period}
                        </span>
                        <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-panel-2/60 px-3 py-1">
                          <MapPin className="h-4 w-4" style={{ color: accentColor(exp.accent) }} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 text-ink-soft">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: accentColor(exp.accent) }}
                          />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
