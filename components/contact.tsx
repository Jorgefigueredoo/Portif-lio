"use client"

import { useState } from "react"
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { RevealWords } from "@/components/reveal-words"

const EMAIL = "jorgeafigueredo@gmail.com"

const CHANNELS = [
  { Icon: Linkedin, label: "LinkedIn", value: "jorge-antonio", href: "https://www.linkedin.com/in/jorge-antonio-282874303/" },
  { Icon: Github, label: "GitHub", value: "Jorgefigueredoo", href: "https://github.com/Jorgefigueredoo" },
  { Icon: Phone, label: "Telefone", value: "+55 (81) 97332-4911", href: "tel:+5581973324911" },
  { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
]

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden pb-10 pt-24 sm:pt-32">
      {/* Brilho de brasa que sobe do rodapé. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgb(var(--tone-accent)/0.16),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal variant="wipe">
          <div className="flex items-center gap-4 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
            <span className="text-tone-accent">(06)</span>
            <span>Contato</span>
          </div>
        </Reveal>

        <h2 className="mt-12 text-balance text-[3rem] font-semibold leading-[0.98] text-ink sm:text-7xl lg:text-[7.5rem]">
          <RevealWords text="Vamos construir algo" step={60} />{" "}
          <RevealWords text="juntos?" delay={280} className="accent-serif" />
        </h2>

        <Reveal delay={150}>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Quer conversar sobre uma oportunidade, um projeto ou uma ideia? Me mande uma mensagem.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`mailto:${EMAIL}`} className="btn-primary !py-4 text-base">
              <Mail className="h-4 w-4" />
              Enviar email
            </a>
            <button type="button" onClick={copyEmail} className="btn-ghost !py-4 font-mono text-sm">
              {copied ? <Check className="h-4 w-4 text-tone-live" /> : <Copy className="h-4 w-4" />}
              {copied ? "Email copiado!" : EMAIL}
            </button>
          </div>
        </Reveal>

        {/* Canais */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map(({ Icon, label, value, href }, index) => {
            const external = href.startsWith("http")
            return (
              <Reveal key={label} delay={index * 70} className="h-full">
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col gap-10 bg-page p-6 transition-colors duration-500 hover:bg-panel sm:p-7"
                >
                  <span className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-ink-soft transition-colors group-hover:text-tone-accent" />
                    <ArrowUpRight className="h-4 w-4 text-ink-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tone-accent" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">{label}</span>
                    <span className="mt-1 block truncate font-medium text-ink">{value}</span>
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        {/* Rodapé */}
        <footer className="mt-24">
          <p
            aria-hidden
            className="select-none whitespace-nowrap text-center text-[17vw] font-semibold leading-[0.8] tracking-[-0.06em] text-ink/[0.06] lg:text-[13.5rem]"
          >
            Jorge Antonio
          </p>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-dim sm:flex-row">
            <span>© 2026 Jorge Antonio</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> Recife, PE — Brasil
            </span>
            <span>Next.js · GSAP · Lenis</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
