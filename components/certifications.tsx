import { GraduationCap } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const CERTIFICATIONS = [
  { title: "Java Completo", issuer: "Prof. Nélio Alves · Udemy" },
  { title: "Spring Boot Avançado (Microsserviços)", issuer: "Treina Recife" },
  { title: "Formação em Spring Boot", issuer: "DIO" },
  { title: "Java Básico", issuer: "DIO" },
  { title: "React Native", issuer: "Treina Recife" },
  { title: "Formação em Python", issuer: "DIO" },
  { title: "Python", issuer: "Fundação Bradesco" },
  { title: "JavaScript", issuer: "DIO" },
]

const EDUCATION = {
  title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  institution: "Faculdade Senac Pernambuco",
  period: "Jan 2025 — Jun 2027",
  status: "Em curso",
  description:
    "Formação focada em desenvolvimento de software, banco de dados, engenharia de requisitos, arquitetura de sistemas e metodologias ágeis.",
}

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          index="05"
          label="Formação"
          title={
            <>
              Sempre <span className="accent-serif">aprendendo.</span>
            </>
          }
          description="Formação acadêmica e cursos que venho fazendo para me especializar no desenvolvimento Full Stack."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Formação acadêmica */}
          <Reveal className="lg:col-span-5">
            <div className="surface relative h-full overflow-hidden p-7 sm:p-9">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-tone-accent/15 blur-3xl"
              />
              <div className="relative flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-tone-accent text-white dark:text-[#160a05]">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-tone-live/40 bg-tone-live/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-tone-live">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-tone-live" />
                  {EDUCATION.status}
                </span>
              </div>

              <p className="relative mt-10 font-mono text-xs uppercase tracking-[0.14em] text-ink-dim">{EDUCATION.period}</p>
              <h3 className="relative mt-3 text-2xl font-semibold leading-tight text-ink sm:text-3xl">{EDUCATION.title}</h3>
              <p className="relative mt-2 font-serif text-xl italic text-tone-accent">{EDUCATION.institution}</p>
              <p className="relative mt-5 leading-relaxed text-ink-soft">{EDUCATION.description}</p>
            </div>
          </Reveal>

          {/* Certificados */}
          <div className="lg:col-span-7">
            <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {CERTIFICATIONS.map((cert, index) => (
                <li key={cert.title}>
                  <Reveal delay={(index % 2) * 80}>
                    <div className="group flex items-start gap-4 border-b border-line py-5">
                      <span className="pt-1 font-mono text-[11px] text-ink-dim transition-colors group-hover:text-tone-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium leading-snug text-ink">{cert.title}</span>
                        <span className="mt-1 block text-sm text-ink-dim">{cert.issuer}</span>
                      </span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
