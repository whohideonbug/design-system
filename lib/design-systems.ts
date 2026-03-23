export type DesignSystem =
  | "neo-brutalism"
  | "default"
  | "glassmorphism"
  | "neumorphism"
  | "violet-bloom"
  | "bubblegum"
  | "modern-minimal"
  | "soft-pop"
  | "cosmic-night"
  | "vintage-paper"

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
  {
    id: "violet-bloom",
    name: "Violet Bloom",
    description: "紫罗兰渐变，优雅浪漫的视觉体验",
    features: ["紫色主调", "渐变背景", "柔和光晕", "优雅圆角"],
  },
  {
    id: "bubblegum",
    name: "Bubblegum",
    description: "糖果色系，甜美活泼的少女风格",
    features: ["粉色系", "圆润造型", "可爱阴影", "活力配色"],
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "极简主义，留白与线条的完美平衡",
    features: ["大量留白", "细线条", "单色系", "几何形状"],
  },
  {
    id: "soft-pop",
    name: "Soft Pop",
    description: "柔和波普，明亮但不刺眼的现代风格",
    features: ["柔和亮色", "圆角设计", "轻量阴影", "友好配色"],
  },
  {
    id: "cosmic-night",
    name: "Cosmic Night",
    description: "宇宙夜空，深邃星空与霓虹点缀",
    features: ["深色背景", "霓虹强调", "星空纹理", "发光效果"],
  },
  {
    id: "vintage-paper",
    name: "Vintage Paper",
    description: "复古纸张，怀旧温暖的手工质感",
    features: ["纸张纹理", "棕褐色调", "手写风格", "复古装饰"],
  },
]
