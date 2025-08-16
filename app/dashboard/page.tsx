import { DashboardHeader } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { PaymentMethods } from "@/components/dashboard/payment-methods"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Visão geral dos seus pagamentos e transações</p>
        </div>

        <StatsCards />

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <RevenueChart />
          <PaymentMethods />
        </div>

        <div className="mt-8">
          <RecentTransactions />
        </div>
      </main>
    </div>
  )
}
