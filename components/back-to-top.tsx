"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

/** Botão flutuante que aparece após rolar a página. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href="#home"
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-2xl bg-grad-hot text-[#16040c] shadow-[0_14px_30px_-12px_rgba(255,46,147,0.95)] transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </a>
  )
}
