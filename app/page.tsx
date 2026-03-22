import { NeoButtonShowcase } from "@/components/neo-button"
import { NeoCardShowcase } from "@/components/neo-card"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* 顶部 Header */}
      <header className="border-b-[3px] border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary nb-border flex items-center justify-center shrink-0">
              <span className="font-black text-primary-foreground text-base leading-none">N</span>
            </div>
            <div>
              <h1 className="font-black text-lg leading-none tracking-tight text-foreground uppercase">
                Neo Brutalism
              </h1>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">Design System · v1.0</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {["Button", "Card", "Form", "Table"].map((item, i) => (
              <span
                key={item}
                className={
                  i === 0 || i === 1
                    ? "font-mono text-xs font-bold px-3 py-1 nb-border bg-foreground text-background"
                    : "font-mono text-xs font-bold px-3 py-1 nb-border bg-background text-foreground opacity-40"
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-foreground text-background border-b-[3px] border-border">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row sm:items-end gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground font-mono font-black text-xs px-2 py-1 uppercase tracking-widest">
                  组件展示
                </span>
                <span className="bg-secondary text-secondary-foreground font-mono font-black text-xs px-2 py-1 uppercase tracking-widest">
                  开源免费
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black leading-none tracking-tighter text-balance uppercase">
                粗暴而
                <br />
                <span className="text-primary">美丽</span>
              </h2>
              <p className="text-sm text-background/70 leading-relaxed max-w-sm font-medium">
                Neo Brutalism 打破柔和美学的束缚——粗黑边框、偏移阴影、高饱和原色，每一个像素都在宣告存在。
              </p>
            </div>
            {/* 装饰色块 */}
            <div className="flex gap-3 shrink-0">
              {[
                "bg-primary",
                "bg-secondary",
                "bg-accent",
                "bg-success",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`${bg} nb-border w-12 h-12 sm:w-14 sm:h-14`}
                  style={{ boxShadow: "3px 3px 0 0 #fff" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 主体内容 */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Button 展示 */}
        <NeoButtonShowcase />

        {/* 分隔符 */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[3px] bg-border" />
          <div className="w-4 h-4 bg-primary nb-border rotate-45" />
          <div className="flex-1 h-[3px] bg-border" />
        </div>

        {/* Card 展示 */}
        <NeoCardShowcase />
      </div>

      {/* 底部 Footer */}
      <footer className="border-t-[3px] border-border bg-card mt-8">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-bold text-muted-foreground font-mono uppercase">
            Neo Brutalism Design System © 2025
          </p>
          <div className="flex items-center gap-1">
            {["明黄", "蓝色", "珊瑚", "薄荷"].map((name, i) => {
              const colors = ["bg-primary", "bg-secondary", "bg-accent", "bg-success"]
              return (
                <div key={name} className="flex items-center gap-1">
                  <div className={`w-3 h-3 ${colors[i]} nb-border`} />
                  <span className="text-xs font-mono text-muted-foreground">{name}</span>
                  {i < 3 && <span className="text-muted-foreground mx-1">·</span>}
                </div>
              )
            })}
          </div>
        </div>
      </footer>
    </main>
  )
}
