import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

export function FormInput({ label, hint, className, ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-lmk-dark/50">
        {label}
      </label>
      <input
        className={cn(
          "w-full h-[52px] px-4 rounded-xl border border-lmk-dark/10 bg-white",
          "font-medium text-[16px] text-lmk-dark placeholder:text-lmk-dark/35",
          "outline-none transition-[border-color,box-shadow]",
          "focus:border-lmk-secondary focus:shadow-[0_0_0_4px_rgba(91,46,255,0.15)]",
          className
        )}
        {...props}
      />
      {hint && <p className="text-[12px] text-lmk-dark/40 leading-snug">{hint}</p>}
    </div>
  );
}
