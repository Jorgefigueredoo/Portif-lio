/** Faixa diagonal com o stack principal rolando continuamente. */
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
    <div aria-hidden className="relative my-4 -rotate-[1.4deg] scale-[1.04] overflow-hidden bg-grad-hot py-5">
      <div className="flex w-max animate-scroll-x items-center gap-7">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-7">
            <span className="font-display text-xl font-extrabold uppercase text-[#180410]">{item}</span>
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#180410]" />
          </span>
        ))}
      </div>
    </div>
  )
}
