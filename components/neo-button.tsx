"use client"

import { cn } from "@/lib/utils"
import { ArrowRight, Download, Sparkles, Zap, Trash2, Check } from "lucide-react"

// ─────────────────────────────────────────────
// 类型定义
// ─────────────────────────────────────────────
export type ButtonEffect =
  | "lift"       // 左上浮起 + 粗黑偏移阴影（经典 Neo Brutalism）
  | "colorShadow"// 浮起 + 彩色偏移阴影
  | "fill"       // 底色反转填充
  | "slide"      // 底色滑入覆盖
  | "glitch"     // 微小抖动 + 边框闪烁
  | "underline"  // 下划线伸展

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "success"

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  effect?: ButtonEffect
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

// ─────────────────────────────────────────────
// 变体基础样式（背景 / 文字颜色）
// ─────────────────────────────────────────────
const variantBase: Record<ButtonVariant, string> = {
  primary:   "bg-primary   text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  ghost:     "bg-background text-foreground",
  danger:    "bg-destructive text-destructive-foreground",
  success:   "bg-success text-success-foreground",
}

// ─────────────────────────────────────────────
// 每种效果对应的 className
// ─────────────────────────────────────────────
function getEffectClass(effect: ButtonEffect, variant: ButtonVariant): string {
  switch (effect) {

    // 01 — Lift：向左上浮起，粗黑偏移阴影从无到大
    case "lift":
      return cn(
        "shadow-[0px_0px_0px_0px_var(--foreground)]",
        "transition-all duration-150 ease-out",
        "hover:-translate-x-1 hover:-translate-y-1",
        "hover:shadow-[5px_5px_0px_0px_var(--foreground)]",
        "active:translate-x-0 active:translate-y-0",
        "active:shadow-[0px_0px_0px_0px_var(--foreground)]",
      )

    // 02 — Color Shadow：向左上浮起，彩色偏移阴影
    case "colorShadow": {
      const shadowColor =
        variant === "primary"   ? "var(--secondary)"    :
        variant === "secondary" ? "var(--accent)"       :
        variant === "danger"    ? "var(--primary)"      :
        variant === "success"   ? "var(--secondary)"    :
                                  "var(--primary)"
      return cn(
        "transition-all duration-150 ease-out",
        `shadow-[0px_0px_0px_0px_${shadowColor}]`,
        `hover:-translate-x-1 hover:-translate-y-1`,
        `hover:shadow-[6px_6px_0px_0px_${shadowColor}]`,
        "active:translate-x-0 active:translate-y-0",
        `active:shadow-[0px_0px_0px_0px_${shadowColor}]`,
      )
    }

    // 03 — Fill：hover 时背景色反转（前景色填充）
    case "fill":
      return cn(
        "relative overflow-hidden",
        "shadow-[4px_4px_0px_0px_var(--foreground)]",
        "transition-all duration-150 ease-out",
        "hover:bg-foreground hover:text-background",
        "hover:-translate-x-0.5 hover:-translate-y-0.5",
        "hover:shadow-[5px_5px_0px_0px_var(--foreground)]",
        "active:translate-x-0.5 active:translate-y-0.5",
        "active:shadow-[2px_2px_0px_0px_var(--foreground)]",
      )

    // 04 — Slide：伪元素从左滑入，文字保持
    case "slide":
      return cn(
        "relative overflow-hidden group",
        "shadow-[4px_4px_0px_0px_var(--foreground)]",
        "transition-shadow duration-150 ease-out",
        "hover:shadow-[6px_6px_0px_0px_var(--foreground)]",
        "hover:-translate-x-0.5 hover:-translate-y-0.5",
        "active:translate-x-0.5 active:translate-y-0.5",
        "active:shadow-[2px_2px_0px_0px_var(--foreground)]",
        "[&>span.slide-bg]:absolute [&>span.slide-bg]:inset-0",
        "[&>span.slide-bg]:-translate-x-full",
        "[&>span.slide-bg]:transition-transform [&>span.slide-bg]:duration-200 [&>span.slide-bg]:ease-out",
        "hover:[&>span.slide-bg]:translate-x-0",
        "[&>span.slide-bg]:bg-foreground",
        "[&>span.label]:relative [&>span.label]:z-10",
        "[&>span.label]:mix-blend-difference",
      )

    // 05 — Glitch：hover 抖动 + 双重描边残影
    case "glitch":
      return cn(
        "shadow-[4px_4px_0px_0px_var(--foreground)]",
        "transition-all duration-75",
        "hover:animate-[glitch_0.2s_steps(2)_forwards]",
        "hover:shadow-[4px_4px_0px_0px_var(--primary),_-2px_-2px_0px_0px_var(--secondary)]",
        "active:shadow-[0px_0px_0px_0px_var(--foreground)]",
        "active:translate-x-1 active:translate-y-1",
      )

    // 06 — Underline：hover 时底部描边伸展
    case "underline":
      return cn(
        "relative",
        "shadow-[4px_4px_0px_0px_var(--foreground)]",
        "transition-all duration-150 ease-out",
        "hover:-translate-x-0.5 hover:-translate-y-0.5",
        "hover:shadow-[6px_6px_0px_0px_var(--foreground)]",
        "after:absolute after:bottom-0 after:left-0 after:h-[3px]",
        "after:w-0 after:bg-foreground",
        "after:transition-[width] after:duration-200 after:ease-out",
        "hover:after:w-full",
        "active:translate-x-0.5 active:translate-y-0.5",
        "active:shadow-[2px_2px_0px_0px_var(--foreground)]",
      )

    default:
      return "nb-shadow nb-press"
  }
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-base gap-2",
  lg: "px-7 py-3.5 text-lg gap-2.5",
}

// ─────────────────────────────────────────────
// 主组件
// ─────────────────────────────────────────────
export function NeoButton({
  variant = "primary",
  effect = "lift",
  size = "md",
  icon,
  iconPosition = "left",
  className,
  children,
  ...props
}: NeoButtonProps) {
  const isSlide = effect === "slide"

  return (
    <button
      className={cn(
        "inline-flex items-center font-bold nb-border-thick cursor-pointer select-none",
        variantBase[variant],
        getEffectClass(effect, variant),
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {isSlide && <span className="slide-bg" aria-hidden="true" />}
      {icon && iconPosition === "left" && (
        <span className={cn("shrink-0", isSlide && "label")}>{icon}</span>
      )}
      <span className={cn(isSlide && "label")}>{children}</span>
      {icon && iconPosition === "right" && (
        <span className={cn("shrink-0", isSlide && "label")}>{icon}</span>
      )}
    </button>
  )
}

// ─────────────────────────────────────────────
// 展示面板
// ─────────────────────────────────────────────

const DEMOS: {
  id: string
  label: string
  effect: ButtonEffect
  desc: string
  items: { variant: ButtonVariant; size?: "sm" | "md" | "lg"; label: string; icon?: React.ReactNode; iconPos?: "left" | "right" }[]
}[] = [
  {
    id: "01",
    label: "Lift 浮起阴影",
    effect: "lift",
    desc: "从无阴影到黑色偏移阴影，同时向左上角浮起——最经典的 Neo Brutalism 交互。",
    items: [
      { variant: "primary",   label: "立即开始",  icon: <Sparkles size={16} /> },
      { variant: "secondary", label: "下载资源",  icon: <Download size={16} /> },
      { variant: "ghost",     label: "查看全部",  icon: <ArrowRight size={16} />, iconPos: "right" },
      { variant: "danger",    label: "删除",      icon: <Trash2 size={16} /> },
    ],
  },
  {
    id: "02",
    label: "Color Shadow 彩色偏移阴影",
    effect: "colorShadow",
    desc: "浮起的同时显现与自身形成对比的彩色偏移阴影，创造撞色张力。",
    items: [
      { variant: "primary",   label: "主要操作",  icon: <Zap size={16} /> },
      { variant: "secondary", label: "辅助操作",  icon: <Sparkles size={16} /> },
      { variant: "success",   label: "完成确认",  icon: <Check size={16} /> },
      { variant: "danger",    label: "危险警示",  icon: <Trash2 size={16} /> },
    ],
  },
  {
    id: "03",
    label: "Fill 背景反转填充",
    effect: "fill",
    desc: "hover 时背景瞬间反转为前景色，文字随之变为背景色，形成强烈的黑白翻转感。",
    items: [
      { variant: "primary",   size: "sm", label: "小号反转" },
      { variant: "secondary", size: "md", label: "辅助反转" },
      { variant: "ghost",     size: "md", label: "幽灵反转" },
      { variant: "primary",   size: "lg", label: "大号反转", icon: <ArrowRight size={20} />, iconPos: "right" },
    ],
  },
  {
    id: "04",
    label: "Slide 色块滑入",
    effect: "slide",
    desc: "深色色块从左侧匀速滑入覆盖底色，文字通过 mix-blend-difference 保持可读。",
    items: [
      { variant: "primary",   label: "色块划入",  icon: <ArrowRight size={16} />, iconPos: "right" },
      { variant: "secondary", label: "滑入蓝底" },
      { variant: "ghost",     label: "幽灵滑入" },
      { variant: "success",   label: "绿色滑入",  icon: <Check size={16} /> },
    ],
  },
  {
    id: "05",
    label: "Glitch 双重残影",
    effect: "glitch",
    desc: "hover 时出现主色 + 次色双重偏移阴影残影，模拟电子故障/错位的 Glitch 美学。",
    items: [
      { variant: "primary",   label: "Glitch 主色" },
      { variant: "secondary", label: "Glitch 蓝色",  icon: <Zap size={16} /> },
      { variant: "danger",    label: "Glitch 警报" },
      { variant: "ghost",     label: "Glitch 幽灵", icon: <Sparkles size={16} /> },
    ],
  },
  {
    id: "06",
    label: "Underline 描边伸展",
    effect: "underline",
    desc: "hover 时底部黑色描边从左向右伸展至全宽，强调文字锚点感。",
    items: [
      { variant: "ghost",     label: "返回上页",    icon: <ArrowRight size={16} className="rotate-180" /> },
      { variant: "primary",   label: "查看案例",    icon: <ArrowRight size={16} />, iconPos: "right" },
      { variant: "secondary", label: "了解更多" },
      { variant: "ghost",     size: "lg", label: "浏览全部作品", icon: <ArrowRight size={20} />, iconPos: "right" },
    ],
  },
]

export function NeoButtonShowcase() {
  return (
    <section className="space-y-10">
      <div className="space-y-1">
        <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">Button 按钮</h2>
        <p className="text-muted-foreground font-medium">6 种 Hover 效果 — 悬停感受动效，点击感受下压</p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {DEMOS.map(({ id, label, effect, desc, items }) => (
          <div key={id} className="space-y-4">
            {/* 标签 */}
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs font-bold text-muted-foreground">{id}</span>
              <span className="font-black text-base text-foreground uppercase tracking-tight">{label}</span>
            </div>

            {/* 按钮行 */}
            <div className="flex flex-wrap gap-4 items-center py-5 px-5 nb-border bg-card nb-shadow-sm">
              {items.map((item, i) => (
                <NeoButton
                  key={i}
                  variant={item.variant}
                  effect={effect}
                  size={item.size ?? "md"}
                  icon={item.icon}
                  iconPosition={item.iconPos ?? "left"}
                >
                  {item.label}
                </NeoButton>
              ))}
            </div>

            {/* 描述 */}
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
