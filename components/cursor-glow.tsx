"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-[9996] transition-opacity duration-300"
      style={{
        left: mousePosition.x - 100,
        top: mousePosition.y - 100,
      }}
    >
      {/* Large glow effect */}
      <div className="w-48 h-48 rounded-full bg-blue-500/10 dark:bg-blue-400/20 blur-3xl animate-pulse" />

      {/* Medium glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-blue-400/20 dark:bg-blue-300/30 blur-2xl" />

      {/* Small inner glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-300/30 dark:bg-blue-200/40 blur-xl" />
    </div>
  )
}
