import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, TrendingUp, Briefcase, Camera, Music } from "lucide-react"

export function Categories() {
  const categories = [
    {
      icon: Code,
      title: "Tecnologia",
      count: "1,200+ workshops",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Palette,
      title: "Design",
      count: "800+ workshops",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      count: "650+ workshops",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Briefcase,
      title: "Negócios",
      count: "900+ workshops",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Camera,
      title: "Fotografia",
      count: "400+ workshops",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Music,
      title: "Música",
      count: "300+ workshops",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore por Categoria</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre workshops especializados em diversas áreas do conhecimento. Desde tecnologia até artes criativas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
