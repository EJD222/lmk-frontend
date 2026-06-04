import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function FormTextarea({ className, ...props }: FormTextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full px-5 py-4 rounded-sketch-alt border-[2px] border-lmk-ink bg-[#FDFAF2]",
        "font-body text-[17px] leading-relaxed text-lmk-ink placeholder:text-lmk-ink/40 placeholder:italic",
        "shadow-sketch-sm outline-none resize-none transition-[border-color,box-shadow]",
        "focus:border-lmk-blue focus:shadow-[3px_4px_0_rgba(21,41,214,0.22)]",
        className
      )}
      {...props}
    />
  );
}
