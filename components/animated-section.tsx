"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView, useAnimation, type Variant } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  className?: string
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Define animation variants based on direction
  const getVariants = () => {
    const variants: Record<string, Variant> = {
      hidden: {},
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: duration,
          ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth easing
          delay: delay,
        },
      },
    }

    // Set initial position based on direction
    switch (direction) {
      case "up":
        variants.hidden = { opacity: 0, y: 50 }
        break
      case "down":
        variants.hidden = { opacity: 0, y: -50 }
        break
      case "left":
        variants.hidden = { opacity: 0, x: 50 }
        break
      case "right":
        variants.hidden = { opacity: 0, x: -50 }
        break
      default:
        variants.hidden = { opacity: 0, y: 50 }
    }

    return variants
  }

  // Trigger animation when in view
  if (isInView) {
    controls.start("visible")
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={getVariants()} className={className}>
      {children}
    </motion.div>
  )
}
