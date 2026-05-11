import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
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
