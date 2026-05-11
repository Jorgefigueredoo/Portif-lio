export function Skills() {
  const skillCategories = [
    {
      title: "Backend & Frameworks",
      skills: ["Java", "Spring Boot", "APIs REST", "OAuth2", "JWT", "MySQL / SQL", "PostgreSQL"],
    },
    {
      title: "Frontend & Mobile",
      skills: ["React", "React Native", "Next.js", "TypeScript", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Design Responsivo"],
    },
    {
      title: "DevOps & Deploy",
      skills: ["Docker & Containerização", "Deploy de Aplicações", "CI/CD Básico", "Vercel", "Render", "Git & GitHub"],
    },
    {
      title: "Integrações & APIs",
      skills: ["Integração de Sistemas", "Consumo de APIs Externas", "Webhooks & Callbacks", "Autenticação OAuth2/JWT"],
    },
    {
      title: "Ferramentas",
      skills: ["VS Code", "Figma", "Google Colab", "ChatGPT/IA", "v0", "Lovable"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Mentalidade de Crescimento",
        "Proatividade",
        "Adaptabilidade",
        "Comunicação Técnica",
        "Trabalho em Equipe",
        "Resolução de Problemas",
        "Resiliência",
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 to-slate-900 dark:from-gray-900 dark:to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 dark:text-gray-100 mb-4">Habilidades</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-500 dark:to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologias, ferramentas e conhecimentos que venho desenvolvendo durante minha formação e experiência
            prática.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/40 dark:bg-gray-800/40 rounded-xl p-6 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/15 border border-gray-700/50 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/25 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-100 dark:text-gray-100 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700/50 dark:bg-gray-700/50 text-gray-200 dark:text-gray-200 rounded-full text-sm border border-gray-600/30 dark:border-gray-600/30 hover:bg-gray-600/50 dark:hover:bg-gray-600/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
