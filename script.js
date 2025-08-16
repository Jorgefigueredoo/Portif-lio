// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu")
const navMenu = document.querySelector(".nav-menu")

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animate skill bars when they come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-progress")
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        setTimeout(() => {
          bar.style.width = width + "%"
        }, 200)
      })
    }
  })
}, observerOptions)

// Observe skills section
const skillsSection = document.querySelector(".skills")
if (skillsSection) {
  observer.observe(skillsSection)
}

// Contact form handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Simple validation
    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent

    submitButton.textContent = "Enviando..."
    submitButton.disabled = true

    setTimeout(() => {
      alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")
      this.reset()
      submitButton.textContent = originalText
      submitButton.disabled = false
    }, 2000)
  })
}

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "none"
  }
})

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".feature-card, .project-card, .skill-category")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Set initial state for animated elements
document.querySelectorAll(".feature-card, .project-card, .skill-category").forEach((element) => {
  element.style.opacity = "0"
  element.style.transform = "translateY(30px)"
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
})

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll)

// Run animation check on page load
document.addEventListener("DOMContentLoaded", animateOnScroll)

// Add typing effect to hero title
const heroTitle = document.querySelector(".hero-title")
if (heroTitle) {
  const text = heroTitle.innerHTML
  heroTitle.innerHTML = ""

  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.innerHTML += text.charAt(i)
      i++
      setTimeout(typeWriter, 50)
    }
  }

  // Start typing effect after page loads
  setTimeout(typeWriter, 1000)
}

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})
