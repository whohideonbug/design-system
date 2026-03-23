"use client"

import { cn } from "@/lib/utils"
import { ArrowRight, Download, Sparkles, Zap, Trash2, Check } from "lucide-react"

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "success"
export type ButtonSize = "sm" | "md" | "lg"

interface ThemedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-base gap-2",
  lg: "px-7 py-3.5 text-lg gap-2.5",
}

// 变体背景色映射（所有主题通用）
const variantBg: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  ghost: "bg-transparent text-foreground",
  danger: "bg-destructive text-destructive-foreground",
  success: "bg-success text-success-foreground",
}

export function ThemedButton({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className,
  children,
  ...props
}: ThemedButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-bold cursor-pointer select-none transition-all",
        variantBg[variant],
        sizeStyles[size],

        // ═══ Neo Brutalism ═══
        "ds-neo:border-[3px] ds-neo:border-border ds-neo:rounded-none",
        "ds-neo:shadow-[0px_0px_0px_0px_var(--foreground)]",
        "ds-neo:hover:-translate-x-1 ds-neo:hover:-translate-y-1",
        "ds-neo:hover:shadow-[5px_5px_0px_0px_var(--foreground)]",
        "ds-neo:active:translate-x-0 ds-neo:active:translate-y-0",
        "ds-neo:active:shadow-[0px_0px_0px_0px_var(--foreground)]",

        // ═══ Default (shadcn) ═══
        "ds-default:border ds-default:border-border ds-default:rounded-md",
        "ds-default:shadow-sm ds-default:hover:opacity-90",
        "ds-default:active:scale-[0.98]",
        variant === "ghost" && "ds-default:hover:bg-accent ds-default:hover:text-accent-foreground",

        // ═══ Glassmorphism ═══
        "ds-glass:rounded-xl ds-glass:border ds-glass:border-border/50",
        "ds-glass:backdrop-blur-sm ds-glass:bg-opacity-80",
        "ds-glass:shadow-lg ds-glass:hover:shadow-xl",
        "ds-glass:hover:bg-opacity-100 ds-glass:active:scale-[0.98]",
        variant === "ghost" && "ds-glass:bg-card/40 ds-glass:hover:bg-card/60",

        // ═══ Neumorphism ═══
        "ds-neumorphism:rounded-xl ds-neumorphism:border-none",
        "ds-neumorphism:shadow-[4px_4px_10px_var(--shadow-dark),-4px_-4px_10px_var(--shadow-light)]",
        "ds-neumorphism:hover:shadow-[2px_2px_6px_var(--shadow-dark),-2px_-2px_6px_var(--shadow-light)]",
        "ds-neumorphism:active:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]",
        variant === "ghost" && "ds-neumorphism:bg-background",

        className,
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// 展示面板
// ═══════════════════════════════════════════════════════════════════════════

const BUTTON_DEMOS: {
  variant: ButtonVariant
  label: string
  icon?: React.ReactNode
  iconPos?: "left" | "right"
}[] = [
  { variant: "primary", label: "立即开始", icon: <Sparkles size={16} /> },
  { variant: "secondary", label: "下载资源", icon: <Download size={16} /> },
  { variant: "ghost", label: "查看全部", icon: <ArrowRight size={16} />, iconPos: "right" },
  { variant: "danger", label: "删除", icon: <Trash2 size={16} /> },
]

const SIZE_DEMOS: { size: ButtonSize; label: string }[] = [
  { size: "sm", label: "小号按钮" },
  { size: "md", label: "中号按钮" },
  { size: "lg", label: "大号按钮" },
]

export function ThemedButtonShowcase() {
  return (
    <section className="space-y-10">
      <div className="space-y-1">
        <h2 className={cn(
          "text-2xl font-black tracking-tight text-foreground",
          "ds-neo:uppercase",
          "ds-default:font-semibold ds-default:tracking-normal",
          "ds-glass:font-semibold ds-glass:tracking-normal",
          "ds-neumorphism:font-semibold ds-neumorphism:tracking-normal",
        )}>
          Button 按钮
        </h2>
        <p className="text-muted-foreground font-medium">4 种变体 — 主要 / 次要 / 幽灵 / 危险</p>
      </div>

      {/* 变体展示 */}
      <div className="space-y-4">
        <h3 className={cn(
          "text-sm font-bold text-muted-foreground",
          "ds-neo:uppercase ds-neo:tracking-widest ds-neo:font-mono",
        )}>
          按钮变体
        </h3>
        <div className={cn(
          "flex flex-wrap gap-4 items-center p-5",
          // Neo Brutalism
          "ds-neo:border-2 ds-neo:border-border ds-neo:bg-card ds-neo:shadow-[3px_3px_0px_0px_var(--foreground)]",
          // Default
          "ds-default:border ds-default:border-border ds-default:rounded-lg ds-default:bg-card ds-default:shadow-sm",
          // Glassmorphism
          "ds-glass:bg-card/60 ds-glass:backdrop-blur-md ds-glass:border ds-glass:border-border/50 ds-glass:rounded-2xl ds-glass:shadow-lg",
          // Neumorphism
          "ds-neumorphism:rounded-2xl ds-neumorphism:bg-background ds-neumorphism:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]",
        )}>
          {BUTTON_DEMOS.map((item, i) => (
            <ThemedButton
              key={i}
              variant={item.variant}
              icon={item.icon}
              iconPosition={item.iconPos ?? "left"}
            >
              {item.label}
            </ThemedButton>
          ))}
        </div>
      </div>

      {/* 尺寸展示 */}
      <div className="space-y-4">
        <h3 className={cn(
          "text-sm font-bold text-muted-foreground",
          "ds-neo:uppercase ds-neo:tracking-widest ds-neo:font-mono",
        )}>
          按钮尺寸
        </h3>
        <div className={cn(
          "flex flex-wrap gap-4 items-center p-5",
          "ds-neo:border-2 ds-neo:border-border ds-neo:bg-card ds-neo:shadow-[3px_3px_0px_0px_var(--foreground)]",
          "ds-default:border ds-default:border-border ds-default:rounded-lg ds-default:bg-card ds-default:shadow-sm",
          "ds-glass:bg-card/60 ds-glass:backdrop-blur-md ds-glass:border ds-glass:border-border/50 ds-glass:rounded-2xl ds-glass:shadow-lg",
          "ds-neumorphism:rounded-2xl ds-neumorphism:bg-background ds-neumorphism:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]",
        )}>
          {SIZE_DEMOS.map((item, i) => (
            <ThemedButton key={i} size={item.size} icon={<Zap size={item.size === "lg" ? 20 : 16} />}>
              {item.label}
            </ThemedButton>
          ))}
        </div>
      </div>

      {/* 成功变体 */}
      <div className="space-y-4">
        <h3 className={cn(
          "text-sm font-bold text-muted-foreground",
          "ds-neo:uppercase ds-neo:tracking-widest ds-neo:font-mono",
        )}>
          成功状态
        </h3>
        <div className={cn(
          "flex flex-wrap gap-4 items-center p-5",
          "ds-neo:border-2 ds-neo:border-border ds-neo:bg-card ds-neo:shadow-[3px_3px_0px_0px_var(--foreground)]",
          "ds-default:border ds-default:border-border ds-default:rounded-lg ds-default:bg-card ds-default:shadow-sm",
          "ds-glass:bg-card/60 ds-glass:backdrop-blur-md ds-glass:border ds-glass:border-border/50 ds-glass:rounded-2xl ds-glass:shadow-lg",
          "ds-neumorphism:rounded-2xl ds-neumorphism:bg-background ds-neumorphism:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]",
        )}>
          <ThemedButton variant="success" icon={<Check size={16} />}>
            提交成功
          </ThemedButton>
          <ThemedButton variant="success" size="lg" icon={<Check size={20} />}>
            确认完成
          </ThemedButton>
        </div>
      </div>
    </section>
  )
}
