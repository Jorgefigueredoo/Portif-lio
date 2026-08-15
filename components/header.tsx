"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  const navItems = [
    { href: "#about", label: "Sobre" },
    { href: "#experience", label: "Experiência" },
    { href: "#projects", label: "Projetos" },
    { href: "#skills", label: "Habilidades" },
    { href: "#certifications", label: "Formação" },
    { href: "#contact", label: "Contato" },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Seção ativa = a última cujo topo já passou pela linha de referência.
      const ids = ["home", ...navItems.map((item) => item.href.slice(1))]
      const line = window.scrollY + 160
      let current = ids[0]
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      })

      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max > 0 && window.scrollY >= max - 4) current = ids[ids.length - 1]
      setActive(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header
      className={`fixed left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-[1.75rem] border backdrop-blur-xl transition-all duration-300 lg:rounded-full ${
        scrolled
          ? "top-2.5 border-line bg-panel/90 shadow-[0_18px_45px_-22px_rgba(255,46,147,0.55)]"
          : "top-4 border-line/60 bg-panel/50"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-3 py-2.5 pl-4">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-grad-hot font-display text-sm font-extrabold text-[#12030b] shadow-[0_8px_22px_-6px_rgba(255,46,147,0.8)]">
            JA
          </span>
          <span className="font-display text-base font-bold text-ink">Jorge Antonio</span>
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-neon-red/25 to-neon-crimson/25 text-ink shadow-[inset_0_0_0_1px_rgba(255,46,147,0.5)]"
                    : "text-ink-soft hover:bg-panel-2 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-grad-hot px-5 py-2.5 text-sm font-bold text-[#16040c] shadow-[0_10px_28px_-10px_rgba(255,46,147,0.9)] transition-transform duration-300 hover:-translate-y-0.5 xl:inline-flex"
          >
            Vamos conversar <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel-2 text-ink transition-colors hover:text-neon-red lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Navegação mobile */}
      {isMenuOpen && (
        <nav className="border-t border-line px-3 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  active === item.href.slice(1)
                    ? "bg-gradient-to-r from-neon-red/25 to-neon-crimson/25 text-ink"
                    : "text-ink-soft hover:bg-panel-2 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
