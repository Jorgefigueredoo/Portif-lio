import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { Tilt } from "@/components/tilt"
import { ScrollDrift } from "@/components/scroll-drift"
import { SectionHeading, accentVars, accentColor, type Accent } from "@/components/section-heading"

export function Projects() {
  const projects: {
    accent: Accent
    accent2: Accent
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
  }[] = [
    {
      accent: "graphite",
      accent2: "graphite-deep",
      title: "Beacon Navigator - Plataforma Web Full Stack",
      description:
        "Aplicação completa com autenticação OAuth2 (Login Google), sistema de gerenciamento de beacons e locais, perfil de usuário com edição, rotas protegidas por JWT e filtros avançados. Projeto que integra front-end e back-end com foco em segurança e experiência do usuário.",
      image: "/images/beacon-navigator.png",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "OAuth2", "JWT"],
      liveUrl: "https://github.com/Jorgefigueredoo",
    },
    {
      accent: "accent-soft",
      accent2: "accent",
      title: "Conecta Hub - Sistema de Rastreamento AgTech",
      description:
        "Plataforma desenvolvida para agricultores rastrearem sementes e insumos, com organização hierárquica de dados, regras de negócio personalizadas e relatórios analíticos. API RESTful robusta que conecta fornecedores, agricultores e operadores.",
      image: "/images/ConectaHub.png",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "API REST"],
      liveUrl: "https://github.com/Jorgefigueredoo/Back-End-ConectaHub.git",
    },
    {
      accent: "accent",
      accent2: "graphite-deep",
      title: "Sistema de Gestão de Atividades Complementares",
      description:
        "Plataforma acadêmica Full Stack para gestão de atividades complementares, com controle de perfis (aluno, coordenador e administrador), cadastro e validação de horas por categoria, upload e validação de certificados, cálculo automático de horas, dashboard analítico e fluxo de aprovação multinível.",
      image: "/images/atividades-complementares.png",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Upload de Arquivos"],
      liveUrl: "https://github.com/Jorgefigueredoo",
    },
    {
      accent: "slate",
      accent2: "graphite-soft",
      title: "Sistema de Agendamento para Barbearia",
      description:
        "Aplicação web para gestão de agendamentos com controle de horários, notificações automáticas e painel administrativo para visualização de agenda. Foco em usabilidade e experiência fluida tanto para clientes quanto para administradores.",
      image: "/images/barbearia.png",
      technologies: ["React", "JavaScript", "APIs REST"],
      liveUrl: "https://github.com/Jorgefigueredoo",
    },
    {
      accent: "graphite-deep",
      accent2: "graphite",
      title: "Landing Page Fisioterapeuta",
      description:
        "Landing page desenvolvida para um fisioterapeuta, com foco em apresentar serviços, especialidades e facilitar o contato com pacientes. O projeto priorizou um design responsivo, navegação intuitiva e uma comunicação clara, visando melhorar a presença digital e a captação de novos atendimentos.",
      image: "/images/fisioterapiaLD.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://fisioterapiapedrosantos.vercel.app/",
    },
    {
      accent: "graphite-soft",
      accent2: "slate",
      title: "Landing Pages Personalizadas",
      description:
        "Desenvolvimento de páginas institucionais e de conversão responsivas, com design moderno, otimização para SEO e integração com ferramentas de analytics. Soluções sob medida para fortalecer a presença digital de clientes.",
      image: "/images/landing-pages.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      liveUrl: "https://github.com/Jorgefigueredoo",
    },
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          tag="03 — Portfólio"
          accent="accent"
          title={<><span className="grad-text">Projetos</span></>}
          description="Aqui estão alguns dos projetos que desenvolvi recentemente. Cada um representa um desafio único e uma oportunidade de aprendizado."
        />

        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 90}>
              <Tilt strength={7}>
                <article
                  className="neon-card group flex h-full flex-col overflow-hidden"
                  style={accentVars(project.accent, project.accent2)}
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {/* A camada externa desliza com a rolagem; a interna guarda
                        o zoom do hover. Uma não atropela a outra. */}
                    <ScrollDrift className="scroll-zoom absolute inset-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </ScrollDrift>
                    {/* Véu colorido leve, que some no hover para revelar a imagem original */}
                    <span
                      aria-hidden
                      className="absolute inset-0 opacity-20 mix-blend-color transition-opacity duration-500 group-hover:opacity-0"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${accentColor(project.accent)}, ${accentColor(project.accent2)})`,
                      }}
                    />
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-1"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${accentColor(project.accent)}, ${accentColor(project.accent2)})`,
                      }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-xl font-bold leading-snug text-ink">{project.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="neon-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border-2 px-6 py-2.5 font-bold transition-all duration-300"
                      style={{
                        borderColor: accentColor(project.accent, 0.5),
                        color: accentColor(project.accent),
                      }}
                    >
                      Ver Projeto
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
