import { useNavigate } from "react-router-dom";
import { CreateSessionProvider, useCreateSession } from "./CreateSessionContext";
import { HostTopicForm } from "./HostTopicForm";
import { ContextForm } from "./ContextForm";
import { GeneratingQuestions } from "@/pages/Loading/GeneratingQuestions";
import { NavHeader } from "@/components/common/NavHeader";
import { ProgressDashes } from "@/components/common/ProgressDashes";

const STEP_INDEX = {
  "host-topic": 1,
  context: 2,
} as const;

const TOTAL_STEPS = 2;

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
    <div className="surface-paper min-h-screen flex flex-col">
      <NavHeader onBack={handleBack} step={`${STEP_INDEX[step]} of ${TOTAL_STEPS}`} />

      <div className="px-6 mb-7 w-full max-w-[600px] mx-auto">
        <ProgressDashes total={TOTAL_STEPS} current={STEP_INDEX[step]} />
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
