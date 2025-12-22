import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Dot Pattern Background */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
        <div className="grid grid-cols-12 gap-4 h-full p-8">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                Math.random() > 0.7 ? "bg-blue-500" : Math.random() > 0.5 ? "bg-blue-400" : "bg-blue-600"
              } animate-pulse`}
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-400 dark:text-blue-400 font-medium bg-gray-800/50 dark:bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50">
                Disponível para estágio
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 dark:text-gray-100 mb-6 leading-tight">
              Olá, eu sou <span className="text-blue-400 dark:text-blue-400">Jorge Antonio</span>
            </h1>

            <p className="text-xl text-gray-300 dark:text-gray-300 mb-8 leading-relaxed">
              Olá! Me chamo Jorge Antonio de Lima Figueredo, tenho 20 anos e sou estudante de Análise e Desenvolvimento
              de Sistemas pelo Senac. Sou apaixonado por tecnologia e desenvolvimento Full-Stack.
            </p>

            <div className="flex items-center gap-2 mb-8 text-gray-400 dark:text-gray-400 bg-gray-800/30 dark:bg-gray-800/30 px-4 py-2 rounded-lg w-fit border border-gray-700/50">
              <MapPin className="h-4 w-4 text-blue-400 dark:text-blue-400" />
              <span className="text-sm font-medium">Recife, PE - Brasil</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-gray-100 px-8 shadow-lg shadow-blue-500/25 dark:shadow-blue-500/25 cursor-pointer"
              >
                <a href="#contact">Entre em Contato</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 dark:border-gray-600 text-gray-300 dark:text-gray-300 hover:bg-gray-800/50 dark:hover:bg-gray-800/50 px-8 bg-gray-800/20 dark:bg-gray-800/20 cursor-pointer"
              >
                <a href="#projects">Ver Projetos</a>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800/50 dark:hover:bg-gray-800/50 cursor-pointer"
                asChild
              >
                <a href="https://github.com/Jorgefigueredoo" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800/50 dark:hover:bg-gray-800/50 cursor-pointer"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/jorge-antonio-282874303/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800/50 dark:hover:bg-gray-800/50 cursor-pointer"
                asChild
              >
                <a href="mailto:contatojorgeafigueredo@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-slate-800 dark:from-gray-800 dark:to-slate-800 shadow-xl shadow-blue-500/20 dark:shadow-blue-500/30 border border-gray-700/50">
                <Image
                  src="/images/jorge-profile.png"
                  alt="Jorge Antonio - Desenvolvedor Full Stack"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 dark:bg-blue-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 dark:bg-blue-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-600 dark:bg-blue-600 rounded-full opacity-40 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
