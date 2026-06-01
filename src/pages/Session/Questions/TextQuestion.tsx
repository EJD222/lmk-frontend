import { useSession } from '../SessionContext';
import type { QuestionOut } from '@/types/question';

const MAX_CHARS = 500;

interface TextQuestionProps {
  question: QuestionOut;
}

export function TextQuestion({ question }: TextQuestionProps) {
  const { answers, setAnswer } = useSession();
  const value = (answers[question.id] as string) || '';

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value.slice(0, MAX_CHARS);
    setAnswer(question.id, text);
  };

  return (
    <div className="flex flex-col gap-3">
      <textarea
        value={value}
        onChange={handleChange}
        maxLength={MAX_CHARS}
        placeholder="Type your answer here..."
        className="w-full h-[140px] rounded-xl border border-lmk-dark/[0.12] bg-white px-4 py-3 text-[16px] font-brand text-lmk-dark placeholder:text-lmk-dark/35 resize-none outline-none transition-[border-color,box-shadow] duration-200 focus:border-lmk-secondary focus:shadow-[0_0_0_3px_rgba(91,46,255,0.12)]"
      />
      <p className="text-[13px] text-lmk-dark/40 text-right">
        {value.length}/{MAX_CHARS}
      </p>
    </div>
  );
}
