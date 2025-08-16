import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileCheck } from "lucide-react"

export function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "PCI DSS Level 1",
      description: "Certificação máxima de segurança para processamento de cartões de crédito.",
    },
    {
      icon: Lock,
      title: "Criptografia TLS 1.3",
      description: "Todas as comunicações protegidas com a mais alta criptografia disponível.",
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7",
      description: "Sistema de detecção de fraudes e monitoramento contínuo de segurança.",
    },
    {
      icon: FileCheck,
      title: "Compliance Total",
      description: "Conformidade com LGPD, GDPR e todas as regulamentações internacionais.",
    },
  ]

  return (
    <section id="security" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Segurança em primeiro lugar</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Protegemos seus dados e os de seus clientes com os mais altos padrões de segurança da indústria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Seus dados estão seguros conosco</h3>
          <p className="text-lg mb-8 opacity-90">
            Nunca armazenamos dados sensíveis de cartão. Toda informação é tokenizada e criptografada.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">99.99%</div>
              <div className="text-sm opacity-80">Uptime garantido</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-sm opacity-80">Vazamentos de dados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">Monitoramento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
