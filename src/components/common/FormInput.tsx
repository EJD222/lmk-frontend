import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

export function FormInput({ label, hint, className, ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-semibold uppercase tracking-[0.1em] text-lmk-ink/55">
        {label}
      </label>
      <input
        className={cn(
          "w-full h-[58px] px-5 rounded-sketch-alt border-[2px] border-lmk-ink bg-[#FDFAF2]",
          "font-body text-[17px] text-lmk-ink placeholder:text-lmk-ink/40 placeholder:italic",
          "shadow-sketch-sm outline-none transition-[border-color,box-shadow]",
          "focus:border-lmk-blue focus:shadow-[3px_4px_0_rgba(21,41,214,0.22)]",
          className
        )}
        {...props}
      />
      {hint && <p className="text-[14px] text-lmk-ink/50 leading-snug">{hint}</p>}
    </div>
  );
}
