import { Server, Layout, Container, Plug, Wrench, HeartHandshake } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading, accentVars, type Accent } from "@/components/section-heading"

export function Skills() {
  const skillCategories: {
    accent: Accent
    accent2: Accent
    Icon: typeof Server
    title: string
    skills: string[]
  }[] = [
    {
      accent: "red",
      accent2: "steel",
      Icon: Server,
      title: "Backend & Frameworks",
      skills: ["Java", "Spring Boot", "APIs REST", "OAuth2", "JWT", "MySQL / SQL", "PostgreSQL"],
    },
    {
      accent: "green",
      accent2: "crimson",
      Icon: Layout,
      title: "Frontend & Mobile",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Design Responsivo",
      ],
    },
    {
      accent: "emerald",
      accent2: "green",
      Icon: Container,
      title: "DevOps & Deploy",
      skills: ["Docker & Containerização", "Deploy de Aplicações", "CI/CD Básico", "Vercel", "Render", "Git & GitHub"],
    },
    {
      accent: "crimson",
      accent2: "red",
      Icon: Plug,
      title: "Integrações & APIs",
      skills: ["Integração de Sistemas", "Consumo de APIs Externas", "Webhooks & Callbacks", "Autenticação OAuth2/JWT"],
    },
    {
      accent: "lime",
      accent2: "steel",
      Icon: Wrench,
      title: "Ferramentas",
      skills: ["VS Code", "Figma", "Google Colab", "ChatGPT/IA", "v0", "Lovable"],
    },
    {
      accent: "steel",
      accent2: "red",
      Icon: HeartHandshake,
      title: "Soft Skills",
      skills: [
        "Mentalidade de Crescimento",
        "Proatividade",
        "Adaptabilidade",
        "Comunicação Técnica",
        "Trabalho em Equipe",
        "Resolução de Problemas",
        "Resiliência",
      ],
    },
  ]

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          tag="04 — Stack"
          accent="crimson"
          title={<><span className="grad-text">Habilidades</span></>}
          description="Tecnologias, ferramentas e conhecimentos que venho desenvolvendo durante minha formação e experiência prática."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 3) * 90}>
              <div className="neon-card h-full p-7" style={accentVars(category.accent, category.accent2)}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="neon-icon h-11 w-11">
                    <category.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="neon-chip">
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
