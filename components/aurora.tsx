/**
 * Fundo fixo da página: manchas de cor desfocadas + grade sutil.
 * Fica atrás de todo o conteúdo e não captura eventos.
 */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-page" />

      {/* Cores fixas: verde domina, vermelho entra como brasa. Mantidas nos dois temas. */}
      <span className="absolute -left-[8vw] -top-[12vw] h-[45vw] w-[45vw] animate-drift rounded-full bg-[#00e676] opacity-[0.14] blur-[130px] dark:opacity-[0.22]" />
      <span className="absolute -right-[12vw] top-[20vh] h-[40vw] w-[40vw] animate-drift rounded-full bg-[#d50000] opacity-[0.1] blur-[130px] [animation-direction:alternate-reverse] [animation-duration:28s] dark:opacity-[0.17]" />
      <span className="absolute bottom-[-10vw] left-[25vw] h-[38vw] w-[38vw] animate-drift rounded-full bg-[#00a86b] opacity-[0.12] blur-[130px] [animation-duration:26s] dark:opacity-[0.18]" />
      <span className="absolute bottom-[12vh] right-[20vw] h-[26vw] w-[26vw] animate-drift rounded-full bg-[#ff3b30] opacity-[0.08] blur-[130px] [animation-direction:alternate-reverse] [animation-duration:20s] dark:opacity-[0.12]" />

      <span
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--txt) / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--txt) / 0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 0%, #000 20%, transparent 75%)",
        }}
      />
    </div>
  )
}
