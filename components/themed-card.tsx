"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight, BarChart3, Bell, Clock, Heart, MessageSquare, Star, Tag, TrendingUp, User, Zap, Share2 } from "lucide-react"

// ═══════════════════════════════════════════════════════════════════════════
// 卡片容器（通用）
// ═══════════════════════════════════════════════════════════════════════════
function CardContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <article
      className={cn(
        "bg-card text-card-foreground overflow-hidden transition-all duration-150",

        // Neo Brutalism
        "ds-neo:border-[3px] ds-neo:border-border ds-neo:rounded-none",
        "ds-neo:shadow-[4px_4px_0px_0px_var(--foreground)]",
        "ds-neo:hover:translate-x-[-2px] ds-neo:hover:translate-y-[-2px]",
        "ds-neo:hover:shadow-[6px_6px_0px_0px_var(--foreground)]",

        // Default
        "ds-default:border ds-default:border-border ds-default:rounded-lg",
        "ds-default:shadow-sm ds-default:hover:shadow-md",

        // Glassmorphism
        "ds-glass:bg-card/60 ds-glass:backdrop-blur-md",
        "ds-glass:border ds-glass:border-border/50 ds-glass:rounded-2xl",
        "ds-glass:shadow-lg ds-glass:hover:shadow-xl ds-glass:hover:bg-card/70",

        // Neumorphism
        "ds-neumorphism:rounded-2xl ds-neumorphism:border-none",
        "ds-neumorphism:shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]",
        "ds-neumorphism:hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]",

        className,
      )}
    >
      {children}
    </article>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// Card 1: 基础信息卡
// ═══════════════════════════════════════════════════════════════════════════
export function ThemedCardBasic() {
  return (
    <CardContainer>
      {/* 顶部彩条 */}
      <div className={cn(
        "h-2 w-full bg-primary",
        "ds-glass:bg-gradient-to-r ds-glass:from-primary ds-glass:to-accent",
        "ds-neumorphism:bg-gradient-to-r ds-neumorphism:from-primary ds-neumorphism:to-accent",
      )} />
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className={cn(
            "font-mono font-bold text-xs px-2 py-1 uppercase tracking-widest",
            "bg-secondary text-secondary-foreground",
            "ds-neo:border-2 ds-neo:border-border",
            "ds-default:rounded-md",
            "ds-glass:rounded-full ds-glass:bg-secondary/80",
            "ds-neumorphism:rounded-full",
          )}>
            设计系统
          </div>
          <ArrowUpRight size={20} className="text-muted-foreground shrink-0" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-black leading-tight text-balance">
            多风格设计语言
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            支持 Neo Brutalism、Default、Glassmorphism、Neumorphism 四种设计风格无缝切换。
          </p>
        </div>
        <div className={cn(
          "flex items-center gap-3 pt-2 border-t",
          "ds-neo:border-t-2 ds-neo:border-border",
          "ds-default:border-border",
          "ds-glass:border-border/30",
          "ds-neumorphism:border-border/30",
        )}>
          <div className={cn(
            "w-8 h-8 flex items-center justify-center shrink-0",
            "bg-accent text-accent-foreground",
            "ds-neo:border-2 ds-neo:border-border",
            "ds-default:rounded-full",
            "ds-glass:rounded-full ds-glass:bg-accent/80",
            "ds-neumorphism:rounded-full",
          )}>
            <User size={14} />
          </div>
          <div>
            <p className="text-sm font-bold leading-none">设计师</p>
            <p className="text-xs text-muted-foreground mt-0.5">2 天前发布</p>
          </div>
        </div>
      </div>
    </CardContainer>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// Card 2: 统计数据卡
// ═══════════════════════════════════════════════════════════════════════════
export function ThemedCardStats() {
  const stats = [
    { label: "总用户", value: "12,840", icon: <User size={16} />, color: "bg-primary text-primary-foreground" },
    { label: "活跃今日", value: "3,291", icon: <Zap size={16} />, color: "bg-secondary text-secondary-foreground" },
    { label: "增长率", value: "+24.5%", icon: <TrendingUp size={16} />, color: "bg-success text-success-foreground" },
  ]

  return (
    <CardContainer>
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className={cn(
            "text-lg font-black tracking-tight",
            "ds-neo:uppercase",
          )}>
            数据总览
          </h3>
          <div className="flex items-center gap-1 text-xs font-mono font-bold text-muted-foreground">
            <Clock size={12} />
            <span>实时</span>
          </div>
        </div>

        <div className="space-y-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 flex items-center justify-center shrink-0",
                s.color,
                "ds-neo:border-2 ds-neo:border-border",
                "ds-default:rounded-md",
                "ds-glass:rounded-lg ds-glass:bg-opacity-80",
                "ds-neumorphism:rounded-lg",
              )}>
                {s.icon}
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground">{s.label}</span>
                <span className="text-xl font-black tabular-nums">{s.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={cn(
          "p-3 flex items-center gap-2",
          "bg-muted",
          "ds-neo:border-[3px] ds-neo:border-border",
          "ds-default:rounded-md",
          "ds-glass:rounded-xl ds-glass:bg-muted/50 ds-glass:backdrop-blur-sm",
          "ds-neumorphism:rounded-xl ds-neumorphism:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]",
        )}>
          <BarChart3 size={14} className="text-muted-foreground" />
          <p className="text-xs font-bold text-muted-foreground">相比上周增长 +18%</p>
        </div>
      </div>
    </CardContainer>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// Card 3: 通知/提醒卡
// ═══════════════════════════════════════════════════════════════════════════
export function ThemedCardNotification() {
  const notifications = [
    {
      id: 1,
      title: "新评论",
      desc: "张三回复了你的帖子",
      time: "3分钟前",
      unread: true,
      icon: <MessageSquare size={14} />,
      accent: "bg-secondary text-secondary-foreground",
    },
    {
      id: 2,
      title: "获得点赞",
      desc: "你的作品集收到 12 个新赞",
      time: "1小时前",
      unread: true,
      icon: <Heart size={14} />,
      accent: "bg-accent text-accent-foreground",
    },
    {
      id: 3,
      title: "系统通知",
      desc: "你的订阅将在 3 天后到期",
      time: "今天",
      unread: false,
      icon: <Bell size={14} />,
      accent: "bg-muted text-foreground",
    },
  ]

  return (
    <CardContainer>
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={cn(
            "text-lg font-black tracking-tight",
            "ds-neo:uppercase",
          )}>
            通知中心
          </h3>
          <span className={cn(
            "font-mono font-black text-xs px-2 py-0.5",
            "bg-accent text-accent-foreground",
            "ds-neo:border-2 ds-neo:border-border",
            "ds-default:rounded-md",
            "ds-glass:rounded-full ds-glass:bg-accent/80",
            "ds-neumorphism:rounded-full",
          )}>
            2 条未读
          </span>
        </div>

        <div className={cn(
          "divide-y",
          "ds-neo:divide-y-2 ds-neo:divide-border",
          "ds-default:divide-border",
          "ds-glass:divide-border/30",
          "ds-neumorphism:divide-border/30",
        )}>
          {notifications.map((n) => (
            <div
              key={n.id}
              className={cn(
                "flex items-start gap-3 py-3 first:pt-0 last:pb-0",
                n.unread ? "opacity-100" : "opacity-50",
              )}
            >
              <div className={cn(
                "w-7 h-7 flex items-center justify-center shrink-0 mt-0.5",
                n.accent,
                "ds-neo:border-2 ds-neo:border-border",
                "ds-default:rounded-md",
                "ds-glass:rounded-lg ds-glass:bg-opacity-80",
                "ds-neumorphism:rounded-lg",
              )}>
                {n.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold leading-snug">{n.title}</p>
                <p className="text-xs text-muted-foreground leading-snug mt-0.5 truncate">{n.desc}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground shrink-0">{n.time}</span>
            </div>
          ))}
        </div>
      </div>
    </CardContainer>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// Card 4: 产品/定价卡
// ═══════════════════════════════════════════════════════════════════════════
export function ThemedCardProduct() {
  const features = ["无限项目", "团队协作", "优先支持", "高级分析", "自定义域名"]

  return (
    <article
      className={cn(
        "bg-primary text-primary-foreground overflow-hidden transition-all duration-150",

        // Neo Brutalism
        "ds-neo:border-[3px] ds-neo:border-border ds-neo:rounded-none",
        "ds-neo:shadow-[4px_4px_0px_0px_var(--foreground)]",
        "ds-neo:hover:translate-x-[-2px] ds-neo:hover:translate-y-[-2px]",
        "ds-neo:hover:shadow-[6px_6px_0px_0px_var(--foreground)]",

        // Default
        "ds-default:border ds-default:border-primary-foreground/20 ds-default:rounded-lg",
        "ds-default:shadow-lg ds-default:hover:shadow-xl",

        // Glassmorphism
        "ds-glass:bg-primary/90 ds-glass:backdrop-blur-md",
        "ds-glass:border ds-glass:border-primary-foreground/30 ds-glass:rounded-2xl",
        "ds-glass:shadow-xl ds-glass:hover:shadow-2xl",

        // Neumorphism
        "ds-neumorphism:rounded-2xl ds-neumorphism:border-none",
        "ds-neumorphism:shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.1)]",
      )}
    >
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div className={cn(
            "font-mono font-black text-xs px-2 py-1 uppercase tracking-widest",
            "bg-foreground text-background",
            "ds-default:rounded-md",
            "ds-glass:rounded-full",
            "ds-neumorphism:rounded-full",
          )}>
            最受欢迎
          </div>
          <Star size={20} fill="currentColor" />
        </div>

        <div className="space-y-1">
          <h3 className={cn(
            "text-2xl font-black tracking-tighter",
            "ds-neo:uppercase",
          )}>
            Pro 专业版
          </h3>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-black leading-none">¥99</span>
            <span className="text-sm font-bold pb-1 opacity-70">/月</span>
          </div>
        </div>

        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm font-semibold">
              <div className={cn(
                "w-5 h-5 flex items-center justify-center shrink-0 font-black text-xs",
                "bg-foreground text-primary",
                "ds-default:rounded-sm",
                "ds-glass:rounded-sm",
                "ds-neumorphism:rounded-sm",
              )}>
                ✓
              </div>
              {f}
            </li>
          ))}
        </ul>

        <div className={cn(
          "flex flex-wrap gap-2 pt-2 border-t",
          "ds-neo:border-primary-foreground/30 ds-neo:border-t-2",
          "ds-default:border-primary-foreground/20",
          "ds-glass:border-primary-foreground/20",
          "ds-neumorphism:border-primary-foreground/20",
        )}>
          {["设计", "开发", "团队"].map((tag) => (
            <div key={tag} className={cn(
              "flex items-center gap-1 text-xs font-bold px-2 py-0.5",
              "bg-foreground/10 text-primary-foreground border border-primary-foreground/30",
              "ds-default:rounded-md",
              "ds-glass:rounded-full",
              "ds-neumorphism:rounded-full",
            )}>
              <Tag size={10} />
              {tag}
            </div>
          ))}
          <div className="flex items-center gap-1 ml-auto text-xs font-bold opacity-70 cursor-pointer hover:opacity-100">
            <Share2 size={12} />
            分享
          </div>
        </div>
      </div>
    </article>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// 展示区
// ═══════════════════════════════════════════════════════════════════════════
export function ThemedCardShowcase() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className={cn(
          "text-2xl font-black tracking-tight text-foreground",
          "ds-neo:uppercase",
          "ds-default:font-semibold ds-default:tracking-normal",
          "ds-glass:font-semibold ds-glass:tracking-normal",
          "ds-neumorphism:font-semibold ds-neumorphism:tracking-normal",
        )}>
          Card 卡片
        </h2>
        <p className="text-muted-foreground font-medium">4 种风格 — 悬停可感受浮起效果</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <span className={cn(
            "inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground pb-0.5",
            "ds-neo:border-b-2 ds-neo:border-border",
            "ds-default:border-b ds-default:border-border",
            "ds-glass:border-b ds-glass:border-border/50",
            "ds-neumorphism:border-b ds-neumorphism:border-border/30",
          )}>
            01 / 基础信息卡
          </span>
          <ThemedCardBasic />
        </div>

        <div className="space-y-2">
          <span className={cn(
            "inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground pb-0.5",
            "ds-neo:border-b-2 ds-neo:border-border",
            "ds-default:border-b ds-default:border-border",
            "ds-glass:border-b ds-glass:border-border/50",
            "ds-neumorphism:border-b ds-neumorphism:border-border/30",
          )}>
            02 / 统计数据卡
          </span>
          <ThemedCardStats />
        </div>

        <div className="space-y-2">
          <span className={cn(
            "inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground pb-0.5",
            "ds-neo:border-b-2 ds-neo:border-border",
            "ds-default:border-b ds-default:border-border",
            "ds-glass:border-b ds-glass:border-border/50",
            "ds-neumorphism:border-b ds-neumorphism:border-border/30",
          )}>
            03 / 通知提醒卡
          </span>
          <ThemedCardNotification />
        </div>

        <div className="space-y-2">
          <span className={cn(
            "inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground pb-0.5",
            "ds-neo:border-b-2 ds-neo:border-border",
            "ds-default:border-b ds-default:border-border",
            "ds-glass:border-b ds-glass:border-border/50",
            "ds-neumorphism:border-b ds-neumorphism:border-border/30",
          )}>
            04 / 产品定价卡
          </span>
          <ThemedCardProduct />
        </div>
      </div>
    </section>
  )
}
