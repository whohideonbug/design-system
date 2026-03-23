"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import type { DesignSystem } from "@/lib/design-systems"

interface DesignSystemContextValue {
  designSystem: DesignSystem
  setDesignSystem: (ds: DesignSystem) => void
}

const DesignSystemContext = createContext<DesignSystemContextValue | undefined>(undefined)

export function DesignSystemProvider({ children }: { children: React.ReactNode }) {
  const [designSystem, setDesignSystemState] = useState<DesignSystem>("neo-brutalism")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("design-system") as DesignSystem | null
    if (stored) {
      setDesignSystemState(stored)
      document.documentElement.setAttribute("data-design", stored)
    } else {
      document.documentElement.setAttribute("data-design", "neo-brutalism")
    }
  }, [])

  const setDesignSystem = useCallback((newDS: DesignSystem) => {
    setDesignSystemState(newDS)
    localStorage.setItem("design-system", newDS)
    document.documentElement.setAttribute("data-design", newDS)
  }, [])

  return (
    <DesignSystemContext.Provider value={{ designSystem, setDesignSystem }}>
      {children}
    </DesignSystemContext.Provider>
  )
}

export function useDesignSystem() {
  const context = useContext(DesignSystemContext)
  if (!context) {
    throw new Error("useDesignSystem must be used within a DesignSystemProvider")
  }
  return context
}
