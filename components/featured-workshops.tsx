import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users } from "lucide-react"
import Image from "next/image"

export function FeaturedWorkshops() {
  const workshops = [
    {
      id: 1,
      title: "React Avançado: Hooks e Context API",
      instructor: "Ana Silva",
      price: "R$ 199,90",
      originalPrice: "R$ 299,90",
      rating: 4.9,
      students: 1250,
      duration: "8 horas",
      image: "/placeholder.svg?height=200&width=300&text=React",
      category: "Tecnologia",
      bestseller: true,
    },
    {
      id: 2,
      title: "Design Thinking para Inovação",
      instructor: "Carlos Mendes",
      price: "R$ 149,90",
      originalPrice: "R$ 249,90",
      rating: 4.8,
      students: 890,
      duration: "6 horas",
      image: "/placeholder.svg?height=200&width=300&text=Design",
      category: "Design",
      bestseller: false,
    },
    {
      id: 3,
      title: "Marketing Digital Completo",
      instructor: "Maria Santos",
      price: "R$ 179,90",
      originalPrice: "R$ 279,90",
      rating: 4.7,
      students: 2100,
      duration: "10 horas",
      image: "/placeholder.svg?height=200&width=300&text=Marketing",
      category: "Marketing",
      bestseller: true,
    },
    {
      id: 4,
      title: "Python para Data Science",
      instructor: "João Oliveira",
      price: "R$ 229,90",
      originalPrice: "R$ 349,90",
      rating: 4.9,
      students: 1680,
      duration: "12 horas",
      image: "/placeholder.svg?height=200&width=300&text=Python",
      category: "Tecnologia",
      bestseller: true,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Workshops em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Os workshops mais populares e bem avaliados da nossa plataforma. Escolhidos especialmente para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {workshop.bestseller && (
                  <Badge className="absolute top-2 left-2 bg-orange-400 text-black">Mais Vendido</Badge>
                )}
                <Badge className="absolute top-2 right-2 bg-blue-600">{workshop.category}</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{workshop.title}</CardTitle>
                <CardDescription>Por {workshop.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-orange-400 fill-current" />
                    <span className="text-sm font-semibold">{workshop.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({workshop.students} estudantes)</span>
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{workshop.students}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-red-600">{workshop.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{workshop.originalPrice}</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-400 hover:bg-orange-500 text-black font-semibold">
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
