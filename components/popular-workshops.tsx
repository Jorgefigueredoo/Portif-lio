import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Play } from "lucide-react"
import Image from "next/image"

export function PopularWorkshops() {
  const workshops = [
    {
      id: 1,
      title: "JavaScript Moderno: ES6+ e Frameworks",
      instructor: "Pedro Costa",
      price: "R$ 189,90",
      rating: 4.9,
      students: 3200,
      duration: "15 horas",
      lessons: 45,
      image: "/placeholder.svg?height=200&width=300&text=JavaScript",
      category: "Tecnologia",
      level: "Intermediário",
    },
    {
      id: 2,
      title: "UX/UI Design: Do Conceito ao Protótipo",
      instructor: "Laura Ferreira",
      price: "R$ 169,90",
      rating: 4.8,
      students: 2100,
      duration: "12 horas",
      lessons: 38,
      image: "/placeholder.svg?height=200&width=300&text=UX+Design",
      category: "Design",
      level: "Iniciante",
    },
    {
      id: 3,
      title: "Growth Hacking: Estratégias de Crescimento",
      instructor: "Rafael Lima",
      price: "R$ 199,90",
      rating: 4.7,
      students: 1800,
      duration: "10 horas",
      lessons: 32,
      image: "/placeholder.svg?height=200&width=300&text=Growth",
      category: "Marketing",
      level: "Avançado",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Workshops Populares</h2>
            <p className="text-gray-600">Os workshops mais procurados pelos nossos estudantes</p>
          </div>
          <Button variant="outline" className="hidden md:block bg-transparent">
            Ver Todos
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    <Play className="h-5 w-5 mr-2" />
                    Preview
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3 bg-white text-black">{workshop.level}</Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{workshop.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-orange-400 fill-current" />
                    <span className="text-sm font-semibold">{workshop.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-2">{workshop.title}</CardTitle>
                <CardDescription className="text-base">Por {workshop.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="h-4 w-4" />
                    <span>{workshop.lessons} aulas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{workshop.students}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#232F3E]">{workshop.price}</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-black font-semibold">Inscrever-se</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
