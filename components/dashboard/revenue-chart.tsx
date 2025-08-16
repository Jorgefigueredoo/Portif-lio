import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Receita dos Últimos 7 Dias</CardTitle>
        <CardDescription>Evolução da receita diária</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-between gap-2">
          {[
            { day: "Seg", value: 4200, height: "60%" },
            { day: "Ter", value: 3800, height: "50%" },
            { day: "Qua", value: 5100, height: "75%" },
            { day: "Qui", value: 4600, height: "65%" },
            { day: "Sex", value: 6200, height: "90%" },
            { day: "Sáb", value: 5800, height: "85%" },
            { day: "Dom", value: 6800, height: "100%" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className="w-full bg-blue-500 rounded-t-md mb-2 transition-all hover:bg-blue-600"
                style={{ height: item.height }}
                title={`R$ ${item.value.toLocaleString()}`}
              ></div>
              <span className="text-xs text-gray-600">{item.day}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <p className="text-2xl font-bold text-green-600">R$ 36.500</p>
          <p className="text-sm text-gray-600">Total da semana</p>
        </div>
      </CardContent>
    </Card>
  )
}
