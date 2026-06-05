import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <div className={cn("relative min-h-screen", className)}>
      {/* Fixed paper grain behind every screen — gives the whole app its hand-made feel */}
      <div className="paper-bg" aria-hidden="true" />

      <main className="w-full">{children}</main>

      <Toaster
        position="bottom-center"
        toastOptions={{
          classNames: {
            toast:
              "font-body text-[14px] !rounded-sketch !border-[2px] !border-lmk-ink !bg-lmk-ink !text-lmk-paper !shadow-sketch",
          },
        }}
      />
    </div>
  );
}
