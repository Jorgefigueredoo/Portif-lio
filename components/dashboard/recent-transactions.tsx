import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RecentTransactions() {
  const transactions = [
    {
      id: "TXN001",
      customer: "João Silva",
      amount: "R$ 299,90",
      method: "Cartão de Crédito",
      status: "approved",
      date: "2024-01-15 14:30",
    },
    {
      id: "TXN002",
      customer: "Maria Santos",
      amount: "R$ 149,50",
      method: "PIX",
      status: "approved",
      date: "2024-01-15 13:45",
    },
    {
      id: "TXN003",
      customer: "Carlos Lima",
      amount: "R$ 89,90",
      method: "Boleto",
      status: "pending",
      date: "2024-01-15 12:20",
    },
    {
      id: "TXN004",
      customer: "Ana Costa",
      amount: "R$ 199,00",
      method: "Cartão de Débito",
      status: "failed",
      date: "2024-01-15 11:15",
    },
    {
      id: "TXN005",
      customer: "Pedro Oliveira",
      amount: "R$ 399,90",
      method: "Cartão de Crédito",
      status: "approved",
      date: "2024-01-15 10:30",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Aprovado</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pendente</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Falhou</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transações Recentes</CardTitle>
        <CardDescription>Últimas transações processadas na sua conta</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-medium">{transaction.customer}</p>
                    <p className="text-sm text-gray-600">
                      {transaction.id} • {transaction.method}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{transaction.amount}</p>
                <p className="text-sm text-gray-600">{transaction.date}</p>
              </div>
              <div className="ml-4">{getStatusBadge(transaction.status)}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
