"use client"

import { useDesignSystem } from "./design-system-provider"
import { DESIGN_SYSTEMS, type DesignSystem } from "@/lib/design-systems"
import { ChevronDown, Check } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function DesignSystemSelector() {
  const { designSystem, setDesignSystem } = useDesignSystem()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = DESIGN_SYSTEMS.find((ds) => ds.id === designSystem)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-2 text-sm font-bold transition-all cursor-pointer select-none",
          // Neo Brutalism 样式
          "ds-neo:border-2 ds-neo:border-border ds-neo:bg-card ds-neo:text-foreground",
          "ds-neo:shadow-[3px_3px_0px_0px_var(--foreground)]",
          "ds-neo:hover:shadow-[4px_4px_0px_0px_var(--foreground)] ds-neo:hover:-translate-x-0.5 ds-neo:hover:-translate-y-0.5",
          "ds-neo:active:shadow-[0px_0px_0px_0px_var(--foreground)] ds-neo:active:translate-x-0 ds-neo:active:translate-y-0",
          // Default 样式
          "ds-default:border ds-default:border-border ds-default:rounded-md ds-default:bg-card ds-default:text-foreground",
          "ds-default:shadow-sm ds-default:hover:bg-accent ds-default:hover:text-accent-foreground",
          // Glassmorphism 样式
          "ds-glass:bg-card/60 ds-glass:backdrop-blur-md ds-glass:border ds-glass:border-border/50 ds-glass:rounded-xl",
          "ds-glass:shadow-lg ds-glass:text-foreground ds-glass:hover:bg-card/80",
          // Neumorphism 样式
          "ds-neumorphism:rounded-xl ds-neumorphism:bg-background ds-neumorphism:text-foreground",
          "ds-neumorphism:shadow-[4px_4px_10px_var(--shadow-dark),-4px_-4px_10px_var(--shadow-light)]",
          "ds-neumorphism:hover:shadow-[2px_2px_6px_var(--shadow-dark),-2px_-2px_6px_var(--shadow-light)]",
        )}
      >
        <span className="max-w-[120px] truncate">{current?.name}</span>
        <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          className={cn(
            "absolute top-full left-0 mt-2 z-[100] min-w-[240px] overflow-hidden",
            // Neo Brutalism
            "ds-neo:border-2 ds-neo:border-border ds-neo:bg-card ds-neo:shadow-[4px_4px_0px_0px_var(--foreground)]",
            // Default
            "ds-default:border ds-default:border-border ds-default:rounded-lg ds-default:bg-card ds-default:shadow-lg",
            // Glassmorphism
            "ds-glass:bg-card/70 ds-glass:backdrop-blur-xl ds-glass:border ds-glass:border-border/50 ds-glass:rounded-2xl ds-glass:shadow-xl",
            // Neumorphism
            "ds-neumorphism:rounded-2xl ds-neumorphism:bg-background ds-neumorphism:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]",
          )}
        >
          {DESIGN_SYSTEMS.map((ds) => (
            <button
              key={ds.id}
              onClick={() => {
                setDesignSystem(ds.id as DesignSystem)
                setOpen(false)
              }}
              className={cn(
                "w-full text-left px-4 py-3 flex items-start gap-3 transition-colors cursor-pointer",
                designSystem === ds.id
                  ? "bg-primary/10 text-foreground"
                  : "hover:bg-muted text-foreground",
                // Neo Brutalism
                "ds-neo:border-b-2 ds-neo:border-border ds-neo:last:border-b-0",
                // Default
                "ds-default:first:rounded-t-lg ds-default:last:rounded-b-lg",
                // Glassmorphism
                "ds-glass:first:rounded-t-2xl ds-glass:last:rounded-b-2xl",
                // Neumorphism
                "ds-neumorphism:first:rounded-t-2xl ds-neumorphism:last:rounded-b-2xl",
              )}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm">{ds.name}</span>
                  {designSystem === ds.id && <Check size={14} className="text-primary" />}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{ds.description}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
