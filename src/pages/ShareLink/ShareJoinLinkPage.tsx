import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { notifySuccess, notifyError } from '@/lib/notify';
import { buildSessionPath } from '@/common/routes';

interface SharePageState {
  sessionId: string;
  hostParticipantId: string;
  joinLink: string;
}

export function ShareJoinLinkPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as SharePageState | null;

  useEffect(() => {
    if (!state?.joinLink) {
      navigate('/', { replace: true });
    }
  }, [state, navigate]);

  if (!state?.joinLink) return null;

  const { joinLink } = state;

  const linkId = joinLink.split('/').filter(Boolean).pop() ?? joinLink;
  const shareUrl = `${window.location.origin}/join-session/${linkId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      notifySuccess('Link copied!');
    } catch {
      notifyError('Could not copy. Please copy the link manually.');
    }
  };

  const handleShare = async () => {
    if ('share' in navigator) {
      try {
        await navigator.share({ title: "Join my lmk session", url: shareUrl });
      } catch {
        // user dismissed the share sheet — no error needed
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
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="w-full max-w-[400px] flex flex-col items-center">

        <span className="font-brand font-extrabold text-xl tracking-[-0.04em] self-start mb-12">
          lmk
        </span>

        <h1 className="font-brand text-[56px] leading-none uppercase tracking-tight mb-6 self-start">
          you're in.
        </h1>

        <div className="w-full bg-lmk-dark/[0.04] border-[1.5px] border-lmk-dark/[0.08] rounded-full px-5 py-3.5 font-mono font-bold text-[13px] text-lmk-secondary tracking-[0.06em] mb-4 truncate">
          {shareUrl}
        </div>

        <div className="w-full flex flex-col gap-3 mb-8">
          <Button
            size="lg"
            onClick={handleCopy}
            className="w-full h-[52px] bg-lmk-primary hover:bg-lmk-primary/90 text-white text-[15px] font-bold rounded-md"
          >
            Copy link
          </Button>
          {'share' in navigator && (
            <Button
              size="lg"
              variant="outline"
              onClick={handleShare}
              className="w-full h-[52px] text-[15px] font-bold rounded-md border-lmk-primary text-lmk-primary hover:bg-lmk-primary/10"
            >
              Share
            </Button>
          )}
        </div>

        <p className="text-[15px] text-lmk-dark/50 leading-relaxed">
          share this with your group. we'll wait.
        </p>

        <button
          onClick={handleContinueToQuestions}
          className="mt-10 bg-transparent border-none text-lmk-primary font-semibold text-[16px] cursor-pointer py-2 hover:opacity-75 transition-opacity"
        >
          continue to questions →
        </button>

      </div>
    </div>
  );
}
