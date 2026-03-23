export type DesignSystem = "neo-brutalism" | "default" | "glassmorphism" | "neumorphism"

export interface DesignSystemConfig {
  id: DesignSystem
  name: string
  description: string
  features: string[]
}

export const DESIGN_SYSTEMS: DesignSystemConfig[] = [
  {
    id: "neo-brutalism",
    name: "Neo Brutalism",
    description: "粗边框、偏移阴影、高对比度配色，打破传统 UI 惯例",
    features: ["粗黑边框", "偏移硬阴影", "原色高饱和", "无圆角"],
  },
  {
    id: "default",
    name: "Default",
    description: "shadcn/ui 默认风格，简洁现代的中性设计语言",
    features: ["细微边框", "柔和阴影", "中性配色", "圆角卡片"],
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    description: "磨砂玻璃质感，半透明背景与模糊效果",
    features: ["背景模糊", "半透明层", "渐变边框", "柔光效果"],
  },
  {
    id: "neumorphism",
    name: "Neumorphism",
    description: "新拟态设计，内外阴影营造凸起凹陷的触感",
    features: ["内外双阴影", "柔和凸起", "同色系渐变", "触感质地"],
  },
]
