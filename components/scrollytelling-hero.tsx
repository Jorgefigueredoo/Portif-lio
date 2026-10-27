"use client"

import { useEffect, useRef, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { scrollToTarget } from "@/components/smooth-scroll"

gsap.registerPlugin(ScrollTrigger)

/* -------------------------------------------------------------------------
   Conteúdo. Cada passo tem um rótulo curto (usado na barra de progresso),
   uma etiqueta, um título com trecho em destaque e uma linha de apoio.
   A cena do lado direito com o mesmo índice acompanha o passo.
   ------------------------------------------------------------------------- */
type Segment = { text: string; accent?: boolean }
type Step = { label: string; eyebrow: string; segments: Segment[]; sub: string }

const STEPS: Step[] = [
  {
    label: "Olá",
    eyebrow: "Desenvolvedor Full Stack",
    segments: [{ text: "Olá, eu sou o" }, { text: "Jorge Antonio.", accent: true }],
    sub: "Construo aplicações web completas — do banco de dados ao deploy — com Java, Spring Boot e React.",
  },
  {
    label: "Stack",
    eyebrow: "Como eu construo",
    segments: [{ text: "Back-end em" }, { text: "Java & Spring,", accent: true }, { text: "front em React." }],
    sub: "APIs REST, autenticação OAuth2/JWT e integração ponta a ponta entre as camadas.",
  },
  {
    label: "Trajetória",
    eyebrow: "Onde atuo hoje",
    segments: [{ text: "Inovação na" }, { text: "Prefeitura do Recife.", accent: true }],
    sub: "Analista de Inovação na SEPLAN, depois de passar pela Residência do Porto Digital e pelo CampusMobile.",
  },
  {
    label: "Projetos",
    eyebrow: "A seguir",
    segments: [{ text: "Ideias que viraram" }, { text: "produto.", accent: true }],
    sub: "Seis projetos — de plataformas full stack a landing pages. Role para conhecer.",
  },
]

/** Unidades de timeline entre o início de um passo e o do seguinte. */
const STEP = 1.5
/** Respiro no fim, antes de soltar o pin. */
const TAIL = 1.1
/** Quanto depois do início da troca o passo novo passa a contar como ativo. */
const SWITCH_AT = 0.45

const CLIP_BELOW = "inset(100% 0% 0% 0% round 24px)"
const CLIP_SHOWN = "inset(0% 0% 0% 0% round 24px)"
const CLIP_ABOVE = "inset(0% 0% 100% 0% round 24px)"

/** Quebra o título em palavras, cada uma dentro de uma máscara própria para
 *  que possa subir de baixo da linha de base sem vazar da caixa. */
function Headline({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((segment, segmentIndex) =>
        segment.text
          .split(" ")
          .filter(Boolean)
          .map((word, wordIndex) => (
            // A margem (não um espaço de texto) separa as palavras: um espaço
            // no fim de um inline-block é aparado pelo navegador.
            <span
              key={`${segmentIndex}-${wordIndex}`}
              className={`mr-[0.24em] inline-block overflow-hidden pb-[0.12em] align-top last:mr-0 ${
                // A itálica tomba para a direita: a máscara ganha folga lateral.
                segment.accent ? "-mx-[0.05em] px-[0.05em]" : ""
              }`}
            >
              <span className={`word-inner inline-block will-change-transform ${segment.accent ? "accent-serif" : ""}`}>
                {word}
              </span>
            </span>
          )),
      )}
    </>
  )
}

/* -------------------------------------------------------------------------
   Cenas. Todas preenchem o palco (`absolute inset-0`). Convenções lidas
   pela animação:
     .scene-frame  moldura revelada por cortina (clip-path)
     .scene-media  conteúdo da moldura que assenta o zoom ao entrar
     .scene-item   elementos internos que sobem em sequência
     .scene-float  peças soltas fora da moldura
     .scene-fan    cartas do leque (posição final em data-x/y/r)
   ------------------------------------------------------------------------- */

function PortraitScene() {
  return (
    <div className="scrolly-scene absolute inset-0">
      <div className="scene-frame absolute inset-0 overflow-hidden rounded-3xl border border-line bg-panel-2">
        <div className="scene-media absolute inset-0">
          <Image
            src="/images/jorge-profile.webp"
            alt="Foto de Jorge Antonio"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 40vw"
            // A foto original é de corpo inteiro: o zoom enquadra do rosto à
            // cintura. No celular o palco é largo, então o recorte sobe e o
            // zoom diminui para o rosto não sair pelo topo.
            className="origin-[50%_34%] scale-[1.3] object-cover object-[50%_15%] grayscale-[0.9] contrast-[1.05] md:origin-[50%_17%] md:scale-[1.75] md:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />
        <div className="absolute inset-0 bg-tone-accent/10 mix-blend-soft-light" />

        <div className="scene-item absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85 backdrop-blur-md sm:text-[11px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-tone-live" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-tone-live" />
          </span>
          Portfólio 2026
        </div>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
          <div className="scene-item">
            <p className="font-serif text-3xl italic leading-none sm:text-4xl">Jorge Antonio</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-[11px]">
              Desenvolvedor Full Stack
            </p>
          </div>
          <p className="scene-item hidden items-center gap-1.5 whitespace-nowrap sm:flex font-mono text-[10px] uppercase tracking-[0.16em] text-white/65 sm:text-[11px]">
            <MapPin className="h-3 w-3" /> Recife, PE
          </p>
        </div>
      </div>
    </div>
  )
}

const CODE: ReactNode[] = [
  <span key="a" className="tok-ann">@RestController</span>,
  <>
    <span className="tok-ann">@RequestMapping</span>(<span className="tok-str">&quot;/api/auth&quot;</span>)
  </>,
  <>
    <span className="tok-key">public class</span> <span className="tok-type">AuthController</span> {"{"}
  </>,
  "",
  <>
    {"  "}
    <span className="tok-ann">@PostMapping</span>(<span className="tok-str">&quot;/login&quot;</span>)
  </>,
  <>
    {"  "}
    <span className="tok-key">public</span> <span className="tok-type">ResponseEntity</span>&lt;
    <span className="tok-type">Token</span>&gt; login(
  </>,
  <>
    {"      "}
    <span className="tok-ann">@RequestBody</span> <span className="tok-type">LoginDTO</span> dto) {"{"}
  </>,
  <>
    {"    "}
    <span className="tok-key">var</span> user = auth.authenticate(dto);
  </>,
  <>
    {"    "}
    <span className="tok-key">return</span> <span className="tok-type">ResponseEntity</span>.ok(jwt.sign(user));
  </>,
  <>{"  }"}</>,
  <>{"}"}</>,
]

const CODE_CHIPS = [
  { label: "React", className: "-left-3 top-[18%] md:-left-8" },
  { label: "Next.js", className: "-right-2 top-[38%] md:-right-6" },
  { label: "PostgreSQL", className: "-left-2 bottom-[16%] md:-left-10" },
  { label: "Docker", className: "-bottom-3 right-[12%]" },
]

function CodeScene() {
  return (
    <div className="scrolly-scene absolute inset-0">
      <div className="scene-frame absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-line bg-panel">
        <div className="flex h-11 shrink-0 items-center gap-3 border-b border-line px-4">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          </span>
          <span className="rounded-md bg-panel-2 px-2.5 py-1 font-mono text-[11px] text-ink-soft">
            AuthController.java
          </span>
        </div>

        <div className="scene-media flex-1 overflow-hidden p-4 font-mono text-[10px] leading-[1.8] text-ink-soft sm:p-6 sm:text-[13px]">
          {CODE.map((line, index) => (
            <div key={index} className="scene-item flex whitespace-pre">
              <span className="w-7 shrink-0 select-none text-ink-dim/50">{index + 1}</span>
              <span>{line}</span>
            </div>
          ))}
        </div>

        {/* Terminal: a mesma rota respondendo, para fechar a história do código. */}
        <div className="hidden shrink-0 border-t border-line bg-panel-2/50 px-6 py-4 font-mono text-[12px] leading-[1.8] sm:block">
          <div className="scene-item text-ink-dim">
            <span className="text-tone-accent">$</span> curl -X POST /api/auth/login
          </div>
          <div className="scene-item">
            <span className="text-tone-live">200 OK</span>{" "}
            <span className="text-ink-soft">
              {"{ "}
              <span className="tok-str">&quot;token&quot;</span>: <span className="tok-str">&quot;eyJhbGciOiJIUzI1…&quot;</span>
              {" }"}
            </span>
          </div>
        </div>

        <div className="flex h-9 shrink-0 items-center gap-2 border-t border-line px-4 font-mono text-[10px] text-ink-dim sm:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-tone-live" />
          API REST · JWT · OAuth2
        </div>
      </div>

      {CODE_CHIPS.map((chip) => (
        <span
          key={chip.label}
          className={`scene-float absolute z-10 rounded-full border border-line bg-panel-2 px-3 py-1.5 font-mono text-[10px] text-ink shadow-[0_14px_30px_-14px_rgb(0_0_0/0.6)] sm:text-xs ${chip.className}`}
        >
          {chip.label}
        </span>
      ))}
    </div>
  )
}

const JOURNEY = [
  { year: "2024", title: "Suporte Técnico", org: "2D Telecom" },
  { year: "2025", title: "Residência · Aluno Destaque", org: "Porto Digital · Liferay" },
  { year: "2026", title: "CampusMobile", org: "Instituto NET Claro Embratel" },
  { year: "Hoje", title: "Analista de Inovação", org: "Prefeitura do Recife · SEPLAN", current: true },
]

function JourneyScene() {
  return (
    <div className="scrolly-scene absolute inset-0">
      <div className="scene-frame absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-line bg-panel p-5 sm:p-8">
        <div className="scene-item flex items-center justify-between">
          <span className="eyebrow">Trajetória</span>
          <span className="font-mono text-[11px] text-ink-dim">2024 → hoje</span>
        </div>

        <ol className="scene-media relative mt-4 flex flex-1 flex-col justify-between sm:mt-8">
          <span aria-hidden className="absolute bottom-3 left-[5px] top-3 w-px bg-line" />
          {JOURNEY.map((item) => (
            <li key={item.year} className="scene-item relative flex gap-4 sm:gap-5">
              <span className="relative mt-1.5 flex h-[11px] w-[11px] shrink-0">
                {item.current && <span className="absolute inset-0 animate-ping rounded-full bg-tone-accent/60" />}
                <span
                  className={`relative h-[11px] w-[11px] rounded-full border-2 ${
                    item.current ? "border-tone-accent bg-tone-accent" : "border-line bg-panel"
                  }`}
                />
              </span>
              <span className="min-w-0">
                <span
                  className={`block font-mono text-[10px] uppercase tracking-[0.16em] sm:text-[11px] ${
                    item.current ? "text-tone-accent" : "text-ink-dim"
                  }`}
                >
                  {item.year}
                </span>
                <span className="mt-0.5 block text-sm font-medium leading-snug text-ink sm:text-lg">{item.title}</span>
                <span className="block truncate text-xs text-ink-dim sm:text-sm">{item.org}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

const FAN = [
  { src: "/images/fisioterapiaLD.webp", label: "Fisioterapia", x: -30, y: 4, r: -9 },
  { src: "/images/landing-pages.webp", label: "Landing Pages", x: 30, y: 6, r: 8 },
  { src: "/images/ConectaHub.webp", label: "Conecta Hub", x: 0, y: -8, r: -1 },
]

function ProjectsScene() {
  return (
    <div className="scrolly-scene absolute inset-0">
      {FAN.map((card) => (
        <div
          key={card.src}
          data-x={card.x}
          data-y={card.y}
          data-r={card.r}
          className="scene-fan absolute left-1/2 top-[44%] aspect-[4/3] w-[62%] overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)]"
        >
          <Image src={card.src} alt="" fill sizes="(max-width: 768px) 60vw, 25vw" className="object-cover object-top" />
          <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur">
            {card.label}
          </span>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-[6%] flex justify-center">
        <Link href="#projects" className="scene-float btn-primary">
          Ver projetos <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

const SCENES = [PortraitScene, CodeScene, JourneyScene, ProjectsScene]

/**
 * Hero em scrollytelling com pin.
 *
 * A `<section>` externa é o trilho de rolagem; `pinRef` fica preso na tela
 * enquanto o usuário rola. São duas pilhas sincronizadas: à esquerda os
 * textos, à direita as cenas. Uma timeline do GSAP com `scrub` amarra o
 * progresso da rolagem à troca de passo — o título anterior sai palavra
 * por palavra enquanto a cena dele é recolhida por uma cortina, e o passo
 * seguinte entra com a cena se abrindo de baixo e seus elementos subindo
 * em sequência.
 *
 * O primeiro passo entra assim que a página carrega, sem depender de
 * rolagem. A barra inferior mostra o progresso de cada passo e é
 * clicável. `gsap.matchMedia` ajusta o trilho entre desktop e celular e
 * desmonta tudo no cleanup. Com "reduzir movimento" nada disso é criado:
 * o CSS transforma a pilha de textos em lista e mostra só o retrato.
 */
export function ScrollytellingHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const pinRef = useRef<HTMLDivElement | null>(null)
  const barRef = useRef<HTMLDivElement | null>(null)
  const cueRef = useRef<HTMLDivElement | null>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    const bar = barRef.current
    if (!section || !pin || !bar) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const stepEls = gsap.utils.toArray<HTMLElement>(".scrolly-step", section)
    const sceneEls = gsap.utils.toArray<HTMLElement>(".scrolly-scene", section)
    const all = (el: HTMLElement, selector: string) => gsap.utils.toArray<HTMLElement>(selector, el)

    const parts = stepEls.map((step, i) => ({
      step,
      words: all(step, ".word-inner"),
      eyebrow: all(step, ".step-eyebrow"),
      after: all(step, ".step-after"),
      scene: sceneEls[i],
      frame: all(sceneEls[i], ".scene-frame"),
      media: all(sceneEls[i], ".scene-media"),
      items: all(sceneEls[i], ".scene-item"),
      floats: all(sceneEls[i], ".scene-float"),
      fans: all(sceneEls[i], ".scene-fan"),
    }))

    const fills = all(bar, "[data-fill]")
    const labels = all(bar, "[data-label]")
    const last = parts.length - 1
    const total = last * STEP + TAIL

    /** Só agenda a tween quando há alvo: várias cenas não têm todas as peças. */
    const add = (
      tl: gsap.core.Timeline,
      targets: HTMLElement[],
      from: gsap.TweenVars,
      to: gsap.TweenVars,
      at: number,
    ) => {
      if (targets.length) tl.fromTo(targets, from, { ...to, immediateRender: false }, at)
    }

    // Estados de repouso (escondido) e de exibição de cada peça. Entradas e
    // saídas usam `fromTo` com os dois lados explícitos: assim a timeline
    // fica correta mesmo se a página carregar no meio da rolagem.
    const hidden = {
      word: { yPercent: 115, rotate: 4 },
      fade: { y: 16, opacity: 0 },
      frame: { clipPath: CLIP_BELOW },
      media: { scale: 1.2 },
      item: { y: 18, opacity: 0 },
      float: { y: 24, opacity: 0, scale: 0.85 },
      fan: { xPercent: -50, yPercent: -30, rotate: 0, opacity: 0, scale: 0.9 },
    }
    const shown = {
      word: { yPercent: 0, rotate: 0 },
      fade: { y: 0, opacity: 1 },
      frame: { clipPath: CLIP_SHOWN },
      media: { scale: 1 },
      item: { y: 0, opacity: 1 },
      float: { y: 0, opacity: 1, scale: 1 },
      fan: {
        xPercent: (_: number, el: HTMLElement) => -50 + Number(el.dataset.x),
        yPercent: (_: number, el: HTMLElement) => -50 + Number(el.dataset.y),
        rotate: (_: number, el: HTMLElement) => Number(el.dataset.r),
        opacity: 1,
        scale: 1,
      },
    }

    const enter = (tl: gsap.core.Timeline, i: number, at: number) => {
      const p = parts[i]
      tl.set([p.step, p.scene], { autoAlpha: 1 }, at)
      // Texto: etiqueta, depois o título palavra por palavra, depois o apoio.
      add(tl, p.eyebrow, hidden.fade, { ...shown.fade, duration: 0.4 }, at)
      add(tl, p.words, hidden.word, { ...shown.word, duration: 0.75, stagger: 0.045, ease: "power4.out" }, at + 0.05)
      add(tl, p.after, hidden.fade, { ...shown.fade, duration: 0.5, stagger: 0.08 }, at + 0.3)
      // Cena: a moldura abre de baixo, o conteúdo assenta o zoom e as peças sobem.
      add(tl, p.frame, hidden.frame, { ...shown.frame, duration: 0.8, ease: "expo.inOut" }, at)
      add(tl, p.media, hidden.media, { ...shown.media, duration: 1, ease: "power3.out" }, at + 0.05)
      add(tl, p.items, hidden.item, { ...shown.item, duration: 0.5, stagger: 0.05 }, at + 0.35)
      add(tl, p.floats, hidden.float, { ...shown.float, duration: 0.5, stagger: 0.08, ease: "back.out(1.6)" }, at + 0.5)
      add(tl, p.fans, hidden.fan, { ...shown.fan, duration: 0.8, stagger: 0.1, ease: "back.out(1.3)" }, at + 0.1)
    }

    const exit = (tl: gsap.core.Timeline, i: number, at: number) => {
      const p = parts[i]
      add(tl, p.words, shown.word, { yPercent: -115, rotate: -3, duration: 0.45, stagger: 0.02, ease: "power3.in" }, at)
      add(tl, [...p.eyebrow, ...p.after], shown.fade, { y: -12, opacity: 0, duration: 0.35 }, at)
      add(tl, p.frame, shown.frame, { clipPath: CLIP_ABOVE, duration: 0.6, ease: "power3.inOut" }, at)
      add(tl, p.media, shown.media, { scale: 1.08, duration: 0.6, ease: "power3.in" }, at)
      add(tl, p.floats, shown.float, { y: -16, opacity: 0, scale: 0.9, duration: 0.3 }, at)
      add(tl, p.fans, shown.fan, { yPercent: -70, opacity: 0, rotate: 0, duration: 0.45, stagger: 0.04 }, at)
      tl.set([p.step, p.scene], { autoAlpha: 0 }, at + 0.62)
    }

    const ctx = gsap.context(() => {
      parts.forEach((p, i) => {
        gsap.set([p.step, p.scene], { autoAlpha: i === 0 ? 1 : 0 })
        gsap.set(p.words, { ...hidden.word, transformOrigin: "0% 100%" })
        gsap.set([...p.eyebrow, ...p.after], hidden.fade)
        gsap.set(p.frame, hidden.frame)
        gsap.set(p.media, hidden.media)
        gsap.set(p.items, hidden.item)
        gsap.set(p.floats, hidden.float)
        gsap.set(p.fans, hidden.fan)
      })

      // O primeiro passo entra sozinho, fora da timeline de rolagem.
      const intro = gsap.timeline({ delay: 0.15, defaults: { ease: "power3.out" } })
      enter(intro, 0, 0)
    }, section)

    const mm = gsap.matchMedia()

    // As duas condições são necessárias: o matchMedia só roda o callback
    // quando pelo menos uma delas casa.
    mm.add({ isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" }, (self) => {
      const { isDesktop } = self.conditions as { isDesktop: boolean }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + window.innerHeight * (isDesktop ? 3.6 : 2.8),
          pin,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
      timelineRef.current = tl

      if (cueRef.current) tl.to(cueRef.current, { autoAlpha: 0, duration: 0.3 }, 0.1)

      for (let i = 1; i <= last; i++) {
        const at = i * STEP
        exit(tl, i - 1, at)
        enter(tl, i, at + 0.25)
      }
      // Garante o comprimento total mesmo que a última tween termine antes.
      tl.set({}, {}, total)

      // Barra de progresso: cada segmento enche durante o seu passo e o
      // rótulo do passo ativo acende.
      let lastActive = -1
      tl.eventCallback("onUpdate", () => {
        const t = tl.time()
        fills.forEach((fill, i) => {
          const start = i * STEP
          const span = i === last ? total - start : STEP
          gsap.set(fill, { scaleX: gsap.utils.clamp(0, 1, (t - start) / span) })
        })

        let active = 0
        for (let i = 1; i <= last; i++) if (t >= i * STEP + SWITCH_AT) active = i
        if (active !== lastActive) {
          labels.forEach((label, i) => label.toggleAttribute("data-active", i === active))
          lastActive = active
        }
      })
      labels[0]?.toggleAttribute("data-active", true)

      return () => {
        timelineRef.current = null
      }
    })

    // Segmentos clicáveis: pulam para o ponto em que o passo já entrou por completo.
    const onBarClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-step]")
      const st = timelineRef.current?.scrollTrigger
      if (!target || !st) return
      const index = Number(target.dataset.step)
      const time = index === 0 ? 0 : index * STEP + 1.15
      scrollToTarget(st.start + (time / total) * (st.end - st.start))
    }
    bar.addEventListener("click", onBarClick)

    return () => {
      bar.removeEventListener("click", onBarClick)
      mm.revert()
      ctx.revert()
    }
  }, [])

  return (
    <section id="home" ref={sectionRef} className="relative">
      <div ref={pinRef} className="relative h-svh min-h-[600px] overflow-hidden">
        {/* Fundo do hero: brilho de brasa atrás do palco e grade editorial. */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-10%] top-[10%] h-[70vh] w-[60vw] rounded-full bg-tone-accent/[0.13] blur-[120px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(var(--txt) / 0.05) 1px, transparent 1px), linear-gradient(rgb(var(--txt) / 0.05) 1px, transparent 1px)",
              backgroundSize: "88px 88px",
              maskImage: "radial-gradient(ellipse 80% 70% at 60% 40%, #000 10%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 60% 40%, #000 10%, transparent 75%)",
            }}
          />
        </div>

        <div className="relative mx-auto grid h-full w-full max-w-7xl grid-rows-[auto_1fr] content-center items-center gap-8 px-5 pb-24 pt-24 sm:px-6 md:grid-cols-12 md:grid-rows-1 md:gap-10 md:pb-28 lg:px-10">
          {/* Textos empilhados na mesma célula de grade. */}
          <div className="scrolly-stack order-2 grid md:order-1 md:col-span-7">
            {STEPS.map((step, index) => {
              const Title = index === 0 ? "h1" : "h2"
              return (
                <div key={step.label} className="scrolly-step">
                  <span className="step-eyebrow eyebrow">{step.eyebrow}</span>

                  <Title className="mt-5 text-balance text-[2.35rem] font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
                    <Headline segments={step.segments} />
                  </Title>

                  <p className="step-after mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:mt-7 sm:text-lg">
                    {step.sub}
                  </p>

                  {index === 0 && (
                    <div className="step-after mt-8 hidden flex-wrap gap-3 sm:flex">
                      <Link href="#projects" className="btn-primary">
                        Ver projetos <ArrowDown className="h-4 w-4" />
                      </Link>
                      <Link href="#contact" className="btn-ghost">
                        Vamos conversar <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Palco das cenas. */}
          <div className="relative order-1 mx-auto h-[30svh] w-full max-w-[340px] md:order-2 md:col-span-5 md:h-[min(62vh,560px)] md:max-w-none">
            {SCENES.map((Scene, index) => (
              <Scene key={index} />
            ))}
          </div>
        </div>

        {/* Barra de progresso dos passos. */}
        <div className="scrolly-bar absolute inset-x-0 bottom-0 z-20">
          <div className="mx-auto flex max-w-7xl items-end gap-8 px-5 pb-6 sm:px-6 lg:px-10">
            <div ref={barRef} className="grid flex-1 grid-cols-4 gap-2 sm:gap-4">
              {STEPS.map((step, index) => (
                <button
                  key={step.label}
                  type="button"
                  data-step={index}
                  aria-label={`Ir para: ${step.label}`}
                  className="group py-2 text-left"
                >
                  <span className="relative block h-[2px] w-full overflow-hidden rounded-full bg-line">
                    <span
                      data-fill
                      className="absolute inset-0 origin-left rounded-full bg-tone-accent"
                      style={{ transform: "scaleX(0)" }}
                    />
                  </span>
                  <span
                    data-label
                    className="mt-3 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim transition-colors duration-300 group-hover:text-ink data-[active]:text-ink sm:flex"
                  >
                    <span className="text-tone-accent">{String(index + 1).padStart(2, "0")}</span>
                    {step.label}
                  </span>
                </button>
              ))}
            </div>

            <div
              ref={cueRef}
              className="hidden items-center gap-2 pb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim md:flex"
            >
              Role
              <span className="flex h-7 w-[18px] justify-center rounded-full border border-line pt-1.5">
                <span className="h-1.5 w-[3px] animate-bob rounded-full bg-tone-accent" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
