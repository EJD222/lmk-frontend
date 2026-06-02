import { useNavigate } from "react-router-dom";
import { CreateSessionProvider, useCreateSession } from "./CreateSessionContext";
import { HostTopicForm } from "./HostTopicForm";
import { ContextForm } from "./ContextForm";
import { GeneratingQuestions } from "@/pages/Loading/GeneratingQuestions";
import { Wordmark } from "@/components/common/Wordmark";
import { BackButton } from "@/components/common/BackButton";

const STEP_PROGRESS = {
  "host-topic": 50,
  context: 100,
} as const;

function CreateSessionContent() {
  const { step, isLoading, goToPrev } = useCreateSession();
  const navigate = useNavigate();

  if (isLoading) {
    return <GeneratingQuestions />;
  }

  const handleBack = () => {
    if (step === "host-topic") navigate(-1);
    else goToPrev();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center gap-3 px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
        <BackButton onClick={handleBack} />
        <Wordmark />
      </header>

      <div className="px-6 mb-6 w-full max-w-[600px] mx-auto">
        <div className="h-[3px] bg-lmk-dark/[0.08] rounded-full overflow-hidden">
          <div
            className="h-full bg-lmk-primary rounded-full transition-[width] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ width: `${STEP_PROGRESS[step]}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 px-6 pb-8 w-full max-w-[600px] mx-auto">
        {step === "host-topic" ? <HostTopicForm /> : <ContextForm />}
      </div>
    </div>
  );
}

export function CreateSessionPage() {
  return (
    <CreateSessionProvider>
      <CreateSessionContent />
    </CreateSessionProvider>
  );
}
