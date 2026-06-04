import { Button, type ButtonProps } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends ButtonProps {
  /** "paper" = neutral ink-bordered card button, "outline" = dashed blue */
  tone?: "paper" | "outline";
}

const TONES: Record<"paper" | "outline", string> = {
  paper:
    "bg-lmk-paper-warm text-lmk-ink border-[2.5px] border-lmk-ink shadow-sketch hover:-translate-y-[2px] hover:shadow-sketch-lg active:translate-y-[2px] active:shadow-sketch-sm",
  outline:
    "bg-transparent text-lmk-blue border-[2.5px] border-dashed border-lmk-blue hover:bg-lmk-blue/[0.05] active:scale-[0.97]",
};

export function SecondaryButton({
  className,
  children,
  tone = "paper",
  ...props
}: SecondaryButtonProps) {
  return (
    <Button
      size="lg"
      className={cn(
        "w-full h-[58px] px-6 rounded-sketch text-[17px] font-semibold",
        "transition-[transform,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "disabled:opacity-30",
        TONES[tone],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
