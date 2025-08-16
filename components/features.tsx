import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Smartphone, Globe, Shield, BarChart3, Webhook, Repeat, Users, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: CreditCard,
      title: "Múltiplos Métodos",
      description: "Cartão, PIX, boleto, carteiras digitais e muito mais em uma única integração.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Interface otimizada para dispositivos móveis com checkout responsivo.",
    },
    {
      icon: Globe,
      title: "Global",
      description: "Processe pagamentos em mais de 150 países com suporte a múltiplas moedas.",
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Certificação PCI DSS Level 1 e criptografia de ponta a ponta.",
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Relatórios detalhados e insights em tempo real sobre suas transações.",
    },
    {
      icon: Webhook,
      title: "API Robusta",
      description: "RESTful API com documentação completa e SDKs para todas as linguagens.",
    },
    {
      icon: Repeat,
      title: "Pagamentos Recorrentes",
      description: "Assinaturas e cobranças automáticas com gestão inteligente de falhas.",
    },
    {
      icon: Users,
      title: "Multi-usuário",
      description: "Gerencie equipes com diferentes níveis de acesso e permissões.",
    },
    {
      icon: Zap,
      title: "Processamento Rápido",
      description: "Aprovação em segundos com nossa infraestrutura de alta performance.",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tudo que você precisa para vender online</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma plataforma completa de pagamentos com todas as ferramentas necessárias para fazer seu negócio crescer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
