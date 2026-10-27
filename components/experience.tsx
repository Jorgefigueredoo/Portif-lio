import { MapPin, Award } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const EXPERIENCES: {
  title: string
  company: string
  period: string
  location: string
  current?: boolean
  highlight?: string
  description: string[]
}[] = [
  {
    title: "Analista de Inovação",
    company: "Prefeitura do Recife · SEPLAN",
    period: "Atual",
    location: "Recife, PE",
    current: true,
    description: [
      "Atuação na Secretaria de Planejamento e Gestão, contribuindo com tecnologia e inovação na gestão pública da cidade.",
    ],
  },
  {
    title: "Participante — CampusMobile 2026",
    company: "Instituto NET Claro Embratel / LSI-TEC",
    period: "Jan — Fev 2026",
    location: "São Paulo, SP",
    description: [
      "Programa intensivo de inovação focado em soluções mobile para o agronegócio.",
      "Desenvolvimento colaborativo de MVP com apresentação para banca avaliadora técnica.",
      "Networking com profissionais do ecossistema de startups e empresas de tecnologia.",
      "Aplicação prática de metodologias ágeis e ferramentas de gestão de projetos.",
    ],
  },
  {
    title: "Residência no Porto Digital",
    company: "Liferay",
    period: "Ago — Dez 2025",
    location: "Recife, PE",
    highlight: "Aluno Destaque da Residência",
    description: [
      "Desenvolvimento de uma solução web completa em squad: front-end em HTML, CSS e JavaScript e back-end em Java com Spring Boot.",
      "Liderei o back-end da aplicação, implementando autenticação JWT para validação e segurança dos dados.",
      "Deploy com Vercel no front-end, Render no back-end e PostgreSQL como banco de dados.",
      "Experiência altamente colaborativa, com forte aprendizado técnico e resolução de problemas reais.",
    ],
  },
  {
    title: "Estagiário de Suporte Técnico",
    company: "2D Telecom",
    period: "Jun 2024 — Jun 2025",
    location: "Recife, PE",
    description: [
      "Atendimento técnico a clientes corporativos com resolução de incidentes de conectividade.",
      "Diagnóstico e troubleshooting de redes, melhorando o tempo de resposta a chamados.",
      "Suporte presencial e remoto, desenvolvendo comunicação técnica.",
      "Documentação de processos e criação de base de conhecimento para a equipe.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          index="02"
          label="Trajetória"
          title={
            <>
              Experiência que <span className="accent-serif">soma.</span>
            </>
          }
          description="Do suporte técnico à inovação no setor público — cada etapa somou uma camada nova ao jeito como eu construo software."
        />

        <ol className="border-b border-line">
          {EXPERIENCES.map((exp, index) => (
            <li key={exp.title}>
              <Reveal delay={index * 60}>
                <article className="group grid gap-6 border-t border-line py-10 transition-colors duration-500 md:grid-cols-12 md:gap-10 sm:py-12">
                  {/* Coluna de metadados */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:col-span-3 md:flex-col md:items-start">
                    <span
                      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] ${
                        exp.current ? "text-tone-accent" : "text-ink"
                      }`}
                    >
                      {exp.current && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inset-0 animate-ping rounded-full bg-tone-accent/70" />
                          <span className="relative h-2 w-2 rounded-full bg-tone-accent" />
                        </span>
                      )}
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-dim">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="md:col-span-9">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-tone-accent sm:text-3xl">
                          {exp.title}
                        </h3>
                        <p className="mt-1.5 font-serif text-xl italic text-ink-soft">{exp.company}</p>
                      </div>
                      {exp.highlight && (
                        <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-tone-accent/40 bg-tone-accent/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-tone-accent">
                          <Award className="h-3.5 w-3.5" />
                          {exp.highlight}
                        </span>
                      )}
                    </div>

                    <ul className="mt-6 grid gap-x-10 gap-y-3 text-ink-soft lg:grid-cols-2">
                      {exp.description.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed">
                          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-tone-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
