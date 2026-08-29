import { Github, Linkedin, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { parallax } from "@/lib/parallax"
import { RevealWords } from "@/components/reveal-words"

export function Hero() {
  const socials = [
    { href: "https://github.com/Jorgefigueredoo", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/in/jorge-antonio-282874303/", label: "LinkedIn", Icon: Linkedin },
    { href: "mailto:jorgeafigueredo@gmail.com", label: "Email", Icon: Mail },
  ]

  /* `depth` controla o quanto cada chip acompanha o ponteiro: quanto maior,
     mais o chip parece flutuar à frente do retrato. */
  const chips = [
    { label: "Java", pos: "left-[-6%] top-[6%]", tone: "text-ink-soft border-line", depth: 64, delay: "" },
    { label: "Spring Boot", pos: "right-[-10%] top-[32%]", tone: "text-ink-soft border-line", depth: 48, delay: "[animation-delay:-1.5s]" },
    { label: "React", pos: "left-[-10%] bottom-[22%]", tone: "text-ink-soft border-line", depth: 78, delay: "[animation-delay:-3s]" },
    { label: "MySQL", pos: "bottom-[4%] right-[2%]", tone: "text-ink-soft border-line", depth: 56, delay: "[animation-delay:-4.5s]" },
  ]

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="order-2 lg:order-1">
          {/* O nome sobe palavra por palavra; as duas últimas levam o gradiente. */}
          <h1 className="text-5xl font-extrabold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            <RevealWords
              text="Olá, eu sou Jorge Antonio"
              highlightFrom={3}
              highlightClassName="grad-text-cool"
              step={85}
            />
          </h1>

          <Reveal delay={140}>
            <p className="mt-5 inline-flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <Sparkles className="h-5 w-5" />
              Desenvolvedor Full Stack
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-2xl border-l-2 border-tone-accent/70 pl-5 text-lg leading-relaxed text-ink-soft">
              Desenvolvedor Full Stack com sólida formação em Java, Spring Boot, React e MySQL. Experiência no
              desenvolvimento de aplicações web completas, com foco em APIs REST, autenticação OAuth2/JWT e integração
              front-end/back-end.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-2 backdrop-blur-md">
              <MapPin className="h-4 w-4 text-tone-accent" />
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
                  className="group grid h-12 w-12 place-items-center rounded-lg border border-line bg-panel/70 text-ink-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-tone-accent hover:text-white hover:shadow-[0_16px_32px_-14px_rgb(var(--tone-accent))]"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Retrato com anel girando e chips flutuantes.
            Três profundidades: o anel afunda, o retrato quase não se mexe e os
            chips saltam à frente — é o contraste entre elas que cria o 3D. */}
        <Reveal delay={160} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-[min(380px,80vw)] lg:ml-auto lg:mr-0">
            <span className="absolute inset-0" style={parallax(-34)}>
              <span className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,rgb(var(--tone-accent)),rgb(var(--tone-accent-soft)),rgb(var(--tone-slate)),rgb(var(--line)),rgb(var(--tone-accent)))] blur-[2px]" />
              <span className="absolute inset-3.5 rounded-full bg-page" />
            </span>

            <div className="absolute inset-0" style={parallax(18)}>
              <div className="absolute inset-6 overflow-hidden rounded-full border border-line shadow-[0_30px_70px_-30px_rgb(0_0_0/0.8)]">
                <Image
                  src="/images/jorge-profile.png"
                  alt="Jorge Antonio - Desenvolvedor Full Stack"
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {chips.map((chip) => (
              <span key={chip.label} className={`absolute ${chip.pos}`} style={parallax(chip.depth)}>
                <span
                  className={`inline-block animate-bob whitespace-nowrap rounded-full border bg-panel/90 px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur-md ${chip.tone} ${chip.delay}`}
                >
                  {chip.label}
                </span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
