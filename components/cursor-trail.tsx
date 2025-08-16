"use client"

import { useEffect, useState } from "react"

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      }

      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)

      setTrail((prevTrail) => {
        const newTrail = [newPoint, ...prevTrail.slice(0, 19)] // Keep only 20 points
        return newTrail
      })

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMoving(false)
      }, 100)
    }

    const handleMouseLeave = () => {
      setTrail([])
      setIsMoving(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-200 ${
            isMoving ? "scale-150 opacity-80" : "scale-100 opacity-60"
          }`}
        />
      </div>

      {/* Trail points */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: point.x - (6 - index * 0.2),
            top: point.y - (6 - index * 0.2),
            transition: "opacity 0.3s ease-out",
          }}
        >
          <div
            className="rounded-full bg-blue-400 dark:bg-blue-300"
            style={{
              width: Math.max(2, 12 - index * 0.5),
              height: Math.max(2, 12 - index * 0.5),
              opacity: Math.max(0.1, 0.8 - index * 0.04),
            }}
          />
        </div>
      ))}
    </>
  )
}
