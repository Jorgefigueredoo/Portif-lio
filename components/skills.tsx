export function Skills() {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: ["Java","Python", "HTML/CSS/JavaScript", "TypeScript"],
    },
    {
      title: "Ferramentas & Tecnologias",
      skills: ["Git/GitHub", "Google Colab", "Figma", "ChatGPT/IA", "VS Code", "v0", "Lovable"],
    },
    {
      title: "Frameworks & Bibliotecas",
      skills: ["React", "Next.js", "Spring Boot", "API REST"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Trabalho em Equipe",
        "Comunicação",
        "Resolução de Problemas",
        "Atendimento ao Cliente",
        "Adaptabilidade",
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 to-slate-900 dark:from-gray-900 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 dark:text-gray-100 mb-4">Habilidades</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-500 dark:to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologias, ferramentas e conhecimentos que venho desenvolvendo durante minha formação e experiência
            prática.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
