import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Clock, Headphones } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Garantia de 30 dias",
      description: "Não ficou satisfeito? Devolvemos seu dinheiro em até 30 dias.",
    },
    {
      icon: Award,
      title: "Certificado de conclusão",
      description: "Receba um certificado reconhecido ao completar o workshop.",
    },
    {
      icon: Clock,
      title: "Acesso vitalício",
      description: "Acesse o conteúdo quando quiser, quantas vezes precisar.",
    },
    {
      icon: Headphones,
      title: "Suporte especializado",
      description: "Nossa equipe está sempre pronta para ajudar você.",
    },
  ]

  return (
    <section className="py-16 bg-[#232F3E] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Por que escolher nossos workshops?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Oferecemos a melhor experiência de aprendizado com benefícios exclusivos para nossos estudantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#37475A] border-gray-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
