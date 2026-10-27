"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const NAV_ITEMS = [
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiência" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Stack" },
  { href: "#certifications", label: "Formação" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Seção ativa = a última cujo topo já passou pela linha de referência.
      const ids = ["home", ...NAV_ITEMS.map((item) => item.href.slice(1)), "contact"]
      const line = window.scrollY + 160
      let current = ids[0]
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top + window.scrollY <= line) current = id
      })

      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max > 0 && window.scrollY >= max - 4) current = ids[ids.length - 1]
      setActive(current)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
          scrolled || isMenuOpen
            ? "border-line bg-page/80 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4 py-2.5 pl-4 pr-2.5">
          <Link href="#home" className="group flex items-center gap-3" aria-label="Jorge Antonio — início">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-panel font-mono text-[13px] font-semibold text-ink transition-colors group-hover:border-tone-accent/60">
              <span>
                JA<span className="text-tone-accent">.</span>
              </span>
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold text-ink">Jorge Antonio</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">Full Stack · Recife</span>
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-1 rounded-full border border-line bg-panel/60 p-1 backdrop-blur lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                    isActive ? "bg-ink text-page" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link href="#contact" className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
              Contato <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel text-ink transition-colors hover:border-tone-accent/50 lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Navegação mobile */}
        {isMenuOpen && (
          <nav className="border-t border-line px-3 pb-4 pt-2 lg:hidden">
            {[...NAV_ITEMS, { href: "#contact", label: "Contato" }].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-baseline gap-4 border-b border-line/60 px-2 py-3.5 text-2xl font-medium tracking-tight transition-colors last:border-0 ${
                  active === item.href.slice(1) ? "text-tone-accent" : "text-ink hover:text-tone-accent"
                }`}
              >
                <span className="font-mono text-[11px] text-ink-dim">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
