'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'none'
  duration?: number
  delay?: number
  className?: string
  threshold?: number
  once?: boolean
}

export default function ScrollAnimationWrapper({
  children,
  animation = 'fade-up',
  duration = 0.5,
  delay = 0,
  className = '',
  threshold = 0.1,
  once = true,
}: ScrollAnimationWrapperProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { amount: threshold, once })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [controls, inView, once])

  // Variants for different animations
  const getVariants = () => {
    switch (animation) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration, 
              delay,
              ease: [0.25, 0.1, 0.25, 1.0] 
            } 
          }
        }
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration, 
              delay,
              ease: [0.25, 0.1, 0.25, 1.0] 
            } 
          }
        }
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration, 
              delay,
              ease: [0.25, 0.1, 0.25, 1.0]
            } 
          }
        }
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
              duration, 
              delay,
              ease: [0.25, 0.1, 0.25, 1.0]
            } 
          }
        }
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration, 
              delay,
              ease: [0.25, 0.1, 0.25, 1.0]
            } 
          }
        }
      case 'none':
      default:
        return {
          hidden: { opacity: 1 },
          visible: { opacity: 1 }
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  )
} 