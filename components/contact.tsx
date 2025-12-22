import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 dark:from-slate-900 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 dark:text-gray-100 mb-4">Vamos Conversar</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-500 dark:to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Estou em busca de oportunidades na área de desenvolvimento. Entre em contato para conversarmos
            sobre como posso contribuir com sua equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 bg-gray-800/40 dark:bg-gray-800/40 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/15 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer border border-gray-700/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-100 mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-700/30 dark:bg-gray-700/30 p-3 rounded-lg">
                  <div className="w-10 h-10 bg-gray-700/50 dark:bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-400 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-100 dark:text-gray-100">Email</p>
                    <p className="text-gray-300 dark:text-gray-300">contatojorgeafigueredo@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-700/30 dark:bg-gray-700/30 p-3 rounded-lg">
                  <div className="w-10 h-10 bg-gray-700/50 dark:bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-400 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-100 dark:text-gray-100">Telefone</p>
                    <p className="text-gray-300 dark:text-gray-300">+55 (81) 97332-4911</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-700/30 dark:bg-gray-700/30 p-3 rounded-lg">
                  <div className="w-10 h-10 bg-gray-700/50 dark:bg-gray-700/50 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-400 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-100 dark:text-gray-100">Localização</p>
                    <p className="text-gray-300 dark:text-gray-300">Recife, PE - Brasil</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gray-800/40 dark:bg-gray-800/40 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/15 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer border border-gray-700/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-100 dark:text-gray-100 mb-6">Redes Sociais</h3>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-600 dark:border-gray-600 text-gray-300 dark:text-gray-300 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 bg-gray-800/20 dark:bg-gray-800/20 cursor-pointer"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/jorge-antonio-282874303/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-600 dark:border-gray-600 text-gray-300 dark:text-gray-300 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 bg-gray-800/20 dark:bg-gray-800/20 cursor-pointer"
                  asChild
                >
                  <a href="https://github.com/Jorgefigueredoo" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-3" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-600 dark:border-gray-600 text-gray-300 dark:text-gray-300 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 bg-gray-800/20 dark:bg-gray-800/20 cursor-pointer"
                  asChild
                >
                  <a href="mailto:contatojorgeafigueredo@gmail.com">
                    <Mail className="h-5 w-5 mr-3" />
                    Email
                  </a>
                </Button>
              </div>

              <div className="mt-8 p-4 bg-gray-700/30 dark:bg-gray-700/30 rounded-lg border border-gray-600/30 dark:border-gray-600/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-400 dark:bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-200 dark:text-gray-200">Status</span>
                </div>
                <p className="text-sm text-gray-300 dark:text-gray-300">Disponível para oportunidades de estágio</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 dark:text-gray-400 text-sm bg-gray-800/30 dark:bg-gray-800/30 px-4 py-2 rounded-lg inline-block border border-gray-700/50">
            © 2026 Jorge Antonio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
