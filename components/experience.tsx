import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Suporte Técnico",
      company: "2D Telecom",
      period: "2024 - 2025",
      location: "Recife, PE",
      description: [
        "Atendimento ao cliente e resolução de problemas técnicos",
        "Suporte técnico especializado em provedores de internet",
        "Desenvolvimento de habilidades de comunicação e trabalho em equipe",
        "Experiência prática com troubleshooting e resolução de problemas",
      ],
    },
    {
      title: "Estudante",
      company: "Análise e Desenvolvimento de Sistemas",
      period: "2025 - Presente",
      location: "Recife, PE",
      description: [
        "Cursando 2º período de Análise e Desenvolvimento de Sistemas",
        "Aprendizado em lógica de programação e estruturas de dados",
        "Desenvolvimento de projetos práticos em Python, JavaScript, Java e PHP",
        "Foco em desenvolvimento web e soluções digitais",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 to-slate-900 dark:from-gray-900 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 dark:text-gray-100 mb-4">Experiência</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-500 dark:to-blue-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-0 bg-gray-800/40 dark:bg-gray-800/40 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/15 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] border border-gray-700/50"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-100 mb-1">{exp.title}</h3>
                    <p className="text-lg text-blue-400 dark:text-blue-400 font-medium mb-2 bg-gray-700/30 dark:bg-gray-700/30 px-3 py-1 rounded-lg w-fit">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end text-sm text-gray-400 dark:text-gray-400">
                    <div className="flex items-center gap-1 mb-1 bg-gray-700/30 dark:bg-gray-700/30 px-3 py-1 rounded-lg">
                      <Calendar className="h-4 w-4 text-blue-400 dark:text-blue-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-gray-700/30 dark:bg-gray-700/30 px-3 py-1 rounded-lg">
                      <MapPin className="h-4 w-4 text-blue-400 dark:text-blue-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
