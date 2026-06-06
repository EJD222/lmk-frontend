import { useState } from "react";
import { X } from "lucide-react";
import { NavHeader } from "@/components/common/NavHeader";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { SecondaryButton } from "@/components/common/SecondaryButton";
import { LoadingDots } from "@/components/common/LoadingDots";
import { useSession } from "@/pages/Session/SessionContext";
import { sessionService } from "@/services/sessionService";
import type { AnsweredParticipant } from "@/types/participant";

export function WaitingScreen() {
  const { isHost, isAdvancing, handleAdvance, sessionId } = useSession();
  const [showPopup, setShowPopup] = useState(false);
  const [answered, setAnswered] = useState<AnsweredParticipant[]>([]);
  const [loading, setLoading] = useState(false);

  function openAnswered() {
    setShowPopup(true);
    setLoading(true);
    sessionService
      .getAnsweredParticipants(sessionId)
      .then(setAnswered)
      .catch(() => {})
      .finally(() => setLoading(false));
  }

  return (
    <>
      {showPopup && (
        <div
          className="fixed inset-0 bg-lmk-ink/40 z-50 flex items-center justify-center p-6"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="surface-paper w-[300px] max-h-[65vh] flex flex-col rounded-sketch shadow-sketch-lg p-6 gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 -ml-1 -mt-1">
              <button
                onClick={() => setShowPopup(false)}
                className="text-lmk-ink/40 hover:text-lmk-ink transition-colors p-1 flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" strokeWidth={2} />
              </button>
              <div className="flex-1 h-px bg-lmk-ink/15" />
            </div>

            <div className="overflow-y-auto overflow-x-hidden">
              {loading ? (
                <div className="flex justify-center py-4">
                  <LoadingDots size="sm" dim />
                </div>
              ) : answered.length === 0 ? (
                <p className="font-body text-[14px] text-lmk-ink/55">
                  no one yet.
                </p>
              ) : (
                <ul className="flex flex-col gap-2.5">
                  {answered.map((p) => (
                    <li
                      key={p.participant_id}
                      className="font-body text-[15px] text-lmk-ink flex items-baseline gap-2"
                    >
                      <span className="text-lmk-ink/40 flex-shrink-0">•</span>
                      <span className="break-words">{p.display_name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="surface-paper min-h-screen flex flex-col">
        <NavHeader />

        <div className="flex flex-col flex-1 items-center justify-center text-center px-6 gap-9">
          <LoadingDots size="sm" dim />

          {isHost ? (
            <>
              <h2 className="font-display text-[44px] leading-[1.04] text-lmk-ink">
                has everyone
                <br />
                answered?
              </h2>

              <p className="font-body text-[16px] text-lmk-ink/55 max-w-[280px] leading-relaxed">
                when you're ready, advance the session to generate results.
              </p>

              <div className="w-full max-w-[400px] flex flex-col gap-3.5">
                <PrimaryButton onClick={handleAdvance} disabled={isAdvancing}>
                  {isAdvancing ? "Advancing..." : "Advance session"}
                </PrimaryButton>
                <SecondaryButton tone="outline" onClick={openAnswered}>
                  See who's answered
                </SecondaryButton>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-display text-[44px] leading-[1.04] text-lmk-ink">
                waiting for
                <br />
                everyone else
              </h2>

              <p className="font-body text-[16px] text-lmk-ink/55 max-w-[280px] leading-relaxed">
                we'll let you know when it's time.
              </p>

              <div className="w-full max-w-[400px]">
                <SecondaryButton tone="outline" onClick={openAnswered}>
                  See who's answered
                </SecondaryButton>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
