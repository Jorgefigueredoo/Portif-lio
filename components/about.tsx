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
            Estudante de Análise e Desenvolvimento de Sistemas no 2º período, com 20 anos e 1 ano de experiência prática
            na área de tecnologia.
          </p>

          <p className="mb-6">
            Durante meu estágio na{" "}
            <span className="text-blue-400 dark:text-blue-400 font-semibold bg-gray-700/50 dark:bg-gray-700/50 px-2 py-1 rounded">
              2D Telecom
            </span>
            , uma empresa provedora de internet, atuei como suporte técnico e atendimento ao cliente, desenvolvendo
            habilidades técnicas e de comunicação essenciais para o mercado de trabalho.
          </p>

          <p className="mb-6">
            Iniciei minha jornada na programação durante o curso e me dediquei a aprender tecnologias como{" "}
            <span className="text-blue-400 dark:text-blue-400 font-semibold bg-gray-700/50 dark:bg-gray-700/50 px-2 py-1 rounded">
              Java,Spring Boot, API Rest, HTML, CSS, JavaScript e TypeScript
            </span>
            . Minha paixão é transformar ideias em soluções digitais, sempre buscando as melhores práticas e tecnologias
            inovadoras.
          </p>

          <p className="text-gray-300 dark:text-gray-300">
            Atualmente estou em busca de novas oportunidades de estágio para continuar evoluindo como desenvolvedor e
            contribuir com projetos inovadores que façam a diferença.
          </p>
        </div>
      </div>
    </section>
  )
}
