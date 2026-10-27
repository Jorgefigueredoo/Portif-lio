import { Server, Layout, Container, Plug, Wrench, HeartHandshake } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const CATEGORIES: { Icon: typeof Server; title: string; skills: string[] }[] = [
  {
    Icon: Server,
    title: "Back-end",
    skills: ["Java", "Spring Boot", "APIs REST", "OAuth2", "JWT", "MySQL / SQL", "PostgreSQL"],
  },
  {
    Icon: Layout,
    title: "Front-end & Mobile",
    skills: ["React", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Design responsivo"],
  },
  {
    Icon: Container,
    title: "DevOps & Deploy",
    skills: ["Docker", "Deploy de aplicações", "CI/CD básico", "Vercel", "Render", "Git & GitHub"],
  },
  {
    Icon: Plug,
    title: "Integrações",
    skills: ["Integração de sistemas", "Consumo de APIs externas", "Webhooks & callbacks", "Autenticação OAuth2/JWT"],
  },
  {
    Icon: Wrench,
    title: "Ferramentas",
    skills: ["VS Code", "Figma", "Google Colab", "ChatGPT / IA", "v0", "Lovable"],
  },
  {
    Icon: HeartHandshake,
    title: "Soft skills",
    skills: [
      "Mentalidade de crescimento",
      "Proatividade",
      "Adaptabilidade",
      "Comunicação técnica",
      "Trabalho em equipe",
      "Resolução de problemas",
      "Resiliência",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeading
          index="04"
          label="Stack"
          title={
            <>
              Ferramentas do <span className="accent-serif">ofício.</span>
            </>
          }
          description="Tecnologias e práticas que venho aprofundando na formação e no dia a dia de projeto."
        />

        <div className="border-b border-line">
          {CATEGORIES.map(({ Icon, title, skills }, index) => (
            <Reveal key={title} delay={index * 50}>
              <div className="group grid gap-5 border-t border-line py-8 md:grid-cols-12 md:items-center md:gap-10">
                <div className="flex items-center gap-4 md:col-span-4">
                  <span className="font-mono text-[11px] text-ink-dim">{String(index + 1).padStart(2, "0")}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-line text-ink-soft transition-colors duration-500 group-hover:border-tone-accent/60 group-hover:text-tone-accent">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 md:col-span-8">
                  {skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
