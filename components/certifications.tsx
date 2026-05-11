import { Card, CardContent } from "@/components/ui/card"
import { Award, GraduationCap } from "lucide-react"

export function Certifications() {
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
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 dark:from-slate-900 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 dark:text-gray-100 mb-4">Formação & Certificações</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-500 dark:to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Formação acadêmica e cursos que venho realizando para me especializar no desenvolvimento Full Stack.
          </p>
        </div>

        <div className="mb-12">
          <Card className="border-0 bg-gray-800/40 dark:bg-gray-800/40 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/15 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/25 transition-all duration-300 border border-gray-700/50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-blue-400 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 gap-2">
                    <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-100">{education.title}</h3>
                    <span className="text-sm text-gray-400 dark:text-gray-400 bg-gray-700/30 dark:bg-gray-700/30 px-3 py-1 rounded-lg w-fit">
                      {education.period}
                    </span>
                  </div>
                  <p className="text-blue-400 dark:text-blue-400 font-medium mb-2">{education.institution}</p>
                  <p className="text-gray-300 dark:text-gray-300 leading-relaxed">{education.description}</p>
                  <span className="inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30">
                    {education.status}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-0 bg-gray-800/40 dark:bg-gray-800/40 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/15 hover:shadow-blue-500/25 dark:hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.03] border border-gray-700/50"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-blue-400 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-100 dark:text-gray-100 mb-1 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-400 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
