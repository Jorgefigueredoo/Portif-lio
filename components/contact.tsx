import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading, accentVars, accentColor, type Accent } from "@/components/section-heading"

export function Contact() {
  const details: {
    accent: Accent
    Icon: typeof Mail
    label: string
    value: string
    href: string | null
  }[] = [
    { accent: "graphite", Icon: Mail, label: "Email", value: "jorgeafigueredo@gmail.com", href: "mailto:jorgeafigueredo@gmail.com" },
    { accent: "accent", Icon: Phone, label: "Telefone", value: "+55 (81) 97332-4911", href: "tel:+5581973324911" },
    { accent: "slate", Icon: MapPin, label: "Localização", value: "Recife, PE - Brasil", href: null },
  ]

  const socials: { accent: Accent; Icon: typeof Mail; label: string; href: string }[] = [
    { accent: "accent", Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jorge-antonio-282874303/" },
    { accent: "graphite-deep", Icon: Github, label: "GitHub", href: "https://github.com/Jorgefigueredoo" },
    { accent: "graphite", Icon: Mail, label: "Email", href: "mailto:jorgeafigueredo@gmail.com" },
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          tag="06 — Contato"
          accent="accent"
          title={<>Vamos <span className="grad-text">Conversar</span></>}
          description="Entre em contato para conversarmos sobre como posso contribuir com sua equipe."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Informações de contato */}
          <Reveal>
            <div className="neon-card h-full p-8 sm:p-10" style={accentVars("graphite", "graphite-deep")}>
              <h3 className="mb-7 font-display text-2xl font-bold text-ink">Informações de Contato</h3>

              <div className="space-y-4">
                {details.map(({ accent, Icon, label, value, href }) => {
                  const content = (
                    <>
                      <span className="neon-icon h-12 w-12 flex-shrink-0" style={accentVars(accent)}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-ink-dim">{label}</span>
                        <span className="block break-words font-medium text-ink">{value}</span>
                      </span>
                    </>
                  )

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:translate-x-1.5 hover:border-line hover:bg-panel-2/70"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-4 p-3">
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* Redes sociais */}
          <Reveal delay={100}>
            <div className="neon-card h-full p-8 sm:p-10" style={accentVars("accent", "graphite-deep")}>
              <h3 className="mb-7 font-display text-2xl font-bold text-ink">Redes Sociais</h3>

              <div className="space-y-3">
                {socials.map(({ accent, Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border-2 px-5 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      borderColor: accentColor(accent, 0.35),
                      backgroundColor: accentColor(accent, 0.07),
                      color: accentColor(accent),
                    }}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                    <ArrowUpRight className="ml-auto h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Assinatura final */}
        <Reveal delay={140}>
          <div className="mt-20 border-t border-line pt-10 text-center">
            <p className="select-none bg-gradient-to-b from-ink/20 to-ink/[0.03] bg-clip-text font-display text-5xl font-extrabold leading-none text-transparent sm:text-7xl lg:text-8xl">
              Jorge Antonio
            </p>
            <p className="mt-8 text-sm text-ink-dim">© 2026 Jorge Antonio. Todos os direitos reservados.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
