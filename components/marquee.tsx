/**
 * Faixa com o stack principal rolando continuamente, alternando a Geist
 * cheia com a serifa itálica vazada.
 *
 * A faixa escuta a rolagem (ver <ScrollField>): ela se inclina conforme a
 * velocidade, e o conteúdo é empurrado a favor ou contra o giro dependendo
 * da direção do scroll. A animação `scroll-x` continua no elemento de
 * dentro — o empurrão vem de uma camada separada, para as duas
 * transformações não brigarem.
 */
export function Marquee() {
  const items = [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "APIs REST",
    "OAuth2 / JWT",
    "Tailwind CSS",
    "React Native",
    "MySQL",
  ]

  return (
    <div aria-hidden className="relative overflow-hidden border-y border-line py-6 sm:py-8">
      <div className="marquee-band">
        <div className="marquee-push">
          <div className="flex w-max animate-scroll-x items-center gap-8 sm:gap-12">
            {[...items, ...items].map((item, index) => (
              <span key={index} className="flex items-center gap-8 sm:gap-12">
                <span
                  className={`whitespace-nowrap text-4xl leading-none sm:text-6xl ${
                    index % 2 === 0
                      ? "font-semibold tracking-tight text-ink"
                      : "font-serif italic text-outline"
                  }`}
                >
                  {item}
                </span>
                <span className="text-xl text-tone-accent sm:text-2xl">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
