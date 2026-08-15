import { Header } from "@/components/header"
import { Aurora } from "@/components/aurora"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Aurora />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <BackToTop />
    </div>
  )
}
