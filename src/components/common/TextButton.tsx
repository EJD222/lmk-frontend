import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function TextButton({ className, children, ...props }: TextButtonProps) {
  return (
    <button
      className={cn(
        "bg-transparent border-none text-lmk-blue text-[16px] font-medium cursor-pointer py-2.5 px-2",
        "wavy-underline transition-opacity hover:opacity-70",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
