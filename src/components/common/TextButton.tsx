import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function TextButton({ className, children, ...props }: TextButtonProps) {
  return (
    <button
      className={cn(
        "bg-transparent border-none text-lmk-primary font-semibold cursor-pointer py-2 hover:opacity-75 transition-opacity",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
