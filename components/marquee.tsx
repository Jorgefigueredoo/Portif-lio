/**
 * Faixa diagonal com o stack principal rolando continuamente.
 *
 * A faixa escuta a rolagem (ver <ScrollField>): ela se inclina e se deforma
 * conforme a velocidade, e o conteúdo é empurrado a favor ou contra o giro
 * dependendo da direção do scroll. A animação `scroll-x` original continua
 * intacta no elemento de dentro — o empurrão vem de uma camada separada, para
 * as duas transformações não brigarem.
 */
export function Marquee() {
  const items = [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "APIs REST",
    "OAuth2 / JWT",
    "Tailwind CSS",
    "React Native",
  ]

  return (
    <div aria-hidden className="marquee-band relative my-4 overflow-hidden bg-grad-accent py-5">
      <div className="marquee-push">
        <div className="flex w-max animate-scroll-x items-center gap-7">
          {[...items, ...items].map((item, index) => (
            <span key={index} className="flex items-center gap-7">
              <span className="font-display text-lg font-bold uppercase tracking-wide text-white">{item}</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
