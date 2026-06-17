export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 dark:from-slate-900 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 dark:text-gray-100 mb-4">Sobre Mim</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-500 dark:to-blue-400 mx-auto"></div>
        </div>

        <div className="prose prose-lg mx-auto text-gray-300 dark:text-gray-300 leading-relaxed bg-gray-800/30 dark:bg-gray-800/30 p-8 rounded-2xl shadow-lg shadow-blue-500/10 dark:shadow-blue-500/10 border border-gray-700/50">
          <p className="text-xl mb-6 text-gray-200 dark:text-gray-200 font-medium">
            Desenvolvedor Full Stack com sólida formação em tecnologias modernas como Java, Spring Boot, React e MySQL, com experiência prática no desenvolvimento de aplicações web completas, desde a concepção até a implantação.
          </p>

          <p className="mb-6">
            Tenho foco em{" "}
            <span className="text-blue-400 dark:text-blue-400 font-semibold bg-gray-700/50 dark:bg-gray-700/50 px-2 py-1 rounded">
              APIs REST, autenticação OAuth2/JWT e integração front-end/back-end
            </span>
            . Durante meu estágio na{" "}
            <span className="text-blue-400 dark:text-blue-400 font-semibold bg-gray-700/50 dark:bg-gray-700/50 px-2 py-1 rounded">
              2D Telecom
            </span>
            , atuei em suporte técnico, desenvolvendo habilidades em resolução de problemas, diagnóstico de sistemas e comunicação eficaz com stakeholders.
          </p>

          <p className="mb-6">
            Em 2026 participei do{" "}
            <span className="text-blue-400 dark:text-blue-400 font-semibold bg-gray-700/50 dark:bg-gray-700/50 px-2 py-1 rounded">
              CampusMobile 2026
            </span>
            ,  onde evolui soluções em um ambiente de mentorias e inovação, fortalecendo minha visão de produto e desenvolvimento ágil.
          </p>

          <p className="text-gray-300 dark:text-gray-300">
            Atualmente faço parte da Prefeitura do Recife como Analista de Inovação na Secretaria de Planejamento e Gestão (SEPLAN), contribuindo com tecnologia e inovação na gestão pública da cidade.
          </p>
        </div>
      </div>
    </section>
  )
}
