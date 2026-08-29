import { parallax } from "@/lib/parallax"

/**
 * Fundo fixo da página: manchas de cor desfocadas + grade sutil.
 * Fica atrás de todo o conteúdo e não captura eventos.
 *
 * Cada mancha vive dentro de uma camada própria que desliza com o ponteiro
 * (ver <PointerField>). Como as profundidades são diferentes — e uma delas
 * é negativa —, elas se deslocam umas em relação às outras e o fundo ganha
 * volume. A animação `drift` continua no elemento interno, sem disputar o
 * `transform` com o parallax.
 */
export function Aurora() {
  /* Manchas quase neutras: no sistema grafite o fundo dá profundidade, não
     cor. Só a primeira carrega o índigo, e ainda assim bem diluído. */
  const blobs = [
    {
      depth: 44,
      className:
        "-left-[8vw] -top-[12vw] h-[45vw] w-[45vw] bg-tone-accent opacity-[0.1] dark:opacity-[0.16]",
    },
    {
      depth: -32,
      className:
        "-right-[12vw] top-[20vh] h-[40vw] w-[40vw] bg-tone-slate opacity-[0.07] [animation-direction:alternate-reverse] [animation-duration:28s] dark:opacity-[0.1]",
    },
    {
      depth: 62,
      className:
        "bottom-[-10vw] left-[25vw] h-[38vw] w-[38vw] bg-tone-accent-soft opacity-[0.07] [animation-duration:26s] dark:opacity-[0.11]",
    },
    {
      depth: -50,
      className:
        "bottom-[12vh] right-[20vw] h-[26vw] w-[26vw] bg-tone-graphite opacity-[0.05] [animation-direction:alternate-reverse] [animation-duration:20s] dark:opacity-[0.08]",
    },
  ]

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-page" />

      {/* Cores fixas: verde domina, vermelho entra como brasa. Mantidas nos dois temas. */}
      {blobs.map(({ depth, className }) => (
        <span key={className} className="absolute inset-0" style={parallax(depth)}>
          <span className={`absolute animate-drift rounded-full blur-[130px] ${className}`} />
        </span>
      ))}

      {/* Os dois halos que perseguem o ponteiro. O vermelho chega atrasado. */}
      <span className="spotlight spotlight-lead" />
      <span className="spotlight spotlight-trail" />

      {/* A grade se move ao contrário das manchas e fecha a sensação de profundidade.
          O `scale` extra evita que as bordas apareçam durante o deslocamento. */}
      <span className="absolute inset-0" style={parallax(-24, "scale(1.08)")}>
        <span
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--txt) / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--txt) / 0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, #000 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, #000 20%, transparent 75%)",
          }}
        />
      </span>
    </div>
  )
}
