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
      className={`fixed left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border backdrop-blur-xl transition-all duration-300 lg:rounded-full ${
        scrolled
          ? "top-2.5 border-line bg-panel/95 shadow-[0_16px_40px_-24px_rgb(0_0_0/0.6)]"
          : "top-4 border-line/60 bg-panel/50"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-3 py-2.5 pl-4">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-grad-accent font-display text-sm font-extrabold text-white shadow-[0_8px_20px_-8px_rgb(var(--tone-accent))]">
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
                    ? "bg-tone-accent/[0.12] text-ink shadow-[inset_0_0_0_1px_rgb(var(--tone-accent)/0.45)]"
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
            className="hidden items-center gap-2 rounded-lg bg-tone-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_26px_-12px_rgb(var(--tone-accent))] transition-transform duration-300 hover:-translate-y-0.5 xl:inline-flex"
          >
            Vamos conversar <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-panel-2 text-ink transition-colors hover:border-tone-accent/50 hover:text-tone-accent lg:hidden"
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
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  active === item.href.slice(1)
                    ? "bg-tone-accent/[0.12] text-ink"
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
