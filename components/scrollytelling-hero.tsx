"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { parallax } from "@/lib/parallax"

gsap.registerPlugin(ScrollTrigger)

/* -------------------------------------------------------------------------
   Conteúdo do hero. Cada passo tem uma etiqueta, um título (com um trecho
   em destaque, opcional) e uma linha de apoio. O último passo ganha a
   foto de perfil e o convite para rolar até os projetos.
   ------------------------------------------------------------------------- */
type Segment = { text: string; accent?: boolean }
type Step = { tag: string; segments: Segment[]; sub: string }

const STEPS: Step[] = [
  {
    tag: "00 — Olá, tudo bem?",
    segments: [{ text: "Eu sou o " }, { text: "Jorge Antonio.", accent: true }],
    sub: "Desenvolvedor Full Stack, do protótipo ao deploy.",
  },
  {
    tag: "00 — Como eu construo",
    segments: [{ text: "Codo em " }, { text: "Java, Spring Boot e React.", accent: true }],
    sub: "APIs REST, autenticação segura e integração ponta a ponta.",
  },
  {
    tag: "00 — Onde atuo hoje",
    segments: [{ text: "Inovação na " }, { text: "Prefeitura do Recife.", accent: true }],
    sub: "Analista de Inovação na Secretaria de Planejamento e Gestão (SEPLAN).",
  },
  {
    tag: "00 — A seguir",
    segments: [{ text: "Conheça os meus " }, { text: "projetos.", accent: true }],
    sub: "Do protótipo ao deploy, ponta a ponta.",
  },
]

/** Quebra um título em palavras, cada uma dentro de uma máscara própria
 *  (`overflow-hidden`) para que a palavra possa "subir" de baixo da linha
 *  de base sem vazar para fora da caixa de texto. */
function Headline({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((segment, segmentIndex) =>
        segment.text
          .split(" ")
          .filter(Boolean)
          .map((word, wordIndex) => (
            // A margem (não um espaço de texto) separa as palavras: um espaço
            // como último caractere de um inline-block é colapsado pelo
            // navegador (cada inline-block forma seu próprio contexto de
            // quebra de linha, que apara espaços nas pontas).
            <span
              key={`${segmentIndex}-${wordIndex}`}
              className="mr-[0.28em] inline-block overflow-hidden pb-[0.14em] align-top last:mr-0"
            >
              <span
                className={`word-inner inline-block will-change-transform ${
                  segment.accent ? "grad-text-cool" : ""
                }`}
              >
                {word}
              </span>
            </span>
          )),
      )}
    </>
  )
}

/**
 * Hero em scrollytelling com pin.
 *
 * A `<section>` externa é o trilho de rolagem; `pinRef` fica fixo na tela
 * enquanto o usuário rola. Cada "passo" (título + apoio) mora na mesma
 * célula de grade e uma timeline do GSAP com `scrub` amarra o progresso da
 * rolagem à troca entre eles: o título anterior tomba para trás e some
 * palavra por palavra enquanto o próximo sobe de baixo, com leve giro em
 * 3D e desfoque — bem mais cinemático que um crossfade simples.
 *
 * O primeiro passo entra assim que a página carrega (sem depender de
 * rolagem), para o hero já nascer com movimento. O número fantasma atrás
 * do texto acompanha o ponteiro (mesma técnica de paralaxe do <Aurora>).
 * Uma trilha de progresso lateral (desktop) mostra em qual passo o
 * usuário está — e os pontos são clicáveis, pulando direto para o passo.
 * O último passo revela a foto de perfil e convida a rolar até os
 * projetos.
 *
 * `gsap.matchMedia` cuida de desktop e mobile e desmonta tudo no cleanup.
 * Com "reduzir movimento" a animação nem é criada: o CSS transforma a
 * pilha em uma lista simples, sem pin.
 */
export function ScrollytellingHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const pinRef = useRef<HTMLDivElement | null>(null)
  const cueRef = useRef<HTMLDivElement | null>(null)
  const railRef = useRef<HTMLDivElement | null>(null)
  const railFillRef = useRef<HTMLSpanElement | null>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    const rail = railRef.current
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!section || !pin || prefersReduced) return

    const stepEls = gsap.utils.toArray<HTMLElement>(".scrolly-step", section)
    const wordsByStep = stepEls.map((el) => gsap.utils.toArray<HTMLElement>(".word-inner", el))
    const eyebrows = stepEls.map((el) => el.querySelector<HTMLElement>(".step-eyebrow")!)
    const subs = stepEls.map((el) => el.querySelector<HTMLElement>(".step-sub")!)
    const ghosts = stepEls.map((el) => el.querySelector<HTMLElement>(".step-ghost")!)
    const photoEls = gsap.utils.toArray<HTMLElement>(".step-photo > *", stepEls[stepEls.length - 1])
    const dotEls = gsap.utils.toArray<HTMLElement>("[data-rail-dot]", rail)
    const steps = stepEls.length

    // Estado inicial: tudo escondido, exceto o primeiro passo (que entra
    // sozinho, fora da timeline de rolagem, logo abaixo). `xPercent`/
    // `yPercent` centralizam o número fantasma — usar essas props do GSAP
    // (em vez de classes Tailwind de translate) evita que a próxima tween
    // de opacidade/escala substitua a centralização sem querer.
    stepEls.forEach((_, i) => {
      gsap.set(wordsByStep[i], { yPercent: 120, opacity: 0, rotateX: -60, filter: "blur(10px)" })
      gsap.set(eyebrows[i], { yPercent: 10, opacity: 0 })
      gsap.set(subs[i], { yPercent: 10, opacity: 0 })
      gsap.set(ghosts[i], { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.85 })
    })
    gsap.set(photoEls, { opacity: 0, scale: 0.85, y: 16 })

    const introTl = gsap.timeline({ delay: 0.15, defaults: { ease: "power3.out" } })
    introTl
      .to(eyebrows[0], { yPercent: 0, opacity: 1, duration: 0.5 }, 0)
      .to(ghosts[0], { opacity: 1, scale: 1, duration: 0.9 }, 0.05)
      .to(
        wordsByStep[0],
        { yPercent: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", duration: 0.8, stagger: 0.05 },
        0.12,
      )
      .to(subs[0], { yPercent: 0, opacity: 1, duration: 0.5 }, 0.55)

    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (self) => {
        const { isDesktop } = self.conditions as { isDesktop: boolean; isMobile: boolean }

        // Quanto o usuário rola enquanto a seção está presa.
        const runway = () => window.innerHeight * (isDesktop ? 3.2 : 1.7)

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + runway(),
            pin: pin,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        timelineRef.current = tl

        // Some com a dica de rolagem logo no início.
        if (cueRef.current) {
          tl.to(cueRef.current, { opacity: 0, duration: 0.4 }, 0)
        }

        // Cada transição fica a 1 unidade de distância na timeline; o
        // intervalo entre elas é a "pausa" em que o passo permanece.
        for (let i = 1; i < steps; i++) {
          const at = i

          // Saída: o passo anterior tomba para trás e some, palavra por
          // palavra.
          tl.to(
            wordsByStep[i - 1],
            { yPercent: -120, opacity: 0, rotateX: 50, filter: "blur(8px)", duration: 0.45, stagger: 0.018 },
            at,
          )
          tl.to([eyebrows[i - 1], subs[i - 1]], { yPercent: -10, opacity: 0, duration: 0.35 }, at)
          tl.to(ghosts[i - 1], { opacity: 0, scale: 0.85, duration: 0.5 }, at)

          // Entrada: o próximo passo sobe de baixo com leve giro em 3D,
          // também palavra por palavra, com a etiqueta chegando um pouco
          // antes do título e o apoio um pouco depois — dá ritmo à
          // leitura.
          tl.to(eyebrows[i], { yPercent: 0, opacity: 1, duration: 0.4 }, at + 0.02)
          tl.to(
            wordsByStep[i],
            {
              yPercent: 0,
              opacity: 1,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 0.65,
              stagger: 0.035,
              ease: "power3.out",
            },
            at + 0.12,
          )
          tl.to(ghosts[i], { opacity: 1, scale: 1, duration: 0.6 }, at + 0.15)
          tl.to(subs[i], { yPercent: 0, opacity: 1, duration: 0.45 }, at + 0.4)

          if (i === steps - 1) {
            tl.to(photoEls, { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.08 }, at + 0.4)
          }
        }

        // Respiro final antes de soltar o pin.
        tl.to({}, { duration: 0.6 })

        // Trilha de progresso lateral (desktop): uma linha que preenche
        // conforme o usuário avança e um ponto que acende no passo atual.
        tl.eventCallback("onUpdate", () => {
          const unit = tl.progress() * tl.duration()
          const activeIndex = Math.min(steps - 1, Math.floor(unit))
          const fill = Math.min(1, unit / (steps - 1))

          if (railFillRef.current) {
            gsap.set(railFillRef.current, { scaleY: fill })
          }
          dotEls.forEach((dot, i) => {
            dot.style.borderColor = i <= activeIndex ? "rgb(var(--tone-accent))" : ""
            dot.style.backgroundColor = i === activeIndex ? "rgb(var(--tone-accent))" : ""
            dot.style.transform = i === activeIndex ? "scale(1.4)" : "scale(1)"
          })
        })
      },
    )

    // Pontos da trilha são clicáveis: pulam para o meio do passo escolhido.
    const handleRailClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-rail-dot]")
      const tl = timelineRef.current
      const st = tl?.scrollTrigger
      if (!target || !tl || !st) return

      const index = Number(target.dataset.railDot)
      const progress = Math.min(1, (index + 0.5) / tl.duration())
      const y = st.start + progress * (st.end - st.start)
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    rail?.addEventListener("click", handleRailClick)

    return () => {
      rail?.removeEventListener("click", handleRailClick)
      introTl.kill()
      mm.revert()
    }
  }, [])

  return (
    <section id="home" ref={sectionRef} className="relative">
      <div
        ref={pinRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        {/* Trilha de progresso lateral (desktop). Os pontos são clicáveis. */}
        <div
          ref={railRef}
          className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 md:flex lg:right-10"
        >
          <div className="relative flex h-40 w-2.5 flex-col justify-between">
            <span aria-hidden className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line" />
            <span
              ref={railFillRef}
              aria-hidden
              className="absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2 bg-tone-accent"
              style={{ transform: "scaleY(0)" }}
            />
            {STEPS.map((step, index) => (
              <button
                key={step.tag}
                type="button"
                data-rail-dot={index}
                title={step.tag.replace(/^00 — /, "")}
                aria-label={`Ir para: ${step.tag.replace(/^00 — /, "")}`}
                className="relative z-10 h-2.5 w-2.5 cursor-pointer rounded-full border-2 border-line bg-page p-0 transition-transform duration-300 hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tone-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page"
              />
            ))}
          </div>
        </div>

        {/* Passos empilhados na mesma célula de grade. */}
        <div
          className="scrolly-stack relative z-10 grid w-full max-w-4xl place-items-center text-center"
          style={{ perspective: "1200px" }}
        >
          {STEPS.map((step, index) => (
            <div key={step.tag} className="scrolly-step relative flex flex-col items-center">
              {/* Número gigante e discreto atrás do texto — dá profundidade
                  e acompanha o ponteiro, como as manchas do <Aurora>. */}
              <span aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={parallax(-16)}>
                <span
                  className="step-ghost absolute left-1/2 top-1/2 select-none whitespace-nowrap text-[32vw] font-black leading-none text-ink/[0.035] sm:text-[20vw]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>

              <span className="step-eyebrow section-tag">{step.tag}</span>

              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
                <Headline segments={step.segments} />
              </h1>

              <p className="step-sub mt-5 max-w-xl text-balance text-lg text-ink-soft sm:text-xl">{step.sub}</p>

              {index === STEPS.length - 1 && (
                <div className="step-photo mt-10 flex flex-col items-center gap-6">
                  <div className="relative h-28 w-28 sm:h-36 sm:w-36">
                    <div className="absolute -inset-3 rounded-full bg-tone-accent/25 blur-xl motion-safe:animate-pulse" />
                    <div
                      className="absolute inset-0 rounded-full motion-safe:animate-[spin_14s_linear_infinite]"
                      style={{
                        background:
                          "conic-gradient(from 0deg, rgb(var(--tone-accent)), rgb(var(--tone-accent-soft)), transparent 65%)",
                      }}
                    />
                    <div className="absolute inset-[3px] rounded-full bg-page" />
                    <div className="absolute inset-[6px] overflow-hidden rounded-full">
                      <Image
                        src="/images/jorge-profile.png"
                        alt="Jorge Antonio"
                        fill
                        sizes="144px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <Link href="#projects" className="btn-ghost group">
                    Ver projetos
                    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dica de rolagem inicial. */}
        <div
          ref={cueRef}
          className="scrolly-cue absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-dim"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]">Role</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1">
            <span className="h-2 w-1 animate-bob rounded-full bg-tone-accent" />
          </span>
        </div>
      </div>
    </section>
  )
}
