"use client"

import { cn } from "@/lib/utils"
import { ArrowUpRight, BarChart3, Bell, Clock, Heart, MessageSquare, Share2, Star, Tag, TrendingUp, User, Zap } from "lucide-react"

/* ─────────────────────────── Card 1: 基础信息卡 ─────────────────────────── */
export function NeoCardBasic() {
  return (
    <article className="bg-card text-card-foreground nb-border-thick nb-shadow flex flex-col gap-0 overflow-hidden transition-all duration-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:nb-shadow-lg">
      {/* 彩色标头条 */}
      <div className="bg-primary h-2 w-full" />
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="bg-secondary text-secondary-foreground nb-border font-mono font-bold text-xs px-2 py-1 uppercase tracking-widest">
            设计系统
          </div>
          <ArrowUpRight size={20} className="text-muted-foreground shrink-0" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-black leading-tight text-balance">
            Neo Brutalism 设计语言
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            粗边框、偏移阴影、高对比度配色——打破传统UI惯例，构建充满力量感的视觉系统。
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2 border-t-2 border-border">
          <div className="w-8 h-8 bg-accent nb-border flex items-center justify-center shrink-0">
            <User size={14} className="text-accent-foreground" />
          </div>
          <div>
            <p className="text-sm font-bold leading-none">设计师 · 小明</p>
            <p className="text-xs text-muted-foreground mt-0.5">2 天前发布</p>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ─────────────────────────── Card 2: 统计数据卡 ─────────────────────────── */
export function NeoCardStats() {
  const stats = [
    { label: "总用户", value: "12,840", icon: <User size={16} />, color: "bg-primary text-primary-foreground" },
    { label: "活跃今日", value: "3,291", icon: <Zap size={16} />, color: "bg-secondary text-secondary-foreground" },
    { label: "增长率", value: "+24.5%", icon: <TrendingUp size={16} />, color: "bg-success text-success-foreground" },
  ]

  return (
    <article className="bg-card text-card-foreground nb-border-thick nb-shadow overflow-hidden transition-all duration-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:nb-shadow-lg">
      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black uppercase tracking-tight">数据总览</h3>
          <div className="flex items-center gap-1 text-xs font-mono font-bold text-muted-foreground">
            <Clock size={12} />
            <span>实时</span>
          </div>
        </div>

        <div className="space-y-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className={cn("w-8 h-8 nb-border flex items-center justify-center shrink-0", s.color)}>
                {s.icon}
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span className="text-sm font-semibold text-muted-foreground">{s.label}</span>
                <span className="text-xl font-black tabular-nums">{s.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="nb-border-thick p-3 bg-muted flex items-center gap-2">
          <BarChart3 size={14} className="text-muted-foreground" />
          <p className="text-xs font-bold text-muted-foreground">相比上周增长 +18%</p>
        </div>
      </div>
    </article>
  )
}

/* ─────────────────────────── Card 3: 通知/提醒卡 ─────────────────────────── */
export function NeoCardNotification() {
  const notifications = [
    {
      id: 1,
      title: "新评论",
      desc: "张三回复了你的帖子「设计趋势 2025」",
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
    <article className="bg-card text-card-foreground nb-border-thick nb-shadow overflow-hidden transition-all duration-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:nb-shadow-lg">
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black uppercase tracking-tight">通知中心</h3>
          <span className="bg-accent text-accent-foreground font-mono font-black text-xs px-2 py-0.5 nb-border">
            2 条未读
          </span>
        </div>

        <div className="divide-y-2 divide-border">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={cn(
                "flex items-start gap-3 py-3 first:pt-0 last:pb-0",
                n.unread ? "opacity-100" : "opacity-50",
              )}
            >
              <div className={cn("w-7 h-7 nb-border flex items-center justify-center shrink-0 mt-0.5", n.accent)}>
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
    </article>
  )
}

/* ─────────────────────────── Card 4: 产品/定价卡 ─────────────────────────── */
export function NeoCardProduct() {
  const features = ["无限项目", "团队协作", "优先支持", "高级分析", "自定义域名"]

  return (
    <article className="bg-primary text-primary-foreground nb-border-thick nb-shadow overflow-hidden transition-all duration-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:nb-shadow-lg">
      <div className="p-6 space-y-5">
        {/* 顶部标签 */}
        <div className="flex items-center justify-between">
          <div className="bg-foreground text-background font-mono font-black text-xs px-2 py-1 uppercase tracking-widest">
            最受欢迎
          </div>
          <Star size={20} fill="currentColor" />
        </div>

        {/* 计划名 + 价格 */}
        <div className="space-y-1">
          <h3 className="text-2xl font-black uppercase tracking-tighter">Pro 专业版</h3>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-black leading-none">¥99</span>
            <span className="text-sm font-bold pb-1 opacity-70">/月</span>
          </div>
        </div>

        {/* 功能列表 */}
        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm font-semibold">
              <div className="w-5 h-5 bg-foreground text-primary flex items-center justify-center shrink-0 font-black text-xs">
                ✓
              </div>
              {f}
            </li>
          ))}
        </ul>

        {/* 底部标签 */}
        <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-primary-foreground/30">
          {["设计", "开发", "团队"].map((tag) => (
            <div key={tag} className="flex items-center gap-1 bg-foreground/10 text-primary-foreground nb-border px-2 py-0.5 text-xs font-bold border-primary-foreground/30">
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

/* ─────────────────────────── 展示区 ─────────────────────────── */
export function NeoCardShowcase() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-black tracking-tight text-foreground uppercase">Card 卡片</h2>
        <p className="text-muted-foreground font-medium">4 种风格 — 悬停可感受浮起效果</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground border-b-2 border-border pb-0.5">
            01 / 基础信息卡
          </span>
          <NeoCardBasic />
        </div>

        <div className="space-y-2">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground border-b-2 border-border pb-0.5">
            02 / 统计数据卡
          </span>
          <NeoCardStats />
        </div>

        <div className="space-y-2">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground border-b-2 border-border pb-0.5">
            03 / 通知提醒卡
          </span>
          <NeoCardNotification />
        </div>

        <div className="space-y-2">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground border-b-2 border-border pb-0.5">
            04 / 产品定价卡
          </span>
          <NeoCardProduct />
        </div>
      </div>
    </section>
  )
}
