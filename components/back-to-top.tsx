"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

/** Botão flutuante que aparece após rolar a página. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 5)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href="#home"
      aria-label="Voltar ao topo"
      className={`fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-panel/80 text-ink backdrop-blur-xl transition-all duration-500 hover:border-tone-accent hover:text-tone-accent ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </a>
  )
}
