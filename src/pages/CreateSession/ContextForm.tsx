import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { TextButton } from "@/components/common/TextButton";
import { FormTextarea } from "@/components/common/FormTextarea";
import { useCreateSession } from "./CreateSessionContext";

export function ContextForm() {
  const { formData, setContext, handleSubmit } = useCreateSession();

  return (
    <div className="flex flex-col flex-1">
      <h1 className="font-display text-[46px] leading-[1.04] text-lmk-ink rotate-1 self-start mb-2">
        wanna give us a heads up?
      </h1>
      <p className="font-body text-[17px] leading-relaxed text-lmk-ink/60 mb-8">
        the more you share, the better these questions are gonna hit
      </p>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-end">
          <span
            className={cn(
              "text-[12px] font-medium tabular-nums transition-colors",
              formData.context.length >= 500 ? "text-lmk-blue" : "text-lmk-ink/35"
            )}
          >
            {formData.context.length}/500
          </span>
        </div>
        <FormTextarea
          value={formData.context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="e.g. we're a mix of homebodies and chaos goblins, budget's tight, not everyone can drive"
          maxLength={500}
          rows={5}
        />
      </div>

      <div className="mt-auto md:mt-8 pt-8 flex flex-col items-center gap-2">
        <PrimaryButton onClick={handleSubmit}>
          Build my session
          <Sparkles className="w-5 h-5" strokeWidth={2.2} />
        </PrimaryButton>
        <TextButton onClick={handleSubmit}>nah, surprise me</TextButton>
      </div>
    </div>
  );
}
