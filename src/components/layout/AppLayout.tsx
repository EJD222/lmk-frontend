import { cn } from "@/lib/utils"

interface AppLayoutProps {
  children: React.ReactNode
  className?: string
}

export function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      <main className="w-full max-w-[1200px] mx-auto px-4">
        {children}
      </main>
    </div>
  )
}
