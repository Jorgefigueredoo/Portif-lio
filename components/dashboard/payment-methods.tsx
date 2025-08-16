import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Smartphone, FileText, Banknote } from "lucide-react"

export function PaymentMethods() {
  const methods = [
    {
      name: "Cartão de Crédito",
      percentage: 65,
      amount: "R$ 29.400",
      icon: CreditCard,
      color: "bg-blue-500",
    },
    {
      name: "PIX",
      percentage: 25,
      amount: "R$ 11.300",
      icon: Smartphone,
      color: "bg-green-500",
    },
    {
      name: "Boleto",
      percentage: 7,
      amount: "R$ 3.200",
      icon: FileText,
      color: "bg-orange-500",
    },
    {
      name: "Cartão de Débito",
      percentage: 3,
      amount: "R$ 1.400",
      icon: Banknote,
      color: "bg-purple-500",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Métodos de Pagamento</CardTitle>
        <CardDescription>Distribuição por tipo de pagamento</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {methods.map((method, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full ${method.color} flex items-center justify-center`}>
                <method.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{method.name}</span>
                  <span className="text-sm font-semibold">{method.amount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${method.color}`}
                      style={{ width: `${method.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{method.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
