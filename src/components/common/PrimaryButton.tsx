import { Button, type ButtonProps } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function PrimaryButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      size="lg"
      className={cn(
        "w-full h-[58px] px-6 rounded-sketch-alt border-[2.5px] border-lmk-ink",
        "bg-lmk-blue text-white text-[17px] font-semibold",
        "shadow-sketch-blue transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        "hover:-translate-y-[2px] hover:shadow-[5px_8px_0_rgba(21,41,214,0.32)]",
        "active:translate-y-[2px] active:shadow-[1px_1px_0_rgba(21,41,214,0.32)]",
        "disabled:opacity-30 disabled:translate-y-0 disabled:shadow-sketch-blue",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
