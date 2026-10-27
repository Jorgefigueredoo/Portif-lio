import type React from "react"
import { Code2, Rocket, Building2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const STATS = [
  { value: "06", label: "projetos no portfólio" },
  { value: "08", label: "certificações concluídas" },
  { value: "04", label: "experiências em tecnologia" },
  { value: "2027", label: "conclusão em ADS — Senac" },
]

const FOCUS: { Icon: typeof Code2; title: string; body: React.ReactNode }[] = [
  {
    Icon: Code2,
    title: "Foco técnico",
    body: (
      <>
        APIs REST, autenticação OAuth2/JWT e integração front-end/back-end. No estágio na{" "}
        <strong className="font-medium text-ink">2D Telecom</strong> desenvolvi diagnóstico de sistemas, resolução de
        problemas e comunicação com stakeholders.
      </>
    ),
  },
  {
    Icon: Rocket,
    title: "Inovação",
    body: (
      <>
        No <strong className="font-medium text-ink">CampusMobile 2026</strong> evoluí soluções em um ambiente de
        mentorias e inovação, fortalecendo minha visão de produto e desenvolvimento ágil.
      </>
    ),
  },
  {
    Icon: Building2,
    title: "Atuação atual",
    body: (
      <>
        <strong className="font-medium text-ink">Analista de Inovação</strong> na Prefeitura do Recife, na Secretaria
        de Planejamento e Gestão (SEPLAN), levando tecnologia para a gestão pública da cidade.
      </>
    ),
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          index="01"
          label="Sobre"
          title={
            <>
              Do protótipo <span className="accent-serif">ao deploy.</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Declaração de abertura */}
          <Reveal className="lg:col-span-7">
            <p className="text-pretty text-2xl font-medium leading-[1.35] tracking-tight text-ink sm:text-[2rem]">
              Sou desenvolvedor Full Stack com formação em tecnologias modernas como{" "}
              <span className="text-tone-accent">Java, Spring Boot, React e MySQL</span>, e experiência prática
              construindo aplicações web completas — da concepção à implantação.
            </p>
          </Reveal>

          {/* Números */}
          <div className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-3xl border border-line bg-line lg:col-span-5">
            {STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80} className="h-full">
                <div className="flex h-full flex-col justify-between gap-6 bg-page p-5 sm:p-7">
                  <span className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{stat.value}</span>
                  <span className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-ink-dim">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Três frentes */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3 sm:mt-20">
          {FOCUS.map(({ Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 100} className="h-full">
              <div className="group h-full bg-page p-7 transition-colors duration-500 hover:bg-panel sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line text-ink transition-colors duration-500 group-hover:border-tone-accent/60 group-hover:text-tone-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] text-ink-dim">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
