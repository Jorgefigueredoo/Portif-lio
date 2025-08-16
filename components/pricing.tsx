import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Grátis",
      description: "Perfeito para começar",
      features: [
        "Até R$ 10.000/mês",
        "Taxa de 3,99% + R$ 0,39",
        "Dashboard básico",
        "API REST",
        "Suporte por email",
        "Checkout responsivo",
      ],
      cta: "Começar Grátis",
      popular: false,
    },
    {
      name: "Professional",
      price: "R$ 99",
      period: "/mês",
      description: "Para negócios em crescimento",
      features: [
        "Volume ilimitado",
        "Taxa de 2,99% + R$ 0,39",
        "Dashboard avançado",
        "API + Webhooks",
        "Suporte prioritário",
        "Checkout customizável",
        "Relatórios detalhados",
        "Pagamentos recorrentes",
      ],
      cta: "Começar Teste Grátis",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      description: "Para grandes volumes",
      features: [
        "Volume ilimitado",
        "Taxas negociáveis",
        "Dashboard personalizado",
        "API dedicada",
        "Suporte 24/7",
        "White label",
        "SLA garantido",
        "Gerente de conta",
        "Integração personalizada",
      ],
      cta: "Falar com Vendas",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preços transparentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sem taxas ocultas, sem surpresas. Pague apenas pelo que usar com as menores taxas do mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-blue-500 shadow-xl scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Mais Popular</Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Todas as transações incluem:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-full shadow">✓ Sem taxa de setup</span>
            <span className="bg-white px-4 py-2 rounded-full shadow">✓ Sem mensalidade mínima</span>
            <span className="bg-white px-4 py-2 rounded-full shadow">✓ Sem fidelidade</span>
            <span className="bg-white px-4 py-2 rounded-full shadow">✓ Cancelamento gratuito</span>
          </div>
        </div>
      </div>
    </section>
  )
}
