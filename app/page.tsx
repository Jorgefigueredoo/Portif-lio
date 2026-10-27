import { Header } from "@/components/header"
import { ScrollField } from "@/components/scroll-field"
import { ScrollProgress } from "@/components/scroll-progress"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ScrollytellingHero } from "@/components/scrollytelling-hero"
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
      <SmoothScroll />
      <ScrollField />
      <ScrollProgress />
      <Header />
      <main className="relative z-10">
        <ScrollytellingHero />
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
