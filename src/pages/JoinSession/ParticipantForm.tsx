import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { FormInput } from "@/components/common/FormInput";
import { useJoinSession } from "./JoinSessionContext";

export function ParticipantForm() {
  const { linkId, displayName, setLinkId, setDisplayName, handleJoin } = useJoinSession();

  const isValid = linkId.trim().length > 0 && displayName.trim().length > 0;

  return (
    <div className="flex flex-col flex-1">
      <h1 className="font-brand text-[44px] leading-none uppercase tracking-tight mb-8">
        join a session
      </h1>

      <div className="flex flex-col gap-4">
        <FormInput
          label="your name"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="keep it fun"
        />

        <FormInput
          label="session code"
          type="text"
          value={linkId}
          onChange={(e) => setLinkId(e.target.value)}
          placeholder="e.g. a7x3k9"
          hint={linkId.length === 0 ? "ask whoever started the session for the code" : undefined}
          className={cn(linkId.length > 0 && "border-lmk-tertiary")}
        />
      </div>

      <div className="mt-auto md:mt-8">
        <PrimaryButton disabled={!isValid} onClick={handleJoin}>
          Join session
        </PrimaryButton>
      </div>
    </div>
  );
}
