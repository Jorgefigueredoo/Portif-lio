// ============================================================
// Jorge Antonio — Portfólio | Interações
// ============================================================

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

// ---------- Menu mobile ----------
const mobileMenu = document.getElementById("mobile-menu")
const navMenu = document.getElementById("navMenu")

if (mobileMenu && navMenu) {
  mobileMenu.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active")
    mobileMenu.classList.toggle("active", isOpen)
    mobileMenu.setAttribute("aria-expanded", String(isOpen))
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      mobileMenu.classList.remove("active")
      mobileMenu.setAttribute("aria-expanded", "false")
    })
  })
}

// ---------- Rolagem suave ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href === "#") return
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      })
    }
  })
})

// ---------- Revelação de elementos ao rolar ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = Math.min(index * 90, 360)
        setTimeout(() => entry.target.classList.add("revealed"), delay)
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
)

document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el))

// ---------- Barras de habilidade ----------
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.querySelectorAll(".skill-progress").forEach((bar, i) => {
        const width = bar.getAttribute("data-width")
        setTimeout(() => {
          bar.style.width = width + "%"
        }, 180 + i * 130)
      })
      skillObserver.unobserve(entry.target)
    })
  },
  { threshold: 0.35 },
)

document.querySelectorAll(".skill-category").forEach((el) => skillObserver.observe(el))

// ---------- Contador das estatísticas ----------
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      const el = entry.target
      const target = Number(el.getAttribute("data-count")) || 0
      const suffix = el.getAttribute("data-suffix") || ""
      const duration = 1200
      const start = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        el.textContent = Math.round(target * eased) + suffix
        if (progress < 1) requestAnimationFrame(tick)
      }

      if (prefersReducedMotion) {
        el.textContent = target + suffix
      } else {
        requestAnimationFrame(tick)
      }
      countObserver.unobserve(el)
    })
  },
  { threshold: 0.6 },
)

document.querySelectorAll(".stat-number[data-count]").forEach((el) => countObserver.observe(el))

// ---------- Header, progresso, "voltar ao topo" e link ativo ----------
const header = document.getElementById("header")
const progressBar = document.getElementById("progressBar")
const backToTop = document.getElementById("backToTop")
const sections = Array.from(document.querySelectorAll("section[id]"))
const navLinks = Array.from(document.querySelectorAll(".nav-link"))

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + id)
  })
}

const onScroll = () => {
  const scrollY = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight

  if (header) header.classList.toggle("scrolled", scrollY > 40)
  if (backToTop) backToTop.classList.toggle("show", scrollY > 600)
  if (progressBar) {
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0
    progressBar.style.width = pct + "%"
  }

  // A seção ativa é a última cujo topo já passou pela linha de referência.
  // No fim da página, força a última seção (ela pode ser curta demais).
  if (sections.length) {
    const line = scrollY + 140
    let current = sections[0].id
    sections.forEach((section) => {
      if (section.offsetTop <= line) current = section.id
    })
    if (docHeight > 0 && scrollY >= docHeight - 4) current = sections[sections.length - 1].id
    setActiveLink(current)
  }
}

window.addEventListener("scroll", onScroll, { passive: true })
window.addEventListener("resize", onScroll)
onScroll()

// ---------- Formulário de contato ----------
const contactForm = document.getElementById("contactForm")
const formFeedback = document.getElementById("formFeedback")

const showFeedback = (message, isError) => {
  if (!formFeedback) return
  formFeedback.textContent = message
  formFeedback.classList.toggle("error", Boolean(isError))
  formFeedback.classList.add("show")
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const formData = new FormData(this)
    const name = (formData.get("name") || "").toString().trim()
    const email = (formData.get("email") || "").toString().trim()
    const message = (formData.get("message") || "").toString().trim()

    if (!name || !email || !message) {
      showFeedback("Por favor, preencha todos os campos.", true)
      return
    }

    const submitButton = this.querySelector('button[type="submit"]')
    const originalHTML = submitButton.innerHTML

    submitButton.innerHTML = 'Enviando... <i class="fas fa-circle-notch fa-spin"></i>'
    submitButton.disabled = true
    showFeedback("", false)

    setTimeout(() => {
      showFeedback("Mensagem enviada com sucesso! Entrarei em contato em breve.", false)
      this.reset()
      submitButton.innerHTML = originalHTML
      submitButton.disabled = false
    }, 1800)
  })
}

// ---------- Leve efeito de paralaxe no retrato ----------
const profileStage = document.querySelector(".profile-stage")

if (profileStage && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
  const hero = document.querySelector(".hero")
  hero.addEventListener("mousemove", (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 18
    const y = (e.clientY / innerHeight - 0.5) * 18
    profileStage.style.transform = `translate3d(${x}px, ${y}px, 0)`
  })

  hero.addEventListener("mouseleave", () => {
    profileStage.style.transform = "translate3d(0, 0, 0)"
  })

  profileStage.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
}
