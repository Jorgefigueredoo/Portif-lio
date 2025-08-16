import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, CreditCard, Users, BarChart3 } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Receita Total",
      value: "R$ 45.231,89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Transações",
      value: "1.234",
      change: "+15.3%",
      trend: "up",
      icon: CreditCard,
    },
    {
      title: "Taxa de Aprovação",
      value: "98.5%",
      change: "+2.1%",
      trend: "up",
      icon: BarChart3,
    },
    {
      title: "Clientes Ativos",
      value: "573",
      change: "-3.2%",
      trend: "down",
      icon: Users,
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-xs text-gray-600">
              {stat.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
              <span className="ml-1">vs mês anterior</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
