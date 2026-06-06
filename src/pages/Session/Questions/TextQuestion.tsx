import { useSession } from "../SessionContext";
import { FormTextarea } from "@/components/common/FormTextarea";
import type { QuestionOut } from "@/types/question";

const MAX_CHARS = 500;

interface TextQuestionProps {
  question: QuestionOut;
}

export function TextQuestion({ question }: TextQuestionProps) {
  const { answers, setAnswer } = useSession();
  const value = (answers[question.id] as string) || "";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value.slice(0, MAX_CHARS);
    setAnswer(question.id, text);
  };

  return (
    <div className="flex flex-col gap-3">
      <FormTextarea
        value={value}
        onChange={handleChange}
        maxLength={MAX_CHARS}
        rows={5}
        placeholder="Type your answer here..."
      />
      <p className="text-[14px] text-lmk-ink/40 text-right tabular-nums">
        {value.length}/{MAX_CHARS}
      </p>
    </div>
  );
}
