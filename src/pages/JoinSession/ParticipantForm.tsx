import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/common/PrimaryButton";
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
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-lmk-dark/50">
            your name
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="keep it fun"
            className={cn(
              "w-full h-[52px] px-4 rounded-xl border border-lmk-dark/10 bg-white",
              "font-medium text-[16px] text-lmk-dark placeholder:text-lmk-dark/35",
              "outline-none transition-[border-color,box-shadow]",
              "focus:border-lmk-secondary focus:shadow-[0_0_0_4px_rgba(91,46,255,0.15)]"
            )}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-lmk-dark/50">
            session code
          </label>
          <input
            type="text"
            value={linkId}
            onChange={(e) => setLinkId(e.target.value)}
            placeholder="e.g. a7x3k9"
            className={cn(
              "w-full h-[52px] px-4 rounded-xl border border-lmk-dark/10 bg-white",
              "font-medium text-[16px] text-lmk-dark placeholder:text-lmk-dark/35",
              "outline-none transition-[border-color,box-shadow]",
              "focus:border-lmk-secondary focus:shadow-[0_0_0_4px_rgba(91,46,255,0.15)]",
              linkId.length > 0 && "border-lmk-tertiary"
            )}
          />
          {linkId.length === 0 && (
            <p className="text-[12px] text-lmk-dark/40 leading-snug">
              ask whoever started the session for the code
            </p>
          )}
        </div>
      </div>

      <div className="mt-auto md:mt-8">
        <PrimaryButton disabled={!isValid} onClick={handleJoin}>
          Join session
        </PrimaryButton>
      </div>
    </div>
  );
}
