import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechStart",
      image: "/placeholder.svg?height=60&width=60&text=CS",
      rating: 5,
      comment:
        "PayFlow revolucionou nossos pagamentos. Integração simples, taxas justas e suporte excepcional. Recomendo!",
      company: "TechStart",
    },
    {
      name: "Ana Costa",
      role: "Fundadora, EcoShop",
      image: "/placeholder.svg?height=60&width=60&text=AC",
      rating: 5,
      comment:
        "Desde que mudamos para o PayFlow, nossa taxa de conversão aumentou 40%. A experiência do usuário é incrível.",
      company: "EcoShop",
    },
    {
      name: "Roberto Lima",
      role: "CTO, FinanceApp",
      image: "/placeholder.svg?height=60&width=60&text=RL",
      rating: 5,
      comment: "API robusta, documentação excelente e segurança de primeiro mundo. Exatamente o que precisávamos.",
      company: "FinanceApp",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mais de 10.000 empresas confiam em nós</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossa plataforma de pagamentos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">TechCorp</div>
            <div className="text-2xl font-bold">StartupXYZ</div>
            <div className="text-2xl font-bold">MegaStore</div>
            <div className="text-2xl font-bold">DigitalCo</div>
            <div className="text-2xl font-bold">InnovateInc</div>
          </div>
        </div>
      </div>
    </section>
  )
}
