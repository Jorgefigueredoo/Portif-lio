"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
}

export function CursorEffects() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      // Create particles on mouse move (less frequent)
      if (Math.random() < 0.3) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 60,
          maxLife: 60,
        }

        setParticles((prev) => [...prev.slice(-20), newParticle])
      }
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleClick = (e: MouseEvent) => {
      // Create burst of particles on click
      const burstParticles: Particle[] = []
      for (let i = 0; i < 8; i++) {
        burstParticles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos((i / 8) * Math.PI * 2) * 3,
          vy: Math.sin((i / 8) * Math.PI * 2) * 3,
          life: 80,
          maxLife: 80,
        })
      }
      setParticles((prev) => [...prev.slice(-15), ...burstParticles])
    }

    const animate = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 1,
            vx: particle.vx * 0.98,
            vy: particle.vy * 0.98,
          }))
          .filter((particle) => particle.life > 0),
      )
      animationId = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("click", handleClick)
    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("click", handleClick)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: particle.x - 3,
            top: particle.y - 3,
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"
            style={{
              opacity: particle.life / particle.maxLife,
              transform: `scale(${particle.life / particle.maxLife})`,
            }}
          />
        </div>
      ))}

      {/* Click ripple effect */}
      {isClicking && (
        <style jsx global>{`
          * {
            cursor: none !important;
          }
        `}</style>
      )}
    </>
  )
}
