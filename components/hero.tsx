import { Github, Linkedin, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function Hero() {
  const socials = [
    { href: "https://github.com/Jorgefigueredoo", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/in/jorge-antonio-282874303/", label: "LinkedIn", Icon: Linkedin },
    { href: "mailto:jorgeafigueredo@gmail.com", label: "Email", Icon: Mail },
  ]

  const chips = [
    { label: "Java", className: "left-[-6%] top-[6%] text-neon-lime border-neon-lime/45" },
    { label: "Spring Boot", className: "right-[-10%] top-[32%] text-neon-emerald border-neon-emerald/45 [animation-delay:-1.5s]" },
    { label: "React", className: "left-[-10%] bottom-[22%] text-neon-green border-neon-green/45 [animation-delay:-3s]" },
    { label: "MySQL", className: "bottom-[4%] right-[2%] text-neon-red border-neon-red/45 [animation-delay:-4.5s]" },
  ]

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="order-2 lg:order-1">
          <Reveal>
            <h1 className="text-5xl font-extrabold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Olá, eu sou <span className="grad-text-cool">Jorge Antonio</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 inline-flex items-center gap-2 font-display text-lg font-bold text-neon-lime">
              <Sparkles className="h-5 w-5" />
              Desenvolvedor Full Stack
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl border-l-4 border-neon-crimson pl-5 text-lg leading-relaxed text-ink-soft">
              Desenvolvedor Full Stack com sólida formação em Java, Spring Boot, React e MySQL. Experiência no
              desenvolvimento de aplicações web completas, com foco em APIs REST, autenticação OAuth2/JWT e integração
              front-end/back-end.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-2 backdrop-blur-md">
              <MapPin className="h-4 w-4 text-neon-green" />
              <span className="text-sm font-medium text-ink-soft">Recife, PE - Brasil</span>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-neon">
                Entre em Contato <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="btn-ghost">
                Ver Projetos
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-9 flex gap-3.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group grid h-12 w-12 place-items-center rounded-2xl border border-line bg-panel/70 text-ink-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:-rotate-6 hover:border-transparent hover:bg-grad-violet hover:text-white hover:shadow-[0_16px_32px_-12px_rgba(139,92,246,0.95)]"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Retrato com anel girando e chips flutuantes */}
        <Reveal delay={160} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-[min(380px,80vw)] lg:ml-auto lg:mr-0">
            <span className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#00e676,#c6ff00,#00a86b,#ff3b30,#d50000,#00e676)] blur-[2px]" />
            <span className="absolute inset-3.5 rounded-full bg-page" />

            <div className="absolute inset-6 overflow-hidden rounded-full border-2 border-line shadow-[0_30px_70px_-25px_rgba(255,46,147,0.6)]">
              <Image
                src="/images/jorge-profile.png"
                alt="Jorge Antonio - Desenvolvedor Full Stack"
                width={400}
                height={400}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {chips.map((chip) => (
              <span
                key={chip.label}
                className={`absolute animate-bob whitespace-nowrap rounded-full border bg-panel/90 px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur-md ${chip.className}`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
