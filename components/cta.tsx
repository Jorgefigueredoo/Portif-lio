import { Button } from "@/components/ui/button"
import { ArrowRight, Code } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para começar a receber pagamentos?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Junte-se a milhares de empresas que já processam bilhões em pagamentos com segurança e eficiência.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
            Criar Conta Grátis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 bg-transparent"
          >
            <Code className="mr-2 h-5 w-5" />
            Ver Documentação
          </Button>
        </div>
        <p className="text-sm opacity-75">Sem taxa de setup • Sem mensalidade • Integração em 5 minutos</p>
      </div>
    </section>
  )
}
