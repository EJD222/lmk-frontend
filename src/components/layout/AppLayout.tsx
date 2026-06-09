import { Toaster } from "sonner";
import { CircleAlert, CircleCheck, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AppLayout({ children, className }: AppLayoutProps) {
  return (
    <div className={cn("relative min-h-screen", className)}>
      <div className="paper-bg" aria-hidden="true" />

      <main className="w-full">{children}</main>

      <Toaster
        position="bottom-center"
        icons={{
          success: (
            <CircleCheck className="h-[18px] w-[18px] text-lmk-blue-pale" aria-hidden="true" />
          ),
          error: <CircleAlert className="h-[18px] w-[18px] text-destructive" aria-hidden="true" />,
          info: <Info className="h-[18px] w-[18px] text-lmk-paper" aria-hidden="true" />,
        }}
        toastOptions={{
          classNames: {
            toast:
              "font-body text-[14px] !rounded-sketch !border-[2px] !bg-lmk-ink !text-lmk-paper !shadow-sketch",
            default: "!border-lmk-ink",
            info: "!border-lmk-ink",
            success: "!border-lmk-blue !shadow-sketch-blue",
            error: "!border-destructive",
          },
        }}
      />
    </div>
  );
}
