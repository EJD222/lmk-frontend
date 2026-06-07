import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Copy, Link2, Share2 } from "lucide-react";
import { Wordmark } from "@/components/common/Wordmark";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { SecondaryButton } from "@/components/common/SecondaryButton";
import { TextButton } from "@/components/common/TextButton";
import { notifySuccess, notifyError } from "@/lib/notify";
import { buildSessionPath } from "@/common/routes";
import { SharePageState } from "@/types/navigation";

export function ShareJoinLinkPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as SharePageState | null;

  useEffect(() => {
    if (!state?.joinLink) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state?.joinLink) return null;

  const { joinLink } = state;

  const linkId = joinLink.split("/").filter(Boolean).pop() ?? joinLink;
  const shareUrl = `${window.location.origin}/join-session/${linkId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      notifySuccess("copied. go drop it in the chat.");
    } catch {
      notifyError("hmm, that didn't copy — you'll have to grab it by hand");
    }
  };

  const handleShare = async () => {
    if ("share" in navigator) {
      try {
        await navigator.share({ title: "come make plans with me on lmk", url: shareUrl });
      } catch {
        // user dismissed the share sheet
      }
    } else {
      handleCopy();
    }
  };

  const handleContinueToQuestions = () => {
    navigate(buildSessionPath(state.sessionId), {
      state: { sessionId: state.sessionId, participantId: state.hostParticipantId },
    });
  };

  return (
    <div className="surface-paper flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="w-full max-w-[400px] flex flex-col items-center">
        <Wordmark className="self-start mb-10 -rotate-1" />

        <h1 className="font-display text-[58px] leading-[0.95] text-lmk-ink -rotate-2 self-start mb-3">
          you're in. bring the chat.
        </h1>
        <p className="font-body text-[18px] leading-relaxed text-lmk-ink/60 self-start mb-8">
          send this to your people — we'll hang tight till they show up
        </p>

        {/* taped-on join link */}
        <div className="relative w-full mb-8">
          <span
            aria-hidden="true"
            className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-2 w-[72px] h-5 bg-lmk-blue-mid/30 border border-lmk-ink/10 z-10"
          />
          <div className="w-full flex items-center justify-center gap-3 bg-[#FDFAF2] border-[2.5px] border-dashed border-lmk-blue rounded-sketch px-5 py-4">
            <Link2 className="w-5 h-5 text-lmk-ink shrink-0" strokeWidth={2.2} />
            <span className="font-mono font-bold text-[14px] text-lmk-blue tracking-[0.04em] truncate">
              {shareUrl}
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full gap-3.5 mb-8">
          <PrimaryButton onClick={handleCopy}>
            Copy link
            <Copy className="w-5 h-5" strokeWidth={2.2} />
          </PrimaryButton>
          {"share" in navigator && (
            <SecondaryButton tone="outline" onClick={handleShare}>
              Share
              <Share2 className="w-5 h-5" strokeWidth={2.2} />
            </SecondaryButton>
          )}
        </div>

        <TextButton onClick={handleContinueToQuestions}>I'll go first →</TextButton>
      </div>
    </div>
  );
}
