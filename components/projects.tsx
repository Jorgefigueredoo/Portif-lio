"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionHeading } from "@/components/section-heading"

gsap.registerPlugin(ScrollTrigger)

const PROJECTS: {
  title: string
  kind: string
  description: string
  image: string
  technologies: string[]
  url: string
  /** Imagens que são logotipos, não capturas de tela: inteiras, sem corte. */
  logo?: boolean
}[] = [
  {
    title: "Beacon Navigator",
    kind: "Plataforma web full stack",
    description:
      "Aplicação completa com login Google (OAuth2), gestão de beacons e locais, perfil de usuário editável, rotas protegidas por JWT e filtros avançados — front e back integrados com foco em segurança.",
    image: "/images/beacon-navigator.webp",
    logo: true,
    technologies: ["Java", "Spring Boot", "React", "MySQL", "OAuth2", "JWT"],
    url: "https://github.com/Jorgefigueredoo",
  },
  {
    title: "Conecta Hub",
    kind: "Rastreamento AgTech",
    description:
      "Plataforma para agricultores rastrearem sementes e insumos, com dados hierárquicos, regras de negócio personalizadas e relatórios analíticos. API RESTful que conecta fornecedores, agricultores e operadores.",
    image: "/images/ConectaHub.webp",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "API REST"],
    url: "https://github.com/Jorgefigueredoo/Back-End-ConectaHub.git",
  },
  {
    title: "Atividades Complementares",
    kind: "Plataforma acadêmica",
    description:
      "Gestão de horas complementares com perfis de aluno, coordenador e administrador, upload e validação de certificados, cálculo automático de horas, dashboard analítico e aprovação multinível.",
    image: "/images/atividades-complementares.webp",
    logo: true,
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Upload de arquivos"],
    url: "https://github.com/Jorgefigueredoo",
  },
  {
    title: "Agendamento para Barbearia",
    kind: "Sistema de agendamentos",
    description:
      "Gestão de agendamentos com controle de horários, notificações automáticas e painel administrativo de agenda — pensado para ser fluido tanto para clientes quanto para administradores.",
    image: "/images/barbearia.webp",
    technologies: ["React", "JavaScript", "APIs REST"],
    url: "https://github.com/Jorgefigueredoo",
  },
  {
    title: "Fisioterapia Pedro Santos",
    kind: "Landing page · cliente",
    description:
      "Landing page para um fisioterapeuta apresentar serviços e especialidades e facilitar o contato com pacientes. Design responsivo, navegação direta e comunicação clara para captar novos atendimentos.",
    image: "/images/fisioterapiaLD.webp",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    url: "https://fisioterapiapedrosantos.vercel.app/",
  },
  {
    title: "Landing Pages Personalizadas",
    kind: "Páginas sob medida",
    description:
      "Páginas institucionais e de conversão responsivas, com design moderno, SEO e integração com analytics — soluções sob medida para fortalecer a presença digital de clientes.",
    image: "/images/landing-pages.webp",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    url: "https://github.com/Jorgefigueredoo",
  },
]

/**
 * Projetos em pilha: no desktop cada cartão gruda no topo (`sticky`) e o
 * seguinte desliza por cima dele. Enquanto é coberto, o cartão de baixo
 * encolhe e escurece — a mesma timeline com `scrub` do hero, agora por
 * cartão. No celular os cartões são altos demais para grudar, então viram
 * uma lista comum.
 */
export function Projects() {
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", () => {
      const slots = gsap.utils.toArray<HTMLElement>(".project-slot", list)
      slots.forEach((slot, i) => {
        const next = slots[i + 1]
        if (!next) return
        const card = slot.querySelector(".project-card")
        const shade = slot.querySelector(".project-shade")
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: "top top+=120",
            scrub: true,
          },
        })
        tl.to(card, { scale: 0.92, ease: "none" }, 0).to(shade, { opacity: 0.6, ease: "none" }, 0)
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          index="03"
          label="Projetos"
          title={
            <>
              Trabalhos <span className="accent-serif">selecionados.</span>
            </>
          }
          description="Projetos recentes — cada um com um desafio próprio, do back-end seguro à página que precisa converter."
        />

        <div ref={listRef} className="flex flex-col gap-6 lg:gap-[14vh]">
          {PROJECTS.map((project, index) => {
            const isGithub = project.url.includes("github.com")
            return (
              <div
                key={project.title}
                className="project-slot lg:sticky"
                style={{ top: `calc(6.5rem + ${index * 12}px)` }}
              >
                <article className="project-card surface relative grid origin-top overflow-hidden lg:h-[min(72vh,580px)] lg:grid-cols-12">
                  {/* Texto */}
                  <div className="order-2 flex flex-col p-6 sm:p-10 lg:order-1 lg:col-span-5">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
                      <span>
                        <span className="text-tone-accent">{String(index + 1).padStart(2, "0")}</span> /{" "}
                        {String(PROJECTS.length).padStart(2, "0")}
                      </span>
                      <span>{project.kind}</span>
                    </div>

                    <h3 className="mt-8 text-3xl font-semibold leading-[1.05] text-ink sm:text-4xl lg:mt-auto">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-pretty leading-relaxed text-ink-soft lg:line-clamp-5">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-line transition-all duration-300 group-hover/link:border-tone-accent group-hover/link:bg-tone-accent group-hover/link:text-white">
                        {isGithub ? <Github className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                      </span>
                      <span className="link-underline">{isGithub ? "Ver código no GitHub" : "Ver site no ar"}</span>
                    </a>
                  </div>

                  {/* Imagem */}
                  <div className="relative order-1 m-2 aspect-[16/10] overflow-hidden rounded-[18px] border border-line bg-panel-2 lg:order-2 lg:col-span-7 lg:aspect-auto">
                    <Image
                      src={project.image}
                      alt={`Captura de tela do projeto ${project.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className={`transition-transform ${project.logo ? "object-contain p-10 sm:p-16" : "object-cover object-top"} [transition-duration:1.2s] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]`}
                    />
                  </div>

                  {/* Véu que escurece o cartão enquanto o próximo passa por cima. */}
                  <span aria-hidden className="project-shade pointer-events-none absolute inset-0 bg-page opacity-0" />
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
