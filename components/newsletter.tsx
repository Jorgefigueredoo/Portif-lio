import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-16 bg-orange-400">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="h-16 w-16 mx-auto mb-6 text-black" />
          <h2 className="text-3xl font-bold mb-4 text-black">Fique por dentro das novidades</h2>
          <p className="text-lg mb-8 text-black/80">
            Receba em primeira mão os lançamentos de novos workshops, promoções exclusivas e dicas de carreira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-white border-0 text-black placeholder:text-gray-500"
            />
            <Button className="bg-black text-white hover:bg-gray-800 font-semibold">Inscrever-se</Button>
          </div>
          <p className="text-sm mt-4 text-black/70">
            Ao se inscrever, você concorda com nossos termos de uso e política de privacidade.
          </p>
        </div>
      </div>
    </section>
  )
}
