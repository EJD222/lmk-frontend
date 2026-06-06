import { NavHeader } from "@/components/common/NavHeader";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { LoadingDots } from "@/components/common/LoadingDots";
import { useSession } from "@/pages/Session/SessionContext";

export function WaitingScreen() {
  const { isHost, isAdvancing, handleAdvance } = useSession();

  return (
    <div className="surface-paper min-h-screen flex flex-col">
      <NavHeader />

      <div className="flex flex-col flex-1 items-center justify-center text-center px-6 gap-9">
        <LoadingDots size="sm" dim />

        <h2 className="font-display text-[44px] leading-[1.04] text-lmk-ink">
          waiting for host
          <br />
          to advance
        </h2>

        <p className="font-body text-[16px] text-lmk-ink/55 max-w-[280px] leading-relaxed">
          we'll let you know when everyone's answers are in.
        </p>

        {isHost && (
          <div className="w-full max-w-[400px]">
            <PrimaryButton onClick={handleAdvance} disabled={isAdvancing}>
              {isAdvancing ? "Advancing..." : "Advance Session"}
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
}
