import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Beacon Navigator - Plataforma Web Full Stack",
      description:
        "Aplicação completa com autenticação OAuth2 (Login Google), sistema de gerenciamento de beacons e locais, perfil de usuário com edição, rotas protegidas por JWT e filtros avançados. Projeto que integra front-end e back-end com foco em segurança e experiência do usuário.",
      image: "/images/beacon-navigator.png",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "OAuth2", "JWT"],
      liveUrl: "https://github.com/Jorgefigueredoo",
    },
    {
      title: "Conecta Hub - Sistema de Rastreamento AgTech",
      description:
        "Plataforma desenvolvida para agricultores rastrearem sementes e insumos, com organização hierárquica de dados, regras de negócio personalizadas e relatórios analíticos. API RESTful robusta que conecta fornecedores, agricultores e operadores.",
      image: "/images/ConectaHub.png",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "API REST"],
      liveUrl: "https://github.com/Jorgefigueredoo/Back-End-ConectaHub.git",
    },
    {
      title: "Sistema de Gestão de Atividades Complementares",
      description:
        "Plataforma acadêmica Full Stack para gestão de atividades complementares, com controle de perfis (aluno, coordenador e administrador), cadastro e validação de horas por categoria, upload e validação de certificados, cálculo automático de horas, dashboard analítico e fluxo de aprovação multinível.",
      image: "/images/atividades-complementares.png",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Upload de Arquivos"],
      liveUrl: "https://github.com/Jorgefigueredoo",
    },
    {
      title: "Sistema de Agendamento para Barbearia",
      description:
        "Aplicação web para gestão de agendamentos com controle de horários, notificações automáticas e painel administrativo para visualização de agenda. Foco em usabilidade e experiência fluida tanto para clientes quanto para administradores.",
      image: "/images/barbearia.png",
      technologies: ["React", "JavaScript", "APIs REST"],
      liveUrl: "https://github.com/Jorgefigueredoo",
    },
    {
      title: "Landing Page Fisioterapeuta",
      description:
        "Landing page desenvolvida para um fisioterapeuta, com foco em apresentar serviços, especialidades e facilitar o contato com pacientes. O projeto priorizou um design responsivo, navegação intuitiva e uma comunicação clara, visando melhorar a presença digital e a captação de novos atendimentos.",
      image: "/images/fisioterapiaLD.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://fisioterapiapedrosantos.vercel.app/",
    },
    {
      title: "Landing Pages Personalizadas",
      description:
        "Desenvolvimento de páginas institucionais e de conversão responsivas, com design moderno, otimização para SEO e integração com ferramentas de analytics. Soluções sob medida para fortalecer a presença digital de clientes.",
      image: "/images/landing-pages.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      liveUrl: "https://github.com/Jorgefigueredoo",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 dark:from-slate-900 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 dark:text-gray-100 mb-4">Projetos</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-500 dark:to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi recentemente. Cada um representa um desafio único e uma
            oportunidade de aprendizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 bg-gray-800/40 dark:bg-gray-800/40 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/15 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden hover:scale-[1.02] cursor-pointer border border-gray-700/50"
            >
              <div className="aspect-[3/2] relative overflow-hidden bg-gray-900/50">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-300 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gray-700/50 dark:bg-gray-700/50 text-gray-200 dark:text-gray-200 hover:bg-blue-600/20 dark:hover:bg-blue-600/20 border-0 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="border-blue-500/50 dark:border-blue-500/50 text-blue-400 dark:text-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-600/10 hover:border-blue-400 dark:hover:border-blue-400 bg-gray-800/20 dark:bg-gray-800/20 cursor-pointer transition-all"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Projeto
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
