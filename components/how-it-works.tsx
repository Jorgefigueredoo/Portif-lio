import { Card, CardContent } from "@/components/ui/card"
import { Code, Settings, Rocket } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Code,
      title: "1. Integre",
      description: "Adicione nosso SDK ou use nossa API REST. Documentação completa e exemplos práticos.",
      code: `// Exemplo de integração
import PayFlow from 'payflow-sdk'

const payment = await PayFlow.create({
  amount: 10000, // R$ 100,00
  currency: 'BRL',
  method: 'credit_card'
})`,
    },
    {
      icon: Settings,
      title: "2. Configure",
      description: "Personalize métodos de pagamento, webhooks e regras de negócio através do dashboard.",
      features: ["Métodos de pagamento", "Webhooks personalizados", "Regras de antifraude", "Notificações"],
    },
    {
      icon: Rocket,
      title: "3. Venda",
      description: "Comece a receber pagamentos imediatamente. Monitore tudo em tempo real.",
      stats: ["99.9% uptime", "< 2s resposta", "24/7 suporte", "Aprovação instantânea"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Três passos simples para começar a processar pagamentos online com segurança e eficiência.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>

                {step.code && (
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                    <pre>{step.code}</pre>
                  </div>
                )}

                {step.features && (
                  <ul className="space-y-2">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {step.stats && (
                  <div className="grid grid-cols-2 gap-4">
                    {step.stats.map((stat, i) => (
                      <div key={i} className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-sm font-semibold text-blue-600">{stat}</div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
