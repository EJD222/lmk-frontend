import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { FormInput } from "@/components/common/FormInput";
import { FormTextarea } from "@/components/common/FormTextarea";
import { useCreateSession } from "./CreateSessionContext";

export function HostTopicForm() {
  const { formData, setHostName, setTopic, goToNext } = useCreateSession();

  const isValid = formData.hostName.trim().length > 0 && formData.topic.trim().length > 0;

  return (
    <div className="flex flex-col flex-1">
      <h1 className="font-display text-[46px] leading-[1.04] text-lmk-ink -rotate-1 self-start mb-2">
        let's get started
      </h1>
      <p className="font-body text-[18px] leading-relaxed text-lmk-ink/60 mb-8">
        tell us who you are and what you're deciding
      </p>

      <div className="flex flex-col gap-5">
        <FormInput
          label="your name"
          type="text"
          value={formData.hostName}
          onChange={(e) => setHostName(e.target.value)}
          placeholder="keep it fun"
        />

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-[12px] font-semibold uppercase tracking-[0.1em] text-lmk-ink/55">
              what are you deciding?
            </label>
            <span
              className={cn(
                "text-[12px] font-medium tabular-nums transition-colors",
                formData.topic.length >= 250 ? "text-lmk-blue" : "text-lmk-ink/35"
              )}
            >
              {formData.topic.length}/250
            </span>
          </div>
          <FormTextarea
            value={formData.topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. where should we hang out this Saturday?"
            maxLength={250}
            rows={4}
          />
        </div>
      </div>

      <div className="mt-auto md:mt-8 pt-8">
        <PrimaryButton disabled={!isValid} onClick={goToNext}>
          Continue
          <ArrowRight className="w-5 h-5" strokeWidth={2.4} />
        </PrimaryButton>
      </div>
    </div>
  );
}
