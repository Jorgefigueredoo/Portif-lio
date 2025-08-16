"use client"

import { useEffect, useState } from "react"

export function InteractiveCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        getComputedStyle(target).cursor === "pointer"

      setIsHovering(isInteractive)

      // Set cursor variant based on element type
      if (target.tagName === "BUTTON" || target.closest("button")) {
        setCursorVariant("button")
      } else if (target.tagName === "A" || target.closest("a")) {
        setCursorVariant("link")
      } else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        setCursorVariant("text")
      } else {
        setCursorVariant("default")
      }
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const getCursorSize = () => {
    if (isClicking) return "scale-75"
    if (isHovering) {
      switch (cursorVariant) {
        case "button":
          return "scale-150"
        case "link":
          return "scale-125"
        case "text":
          return "scale-110"
        default:
          return "scale-125"
      }
    }
    return "scale-100"
  }

  const getCursorColor = () => {
    if (isClicking) return "bg-blue-600 dark:bg-blue-300"
    if (isHovering) {
      switch (cursorVariant) {
        case "button":
          return "bg-blue-500 dark:bg-blue-400"
        case "link":
          return "bg-blue-400 dark:bg-blue-500"
        case "text":
          return "bg-blue-300 dark:bg-blue-600"
        default:
          return "bg-blue-500 dark:bg-blue-400"
      }
    }
    return "bg-blue-400 dark:bg-blue-500"
  }

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none z-[10000] mix-blend-difference transition-all duration-200 ease-out"
        style={{
          left: cursorPosition.x - 12,
          top: cursorPosition.y - 12,
        }}
      >
        <div className={`w-6 h-6 rounded-full transition-all duration-200 ${getCursorSize()} ${getCursorColor()}`} />
      </div>

      {/* Cursor ring */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-300 ease-out"
        style={{
          left: cursorPosition.x - 20,
          top: cursorPosition.y - 20,
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 border-blue-400 dark:border-blue-500 transition-all duration-300 ${
            isHovering ? "scale-150 opacity-60" : "scale-100 opacity-30"
          } ${isClicking ? "scale-75" : ""}`}
        />
      </div>

      {/* Hover text indicator */}
      {isHovering && cursorVariant === "link" && (
        <div
          className="fixed pointer-events-none z-[9998] transition-all duration-200"
          style={{
            left: cursorPosition.x + 20,
            top: cursorPosition.y - 10,
          }}
        >
          <div className="bg-blue-600 dark:bg-blue-500 text-gray-100 text-xs px-2 py-1 rounded-md">Click</div>
        </div>
      )}
    </>
  )
}
