"use client"

import { DesignSystemProvider, useDesignSystem } from "@/components/design-system-provider"
import { DesignSystemSelector } from "@/components/design-system-selector"
import { ThemedButtonShowcase } from "@/components/themed-button"
import { ThemedCardShowcase } from "@/components/themed-card"
import { DESIGN_SYSTEMS } from "@/lib/design-systems"
import { cn } from "@/lib/utils"

function PageContent() {
  const { designSystem } = useDesignSystem()
  const currentDS = DESIGN_SYSTEMS.find((ds) => ds.id === designSystem)

  return (
    <main className="min-h-screen bg-background">
      {/* 顶部 Header */}
      <header className={cn(
        "bg-card",
        // Neo Brutalism
        "ds-neo:border-b-[3px] ds-neo:border-border",
        // Default
        "ds-default:border-b ds-default:border-border",
        // Glassmorphism
        "ds-glass:bg-card/60 ds-glass:backdrop-blur-md ds-glass:border-b ds-glass:border-border/50",
        // Neumorphism
        "ds-neumorphism:shadow-[0_4px_8px_var(--shadow-dark)]",
      )}>
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className={cn(
              "w-9 h-9 flex items-center justify-center shrink-0",
              "bg-primary text-primary-foreground",
              "ds-neo:border-2 ds-neo:border-border",
              "ds-default:rounded-md",
              "ds-glass:rounded-lg ds-glass:bg-primary/90",
              "ds-neumorphism:rounded-lg",
            )}>
              <span className="font-black text-base leading-none">D</span>
            </div>
            <div>
              <h1 className={cn(
                "font-black text-lg leading-none tracking-tight text-foreground",
                "ds-neo:uppercase",
              )}>
                {currentDS?.name}
              </h1>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">Design System · v1.0</p>
            </div>
          </div>

          {/* 设计系统选择器 */}
          <DesignSystemSelector />
        </div>
      </header>

      {/* Hero Banner */}
      <div className={cn(
        "bg-foreground text-background",
        // Neo Brutalism
        "ds-neo:border-b-[3px] ds-neo:border-border",
        // Default
        "ds-default:border-b ds-default:border-border",
        // Glassmorphism
        "ds-glass:bg-foreground/95 ds-glass:backdrop-blur-md",
        // Neumorphism
        "ds-neumorphism:shadow-[0_6px_12px_var(--shadow-dark)]",
      )}>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row sm:items-end gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={cn(
                  "font-mono font-black text-xs px-2 py-1 uppercase tracking-widest",
                  "bg-primary text-primary-foreground",
                  "ds-default:rounded-md",
                  "ds-glass:rounded-full",
                  "ds-neumorphism:rounded-full",
                )}>
                  组件展示
                </span>
                <span className={cn(
                  "font-mono font-black text-xs px-2 py-1 uppercase tracking-widest",
                  "bg-secondary text-secondary-foreground",
                  "ds-default:rounded-md",
                  "ds-glass:rounded-full",
                  "ds-neumorphism:rounded-full",
                )}>
                  4 种风格
                </span>
              </div>
              <h2 className={cn(
                "text-4xl sm:text-5xl font-black leading-none tracking-tighter text-balance",
                "ds-neo:uppercase",
              )}>
                多风格
                <br />
                <span className="text-primary">设计系统</span>
              </h2>
              <p className="text-sm text-background/70 leading-relaxed max-w-sm font-medium">
                {currentDS?.description}
              </p>
            </div>

            {/* 特征标签 */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {currentDS?.features.map((feature, i) => (
                <span
                  key={i}
                  className={cn(
                    "text-xs font-bold px-3 py-1",
                    "bg-background text-foreground",
                    "ds-neo:border-2 ds-neo:border-background",
                    "ds-default:rounded-full ds-default:border ds-default:border-background/20",
                    "ds-glass:rounded-full ds-glass:bg-background/90",
                    "ds-neumorphism:rounded-full",
                  )}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 主体内容 */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Button 展示 */}
        <ThemedButtonShowcase />

        {/* 分隔符 */}
        <div className="flex items-center gap-4">
          <div className={cn(
            "flex-1 h-px bg-border",
            "ds-neo:h-[3px]",
          )} />
          <div className={cn(
            "w-4 h-4 bg-primary",
            "ds-neo:border-2 ds-neo:border-border ds-neo:rotate-45",
            "ds-default:rounded-full",
            "ds-glass:rounded-full ds-glass:bg-primary/80",
            "ds-neumorphism:rounded-full",
          )} />
          <div className={cn(
            "flex-1 h-px bg-border",
            "ds-neo:h-[3px]",
          )} />
        </div>

        {/* Card 展示 */}
        <ThemedCardShowcase />
      </div>

      {/* 底部 Footer */}
      <footer className={cn(
        "bg-card mt-8",
        "ds-neo:border-t-[3px] ds-neo:border-border",
        "ds-default:border-t ds-default:border-border",
        "ds-glass:bg-card/60 ds-glass:backdrop-blur-md ds-glass:border-t ds-glass:border-border/50",
        "ds-neumorphism:shadow-[0_-4px_8px_var(--shadow-dark)]",
      )}>
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={cn(
            "text-sm font-bold text-muted-foreground font-mono",
            "ds-neo:uppercase",
          )}>
            Design System Showcase © 2025
          </p>
          <div className="flex items-center gap-3">
            {DESIGN_SYSTEMS.map((ds) => (
              <span
                key={ds.id}
                className={cn(
                  "text-xs font-mono text-muted-foreground",
                  designSystem === ds.id && "text-primary font-bold",
                )}
              >
                {ds.name}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}

export default function Page() {
  return (
    <DesignSystemProvider>
      <PageContent />
    </DesignSystemProvider>
  )
}
