import { Award, GraduationCap } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading, accentVars, type Accent } from "@/components/section-heading"

export function Certifications() {
  /** Ciclo de cores aplicado aos cartões de certificado. */
  const palette: Accent[] = ["red", "green", "lime", "emerald", "crimson", "steel"]

  const certifications = [
    { title: "Java Completo", issuer: "Professor Nélio Alves (Udemy)" },
    { title: "Spring Boot Avançado (Microsserviços)", issuer: "Treina Recife" },
    { title: "Formação em Spring Boot", issuer: "DIO" },
    { title: "Java Básico", issuer: "DIO" },
    { title: "React Native", issuer: "Treina Recife" },
    { title: "Formação em Python", issuer: "DIO" },
    { title: "Python", issuer: "Fundação Bradesco" },
    { title: "JavaScript", issuer: "DIO" },
  ]

  const education = {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Senac Pernambuco",
    period: "Janeiro 2025 - Junho 2027",
    status: "Em curso",
    description:
      "Formação focada em desenvolvimento de software, banco de dados, engenharia de requisitos, arquitetura de sistemas e metodologias ágeis.",
  }

  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          tag="05 — Formação"
          accent="lime"
          title={<>Formação & <span className="grad-text">Certificações</span></>}
          description="Formação acadêmica e cursos que venho realizando para me especializar no desenvolvimento Full Stack."
        />

        {/* Formação acadêmica em destaque */}
        <Reveal>
          <div className="relative mb-8 overflow-hidden rounded-[2rem] bg-grad-cool p-[2px]">
            <div className="rounded-[calc(2rem-2px)] bg-page/90 p-8 backdrop-blur-xl sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="neon-icon h-16 w-16 flex-shrink-0" style={accentVars("green", "crimson")}>
                  <GraduationCap className="h-8 w-8" />
                </span>

                <div className="flex-1">
                  <div className="mb-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <h3 className="font-display text-2xl font-bold text-ink">{education.title}</h3>
                    <span className="w-fit rounded-full border border-line bg-panel-2/70 px-4 py-1.5 text-sm text-ink-dim">
                      {education.period}
                    </span>
                  </div>

                  <p className="mb-3 font-display text-lg font-bold text-neon-green">{education.institution}</p>
                  <p className="leading-relaxed text-ink-soft">{education.description}</p>

                  <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-neon-emerald/40 bg-neon-emerald/10 px-4 py-1.5 text-sm font-bold text-neon-emerald">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-neon-emerald" />
                    {education.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Certificados */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => {
            const accent = palette[index % palette.length]
            const accent2 = palette[(index + 2) % palette.length]

            return (
              <Reveal key={cert.title} delay={(index % 4) * 70}>
                <div className="neon-card h-full p-6" style={accentVars(accent, accent2)}>
                  <span className="neon-icon mb-4 h-11 w-11">
                    <Award className="h-5 w-5" />
                  </span>
                  <h4 className="mb-1.5 font-display text-base font-bold leading-tight text-ink">{cert.title}</h4>
                  <p className="text-sm text-ink-dim">{cert.issuer}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
