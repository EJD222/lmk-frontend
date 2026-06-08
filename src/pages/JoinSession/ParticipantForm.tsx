import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { FormInput } from "@/components/common/FormInput";
import { useJoinSession } from "./JoinSessionContext";

export function ParticipantForm() {
  const { linkId, displayName, setLinkId, setDisplayName, handleJoin } = useJoinSession();

  const isValid = linkId.trim().length > 0 && displayName.trim().length > 0;

  return (
    <div className="flex flex-col flex-1">
      <h1 className="font-display text-[46px] leading-[1.04] text-lmk-ink -rotate-1 self-start mb-2">
        heyyy, you made it
      </h1>
      <p className="font-body text-[17px] leading-relaxed text-lmk-ink/60 mb-8">
        someone already started — let's get you in on the fun
      </p>

      <div className="flex flex-col gap-5">
        <FormInput
          label="your name"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="nothing weird, please"
        />

        <FormInput
          label="session code"
          type="text"
          value={linkId}
          onChange={(e) => setLinkId(e.target.value)}
          placeholder="e.g. a7x3k9"
          hint={linkId.length === 0 ? "don't have one? that's between you and them" : undefined}
          className={cn("tracking-[0.12em]", linkId.length > 0 && "border-lmk-blue text-lmk-blue")}
        />
      </div>

      <div className="mt-auto md:mt-8 pt-8">
        <PrimaryButton disabled={!isValid} onClick={handleJoin}>
          Let's gooo
          <ArrowRight className="w-5 h-5" strokeWidth={2.4} />
        </PrimaryButton>
      </div>
    </div>
  );
}
