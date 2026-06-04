import { Wordmark } from "@/components/common/Wordmark";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { LoadingDots } from "@/components/common/LoadingDots";
import { useSession } from "@/pages/Session/SessionContext";

export function WaitingScreen() {
  const { isHost, isAdvancing, handleAdvance } = useSession();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
        <Wordmark />
      </header>

      <div className="flex flex-col flex-1 items-center justify-center text-center px-6 gap-8">
        <LoadingDots size="sm" dim />

        <h2 className="font-brand font-bold text-[28px] leading-[1.2] tracking-tight">
          waiting for host
          <br />
          to advance
        </h2>

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
