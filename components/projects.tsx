import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Ecoando - Plataforma de Educação Ambiental",
      description:
        "Plataforma digital voltada à educação ambiental e conscientização ecológica. Conecta pessoas, projetos e informações sobre meio ambiente de forma acessível e interativa.",
      image: "/images/ecoando-logo.png",
      technologies: ["Design", "Figma", "UX/UI", "Prototipagem"],
      liveUrl: "https://www.figma.com/proto/YTe27SARND04dd8dVWF6HH?node-id=0-1&t=VJjRbg5UMc5FV7qk-6",
    },
    {
      title: "Calculadora em Python",
      description:
        "Calculadora básica desenvolvida em Python com funcionalidades essenciais de operações matemáticas, demonstrando lógica de programação e estruturas de controle.",
      image: "/images/calculadora-python.png",
      technologies: ["Python", "Google Colab", "Lógica de Programação"],
      liveUrl: "https://colab.research.google.com/drive/1jyPzC5ouDqOVCQIdOb8G9nbpFMyKzhm4?usp=sharing",
    },
    {
      title: "Portfólio Pessoal",
      description:
        "Site pessoal desenvolvido com design dark moderno, padrão de pontos animados e efeitos interativos. Apresenta projetos, habilidades e experiências de forma profissional e responsiva.",
      image: "/images/portfolio-preview.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-gray-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-blue-600/90 text-white px-4 py-2 rounded-lg font-medium">Ver Detalhes</div>
                </div>
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
