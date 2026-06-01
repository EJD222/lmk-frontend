import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { useCreateSession } from './CreateSessionContext';

export function ContextForm() {
  const { formData, setContext, handleSubmit } = useCreateSession();

  return (
    <div className="flex flex-col flex-1">
      <h1 className="font-brand text-[44px] leading-none uppercase tracking-tight mb-2">
        anything the AI should know?
      </h1>
      <p className="text-[15px] leading-relaxed text-lmk-dark/50 mb-8">
        add context so the questions are actually useful
      </p>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-end">
          <span className={cn(
            'text-[11px] font-medium tabular-nums transition-colors',
            formData.context.length >= 500 ? 'text-lmk-primary' : 'text-lmk-dark/30'
          )}>
            {formData.context.length}/500
          </span>
        </div>
        <textarea
          value={formData.context}
          onChange={e => setContext(e.target.value)}
          placeholder="e.g. mix of introverts and extroverts, some people don't drive, keep it under $30"
          maxLength={500}
          rows={5}
          className={cn(
            'w-full px-4 py-3.5 rounded-xl border border-lmk-dark/10 bg-white',
            'font-medium text-[16px] text-lmk-dark placeholder:text-lmk-dark/35',
            'outline-none transition-[border-color,box-shadow] resize-none',
            'focus:border-lmk-secondary focus:shadow-[0_0_0_4px_rgba(91,46,255,0.15)]'
          )}
        />
      </div>

      <div className="mt-auto md:mt-8 flex flex-col items-center gap-3">
        <PrimaryButton onClick={handleSubmit}>
          Continue
        </PrimaryButton>
        <button
          onClick={handleSubmit}
          className="bg-transparent border-none text-lmk-primary font-semibold text-[14px] cursor-pointer py-2 hover:opacity-75 transition-opacity"
        >
          skip for now
        </button>
      </div>
    </div>
  );
}
