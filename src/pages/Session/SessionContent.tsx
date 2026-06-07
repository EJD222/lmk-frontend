import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSession } from "./SessionContext";
import { QuestionRenderer } from "./Questions/QuestionRenderer";
import { WaitingScreen } from "@/pages/Loading/WaitingScreen";
import { LoadingQuestions } from "@/pages/Loading/LoadingQuestions";
import { GeneratingResults } from "@/pages/Loading/GeneratingResults";
import { NavHeader } from "@/components/common/NavHeader";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { SecondaryButton } from "@/components/common/SecondaryButton";
import { ProgressDashes } from "@/components/common/ProgressDashes";
import { canAdvanceQuestion } from "@/lib/question";
import { MECHANIC } from "@/types/question";

export function SessionContent() {
  const { phase, questions, currentIndex, answers, isSubmitting, goNext, goPrev, handleSubmit } =
    useSession();
  const navigate = useNavigate();

  if (phase === "loading") return <LoadingQuestions />;
  if (phase === "waiting") return <WaitingScreen />;
  if (phase === "generating") return <GeneratingResults />;

  if (questions.length === 0) {
    return (
      <div className="surface-paper min-h-screen flex items-center justify-center">
        <p className="font-body text-[16px] text-lmk-ink/55">
          weirdly, there are no questions here. that one's on us.
        </p>
      </div>
    );
  }

  const total = questions.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;
  const currentQuestion = questions[currentIndex];
  const isSwipe = currentQuestion?.mechanic === MECHANIC.SWIPE;

  const handleBack = () => {
    if (isFirst) navigate(-1);
    else goPrev();
  };

  return (
    <div className="surface-paper min-h-screen flex flex-col">
      <NavHeader />

      <div className="px-6 w-full max-w-[600px] mx-auto">
        <ProgressDashes total={total} current={currentIndex + 1} />
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-lmk-ink/45 mt-3">
          question {currentIndex + 1} of {total}
        </p>
      </div>

      <div className="flex flex-col flex-1 w-full max-w-[600px] mx-auto">
        <div key={currentIndex} className="flex flex-col flex-1 animate-fade-in">
          {isSwipe ? (
            <QuestionRenderer question={currentQuestion} />
          ) : (
            <div className="px-6 py-8 flex-1">
              <h2 className="font-display text-[34px] leading-[1.1] text-lmk-ink -rotate-1 mb-8">
                {currentQuestion.text}
              </h2>
              <QuestionRenderer question={currentQuestion} />
            </div>
          )}
        </div>

        <div className="px-6 pb-8 pt-4 flex flex-col gap-3 w-full max-w-[600px] mx-auto">
          {!isSwipe && (
            <PrimaryButton
              onClick={isLast ? handleSubmit : goNext}
              disabled={
                isSubmitting || !canAdvanceQuestion(currentQuestion, answers[currentQuestion.id])
              }
            >
              {isLast ? (isSubmitting ? "Sending..." : "Submit and be done with it") : "Next"}
            </PrimaryButton>
          )}
          <SecondaryButton tone="paper" onClick={handleBack}>
            <ArrowLeft className="w-5 h-5" strokeWidth={2.4} />
            Back
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
