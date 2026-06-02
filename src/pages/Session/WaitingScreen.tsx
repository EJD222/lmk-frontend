import { Wordmark } from "@/components/common/Wordmark";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { useSession } from "./SessionContext";
import { DOT_COLORS } from "@/lib/constants";

export function WaitingScreen() {
  const { isHost, isAdvancing, handleAdvance } = useSession();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
        <Wordmark />
      </header>

      <div className="flex flex-col flex-1 items-center justify-center text-center px-6 gap-8">
        <div className="flex gap-3">
          {DOT_COLORS.map((color, i) => (
            <div
              key={i}
              className="w-[14px] h-[14px] rounded-full animate-pulse"
              style={{
                backgroundColor: color,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.4s",
                opacity: 0.5,
              }}
            />
          ))}
        </div>

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
