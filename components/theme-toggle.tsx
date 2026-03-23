"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn(
        "w-9 h-9 flex items-center justify-center",
        "ds-neo:border-2 ds-neo:border-border",
        "ds-default:rounded-md",
        "ds-glass:rounded-lg",
        "ds-neumorphism:rounded-lg",
        "ds-violet:rounded-xl",
        "ds-bubblegum:rounded-full",
        "ds-minimal:rounded-sm",
        "ds-softpop:rounded-xl",
        "ds-cosmic:rounded-lg",
        "ds-vintage:rounded-md",
      )} />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "切换到亮色模式" : "切换到暗色模式"}
      className={cn(
        "w-9 h-9 flex items-center justify-center cursor-pointer select-none transition-all",
        "bg-card text-foreground",
        // Neo Brutalism
        "ds-neo:border-2 ds-neo:border-border",
        "ds-neo:shadow-[2px_2px_0px_0px_var(--foreground)]",
        "ds-neo:hover:shadow-[3px_3px_0px_0px_var(--foreground)] ds-neo:hover:-translate-x-0.5 ds-neo:hover:-translate-y-0.5",
        "ds-neo:active:shadow-[0px_0px_0px_0px_var(--foreground)] ds-neo:active:translate-x-0 ds-neo:active:translate-y-0",
        // Default
        "ds-default:border ds-default:border-border ds-default:rounded-md",
        "ds-default:shadow-sm ds-default:hover:bg-accent ds-default:hover:text-accent-foreground",
        // Glassmorphism
        "ds-glass:bg-card/60 ds-glass:backdrop-blur-md ds-glass:border ds-glass:border-border/50 ds-glass:rounded-lg",
        "ds-glass:shadow-md ds-glass:hover:bg-card/80",
        // Neumorphism
        "ds-neumorphism:rounded-lg ds-neumorphism:bg-background",
        "ds-neumorphism:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]",
        "ds-neumorphism:hover:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]",
        "ds-neumorphism:active:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]",
        // Violet Bloom
        "ds-violet:border ds-violet:border-border ds-violet:rounded-xl ds-violet:bg-card",
        "ds-violet:shadow-sm ds-violet:hover:shadow-md ds-violet:hover:shadow-primary/20",
        // Bubblegum
        "ds-bubblegum:border-2 ds-bubblegum:border-border ds-bubblegum:rounded-full ds-bubblegum:bg-card",
        "ds-bubblegum:shadow-sm ds-bubblegum:hover:shadow-md ds-bubblegum:hover:scale-105",
        // Modern Minimal
        "ds-minimal:border ds-minimal:border-border ds-minimal:rounded-sm ds-minimal:bg-card",
        "ds-minimal:hover:bg-accent",
        // Soft Pop
        "ds-softpop:border ds-softpop:border-border/50 ds-softpop:rounded-xl ds-softpop:bg-card",
        "ds-softpop:shadow-sm ds-softpop:hover:shadow-md",
        // Cosmic Night
        "ds-cosmic:border ds-cosmic:border-border ds-cosmic:rounded-lg ds-cosmic:bg-card",
        "ds-cosmic:shadow-[0_0_8px_var(--primary)] ds-cosmic:hover:shadow-[0_0_12px_var(--primary)]",
        // Vintage Paper
        "ds-vintage:border-2 ds-vintage:border-border ds-vintage:rounded-md ds-vintage:bg-card",
        "ds-vintage:shadow-sm ds-vintage:hover:shadow-md",
      )}
    >
      {isDark ? (
        <Sun size={18} className="transition-transform" />
      ) : (
        <Moon size={18} className="transition-transform" />
      )}
    </button>
  )
}
