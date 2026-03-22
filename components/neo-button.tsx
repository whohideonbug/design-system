"use client"

import { cn } from "@/lib/utils"
import { ArrowRight, Download, Sparkles, Zap } from "lucide-react"

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger"

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground border-border hover:translate-x-[-2px] hover:translate-y-[-2px] hover:nb-shadow-lg nb-shadow nb-press",
  secondary:
    "bg-secondary text-secondary-foreground border-border hover:translate-x-[-2px] hover:translate-y-[-2px] hover:nb-shadow-lg nb-shadow nb-press",
  ghost:
    "bg-background text-foreground border-border hover:bg-muted hover:translate-x-[-2px] hover:translate-y-[-2px] hover:nb-shadow-lg nb-shadow nb-press",
  danger:
    "bg-destructive text-destructive-foreground border-border hover:translate-x-[-2px] hover:translate-y-[-2px] hover:nb-shadow-lg nb-shadow nb-press",
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
}

export function NeoButton({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className,
  children,
  ...props
}: NeoButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 font-bold nb-border-thick transition-all duration-100 cursor-pointer select-none",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  )
}

export function NeoButtonShowcase() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">Button 按钮</h2>
        <p className="text-muted-foreground font-medium">4 种风格 — 点击可感受下压效果</p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {/* Button 1 — Primary 主要 */}
        <div className="space-y-3">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground border-b-2 border-border pb-0.5">
            01 / Primary 主要
          </span>
          <div className="flex flex-wrap gap-4 items-center">
            <NeoButton variant="primary" size="sm" icon={<Zap size={14} />}>
              小号按钮
            </NeoButton>
            <NeoButton variant="primary" size="md" icon={<Sparkles size={16} />}>
              立即开始
            </NeoButton>
            <NeoButton variant="primary" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
              探索更多
            </NeoButton>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            明黄底色 · 黑色粗边框 · 偏移阴影 · 按下下沉
          </p>
        </div>

        {/* Button 2 — Secondary 次要 */}
        <div className="space-y-3">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground border-b-2 border-border pb-0.5">
            02 / Secondary 次要
          </span>
          <div className="flex flex-wrap gap-4 items-center">
            <NeoButton variant="secondary" size="sm">
              取消
            </NeoButton>
            <NeoButton variant="secondary" size="md" icon={<Download size={16} />}>
              下载资源
            </NeoButton>
            <NeoButton variant="secondary" size="lg">
              了解详情
            </NeoButton>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            亮蓝底色 · 白色文字 · 强调辅助操作
          </p>
        </div>

        {/* Button 3 — Ghost 幽灵 */}
        <div className="space-y-3">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground border-b-2 border-border pb-0.5">
            03 / Ghost 幽灵
          </span>
          <div className="flex flex-wrap gap-4 items-center">
            <NeoButton variant="ghost" size="sm">
              返回
            </NeoButton>
            <NeoButton variant="ghost" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
              查看全部
            </NeoButton>
            <NeoButton variant="ghost" size="lg">
              跳过此步
            </NeoButton>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            透明底色 · 悬停浅灰 · 适用于次级操作
          </p>
        </div>

        {/* Button 4 — Danger 危险 */}
        <div className="space-y-3">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground border-b-2 border-border pb-0.5">
            04 / Danger 危险
          </span>
          <div className="flex flex-wrap gap-4 items-center">
            <NeoButton variant="danger" size="sm">
              删除
            </NeoButton>
            <NeoButton variant="danger" size="md">
              确认删除
            </NeoButton>
            <NeoButton variant="danger" size="lg">
              清空所有数据
            </NeoButton>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            珊瑚红底色 · 警示破坏性操作
          </p>
        </div>
      </div>
    </section>
  )
}
