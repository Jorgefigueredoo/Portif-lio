"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/* -------------------------------------------------------------------------
   Conteúdo placeholder — troque pelos seus textos e imagens reais.
   A quantidade de frases e de imagens pode ser diferente; a animação
   sincroniza pelo número de FRASES.
   ------------------------------------------------------------------------- */
const PHRASES = [
  "Oi, eu sou o Seu Nome.",
  "Eu crio interfaces e produtos digitais.",
  "Do protótipo ao deploy, ponta a ponta.",
  "Aqui estão alguns dos meus projetos.",
]

const PROJECTS = [
  { src: "/images/portfolio-preview.png", alt: "Projeto 1 — placeholder" },
  { src: "/images/beacon-navigator.png", alt: "Projeto 2 — placeholder" },
  { src: "/images/ConectaHub.png", alt: "Projeto 3 — placeholder" },
  { src: "/images/atividades-complementares.png", alt: "Projeto 4 — placeholder" },
]

/**
 * Hero em scrollytelling com pin.
 *
 * A `<section>` externa é o trilho de rolagem. Dentro dela, `pinRef` fica
 * fixo na tela enquanto o usuário rola ~300–400vh (menos no mobile). Uma
 * timeline do GSAP com `scrub` amarra o progresso da rolagem ao crossfade:
 *
 *   - as frases centrais trocam em fade, uma por vez;
 *   - no desktop, as imagens de projeto atrás do texto trocam junto, no
 *     mesmo instante de cada frase;
 *   - no mobile, as imagens ficam de fora (só o texto faz crossfade) para
 *     não pesar.
 *
 * `gsap.matchMedia` cuida das três faixas (desktop / mobile / reduzir
 * movimento) e desmonta tudo sozinho no cleanup. Com "reduzir movimento",
 * não há pin nem timeline: o CSS mostra a última frase e a primeira imagem.
 */
export function ScrollytellingHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const pinRef = useRef<HTMLDivElement | null>(null)
  const phrasesRef = useRef<HTMLDivElement | null>(null)
  const imagesRef = useRef<HTMLDivElement | null>(null)
  const cueRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    if (!section || !pin) return

    const phrases = gsap.utils.toArray<HTMLElement>(".scrolly-phrase", phrasesRef.current)
    const images = gsap.utils.toArray<HTMLElement>(".scrolly-image", imagesRef.current)
    const steps = phrases.length

    const mm = gsap.matchMedia()

    mm.add(
      {
        isDesktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        isMobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
      },
      (self) => {
        const { isDesktop } = self.conditions as { isDesktop: boolean; isMobile: boolean }

        // Estado inicial: primeira frase (e primeira imagem) à mostra.
        gsap.set(phrases, { opacity: 0, yPercent: 8 })
        gsap.set(phrases[0], { opacity: 1, yPercent: 0 })
        if (isDesktop) {
          gsap.set(images, { opacity: 0, scale: 1.08 })
          gsap.set(images[0], { opacity: 1, scale: 1 })
        }

        // Quanto o usuário rola enquanto a seção está presa.
        const runway = () => window.innerHeight * (isDesktop ? 3 : 1.4)

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
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

        // Some com a dica de rolagem logo no início.
        if (cueRef.current) {
          tl.to(cueRef.current, { opacity: 0, duration: 0.4 }, 0)
        }

        // Cada transição fica a 1 unidade de distância na timeline; o
        // intervalo entre elas é a "pausa" em que a frase permanece.
        for (let i = 1; i < steps; i++) {
          const at = i

          tl.to(phrases[i - 1], { opacity: 0, yPercent: -8, duration: 0.5 }, at)
          tl.to(phrases[i], { opacity: 1, yPercent: 0, duration: 0.5 }, at + 0.12)

          if (isDesktop) {
            tl.to(images[i - 1], { opacity: 0, scale: 0.94, duration: 0.6 }, at)
            tl.to(images[i], { opacity: 1, scale: 1, duration: 0.6 }, at)
          }
        }

        // Respiro final: a última frase segura antes de soltar o pin.
        tl.to({}, { duration: 0.6 })
      }
    )

    return () => mm.revert()
  }, [])

  return (
    <section id="home" ref={sectionRef} className="relative">
      <div
        ref={pinRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        {/* Camada de imagens de projeto (desktop). Fica atrás do texto,
            com um véu para manter o contraste da leitura. */}
        <div ref={imagesRef} aria-hidden className="pointer-events-none absolute inset-0">
          {PROJECTS.map((project) => (
            <div key={project.src} className="scrolly-image absolute inset-0 opacity-0">
              <Image
                src={project.src || "/placeholder.svg"}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-page/80 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-page/60 via-transparent to-page" />
            </div>
          ))}
        </div>

        {/* Frases centrais empilhadas na mesma célula de grade. */}
        <div
          ref={phrasesRef}
          className="scrolly-stack relative z-10 grid w-full max-w-4xl place-items-center text-center"
        >
          {PHRASES.map((phrase, index) => (
            <p
              key={phrase}
              className="scrolly-phrase text-balance text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
              data-index={index}
            >
              {index === PHRASES.length - 1 ? (
                <span className="grad-text-cool">{phrase}</span>
              ) : (
                phrase
              )}
            </p>
          ))}
        </div>

        {/* Dica de rolagem. */}
        <div
          ref={cueRef}
          className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-dim"
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
