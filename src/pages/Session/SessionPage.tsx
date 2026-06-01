import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SessionProvider, useSession } from './SessionContext';
import { QuestionRenderer } from './Questions/QuestionRenderer';
import { LoadingQuestions } from '@/pages/Loading/LoadingQuestions';
import { Button } from '@/components/ui/Button';

interface SessionPageState {
  sessionId: string;
  participantId: string;
}

function SessionContent() {
  const {
    questions, currentIndex, answers, isLoading, isSubmitting,
    goNext, goPrev, handleSubmit,
  } = useSession();
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingQuestions />;
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[15px] text-lmk-dark/50">no questions found for this session.</p>
      </div>
    );
  }

  const total = questions.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;
  const progress = ((currentIndex + 1) / total) * 100;
  const currentQuestion = questions[currentIndex];
  const isSwipe = currentQuestion?.mechanic === 'SWIPE';

  const canAdvance = (() => {
    const answer = answers[currentQuestion?.id];
    if (answer === undefined || answer === null) return false;
    if (answer === false || answer === 0) return true;
    if (currentQuestion.mechanic === 'MULTISELECT') {
      return Array.isArray(answer) && answer.length > 0;
    }
    if (currentQuestion.mechanic === 'TEXT') {
      return typeof answer === 'string' && answer.trim().length > 0;
    }
    return true;
  })();

  const handleBack = () => {
    if (isFirst) {
      navigate(-1);
    } else {
      goPrev();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
        <span className="font-brand font-extrabold text-xl tracking-[-0.04em]">lmk</span>
      </header>

      <div className="px-6 w-full max-w-[600px] mx-auto">
        <div className="h-[3px] bg-lmk-dark/[0.08] rounded-full overflow-hidden">
          <div
            className="h-full bg-lmk-primary rounded-full transition-[width] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.08em] text-lmk-dark/40 mt-3">
          question {currentIndex + 1} of {total}
        </p>
      </div>

      <div className="flex flex-col flex-1 w-full max-w-[600px] mx-auto">
        <div
          key={currentIndex}
          className="flex flex-col flex-1 animate-fade-in"
        >
          {isSwipe ? (
            <QuestionRenderer question={currentQuestion} />
          ) : (
            <div className="px-6 py-8 flex-1">
              <h2 className="font-brand font-bold text-[28px] leading-[1.2] tracking-tight mb-6">
                {currentQuestion.text}
              </h2>
              <QuestionRenderer question={currentQuestion} />
            </div>
          )}
        </div>

        <div className="px-6 pb-8 pt-4 flex flex-col gap-3 w-full max-w-[600px] mx-auto">
          {!isSwipe && (
            <Button
              size="lg"
              onClick={isLast ? handleSubmit : goNext}
              disabled={isSubmitting || !canAdvance}
              className="w-full h-[52px] bg-lmk-primary hover:bg-lmk-primary/90 text-white text-[15px] font-bold rounded-md"
            >
              {isLast ? (isSubmitting ? 'Submitting...' : 'Submit') : 'Next'}
            </Button>
          )}
          <Button
            size="lg"
            variant="outline"
            onClick={handleBack}
            className="w-full h-[52px] text-[15px] font-bold rounded-md border-lmk-dark/20 text-lmk-dark hover:bg-lmk-dark/[0.04]"
          >
            ← Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export function SessionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as SessionPageState | null;

  useEffect(() => {
    if (!state?.sessionId || !state?.participantId) {
      navigate('/', { replace: true });
    }
  }, [state, navigate]);

  if (!state?.sessionId || !state?.participantId) return null;

  return (
    <SessionProvider sessionId={state.sessionId} participantId={state.participantId}>
      <SessionContent />
    </SessionProvider>
  );
}
