"use client"

import { useDesignSystem } from "@/components/design-system-provider"
import { DesignSystemSelector } from "@/components/design-system-selector"
import { ThemeToggle } from "@/components/theme-toggle"
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
        // Violet Bloom
        "ds-violet:border-b ds-violet:border-border ds-violet:shadow-sm",
        // Bubblegum
        "ds-bubblegum:border-b-2 ds-bubblegum:border-border ds-bubblegum:shadow-sm",
        // Modern Minimal
        "ds-minimal:border-b ds-minimal:border-border",
        // Soft Pop
        "ds-softpop:border-b ds-softpop:border-border/50 ds-softpop:shadow-sm",
        // Cosmic Night
        "ds-cosmic:border-b ds-cosmic:border-border ds-cosmic:shadow-[0_2px_10px_var(--primary)]",
        // Vintage Paper
        "ds-vintage:border-b-2 ds-vintage:border-border ds-vintage:shadow-sm",
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
              "ds-violet:rounded-xl",
              "ds-bubblegum:rounded-full",
              "ds-minimal:rounded-none",
              "ds-softpop:rounded-2xl",
              "ds-cosmic:rounded-lg ds-cosmic:shadow-[0_0_8px_var(--primary)]",
              "ds-vintage:rounded-sm",
            )}>
              <span className="font-black text-base leading-none">D</span>
            </div>
            <div>
              <h1 className={cn(
                "font-black text-lg leading-none tracking-tight text-foreground",
                "ds-neo:uppercase",
                "ds-minimal:font-light ds-minimal:tracking-widest",
                "ds-vintage:font-serif",
              )}>
                {currentDS?.name}
              </h1>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">Design System · v1.0</p>
            </div>
          </div>

          {/* 右侧控制区 */}
          <div className="flex items-center gap-2">
            {/* 主题切换 */}
            <ThemeToggle />
            {/* 设计系统选择器 */}
            <DesignSystemSelector />
          </div>
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
        // Violet Bloom
        "ds-violet:border-b ds-violet:border-border ds-violet:bg-gradient-to-r ds-violet:from-foreground ds-violet:to-primary/90",
        // Bubblegum
        "ds-bubblegum:border-b-2 ds-bubblegum:border-border",
        // Modern Minimal
        "ds-minimal:border-b ds-minimal:border-border",
        // Soft Pop
        "ds-softpop:border-b ds-softpop:border-border/50",
        // Cosmic Night
        "ds-cosmic:border-b ds-cosmic:border-border ds-cosmic:shadow-[0_4px_20px_var(--primary)]",
        // Vintage Paper
        "ds-vintage:border-b-2 ds-vintage:border-border",
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
                  "ds-violet:rounded-full",
                  "ds-bubblegum:rounded-full",
                  "ds-minimal:rounded-none ds-minimal:font-light ds-minimal:tracking-[0.2em]",
                  "ds-softpop:rounded-full",
                  "ds-cosmic:rounded-md",
                  "ds-vintage:rounded-sm ds-vintage:font-serif",
                )}>
                  组件展示
                </span>
                <span className={cn(
                  "font-mono font-black text-xs px-2 py-1 uppercase tracking-widest",
                  "bg-secondary text-secondary-foreground",
                  "ds-default:rounded-md",
                  "ds-glass:rounded-full",
                  "ds-neumorphism:rounded-full",
                  "ds-violet:rounded-full",
                  "ds-bubblegum:rounded-full",
                  "ds-minimal:rounded-none ds-minimal:font-light ds-minimal:tracking-[0.2em]",
                  "ds-softpop:rounded-full",
                  "ds-cosmic:rounded-md",
                  "ds-vintage:rounded-sm ds-vintage:font-serif",
                )}>
                  10 种风格
                </span>
              </div>
              <h2 className={cn(
                "text-4xl sm:text-5xl font-black leading-none tracking-tighter text-balance",
                "ds-neo:uppercase",
                "ds-minimal:font-light ds-minimal:tracking-wide",
                "ds-vintage:font-serif",
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
                    "ds-violet:rounded-full ds-violet:bg-background/90",
                    "ds-bubblegum:rounded-full",
                    "ds-minimal:rounded-none ds-minimal:font-light",
                    "ds-softpop:rounded-full",
                    "ds-cosmic:rounded-md ds-cosmic:bg-background/80",
                    "ds-vintage:rounded-sm ds-vintage:font-serif",
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
            "ds-bubblegum:h-1 ds-bubblegum:rounded-full",
            "ds-minimal:h-px",
            "ds-cosmic:h-px ds-cosmic:bg-primary/50",
          )} />
          <div className={cn(
            "w-4 h-4 bg-primary",
            "ds-neo:border-2 ds-neo:border-border ds-neo:rotate-45",
            "ds-default:rounded-full",
            "ds-glass:rounded-full ds-glass:bg-primary/80",
            "ds-neumorphism:rounded-full",
            "ds-violet:rounded-full",
            "ds-bubblegum:rounded-full ds-bubblegum:w-5 ds-bubblegum:h-5",
            "ds-minimal:rounded-none ds-minimal:rotate-45 ds-minimal:w-3 ds-minimal:h-3",
            "ds-softpop:rounded-full",
            "ds-cosmic:rounded-full ds-cosmic:shadow-[0_0_10px_var(--primary)]",
            "ds-vintage:rounded-sm",
          )} />
          <div className={cn(
            "flex-1 h-px bg-border",
            "ds-neo:h-[3px]",
            "ds-bubblegum:h-1 ds-bubblegum:rounded-full",
            "ds-minimal:h-px",
            "ds-cosmic:h-px ds-cosmic:bg-primary/50",
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
        "ds-violet:border-t ds-violet:border-border ds-violet:shadow-sm",
        "ds-bubblegum:border-t-2 ds-bubblegum:border-border ds-bubblegum:shadow-sm",
        "ds-minimal:border-t ds-minimal:border-border",
        "ds-softpop:border-t ds-softpop:border-border/50 ds-softpop:shadow-sm",
        "ds-cosmic:border-t ds-cosmic:border-border ds-cosmic:shadow-[0_-2px_10px_var(--primary)]",
        "ds-vintage:border-t-2 ds-vintage:border-border ds-vintage:shadow-sm",
      )}>
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={cn(
            "text-sm font-bold text-muted-foreground font-mono",
            "ds-neo:uppercase",
            "ds-minimal:font-light ds-minimal:tracking-wide",
            "ds-vintage:font-serif",
          )}>
            Design System Showcase © 2025
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground">
              当前风格:
            </span>
            <span className={cn(
              "text-xs font-mono text-primary font-bold",
              "ds-vintage:font-serif",
            )}>
              {currentDS?.name}
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              ({DESIGN_SYSTEMS.length} 种可选)
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default function Page() {
  return <PageContent />
}
