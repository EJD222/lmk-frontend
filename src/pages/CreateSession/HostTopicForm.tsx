import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useCreateSession } from './CreateSessionContext';

export function HostTopicForm() {
  const { formData, setHostName, setTopic, goToNext } = useCreateSession();

  const isValid = formData.hostName.trim().length > 0 && formData.topic.trim().length > 0;

  return (
    <div className="flex flex-col flex-1">
      <h1 className="font-brand text-[44px] leading-none uppercase tracking-tight mb-2">
        let's get started
      </h1>
      <p className="text-[15px] leading-relaxed text-lmk-dark/50 mb-8">
        tell us who you are and what you're deciding
      </p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-lmk-dark/50">
            your name
          </label>
          <input
            type="text"
            value={formData.hostName}
            onChange={e => setHostName(e.target.value)}
            placeholder="keep it fun"
            className={cn(
              'w-full h-[52px] px-4 rounded-xl border border-lmk-dark/10 bg-white',
              'font-medium text-[16px] text-lmk-dark placeholder:text-lmk-dark/35',
              'outline-none transition-[border-color,box-shadow]',
              'focus:border-lmk-secondary focus:shadow-[0_0_0_4px_rgba(91,46,255,0.15)]'
            )}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold uppercase tracking-[0.12em] text-lmk-dark/50">
            what are you deciding?
          </label>
          <textarea
            value={formData.topic}
            onChange={e => setTopic(e.target.value)}
            placeholder="e.g. where should we hang out this Saturday?"
            rows={4}
            className={cn(
              'w-full px-4 py-3.5 rounded-xl border border-lmk-dark/10 bg-white',
              'font-medium text-[16px] text-lmk-dark placeholder:text-lmk-dark/35',
              'outline-none transition-[border-color,box-shadow] resize-none',
              'focus:border-lmk-secondary focus:shadow-[0_0_0_4px_rgba(91,46,255,0.15)]'
            )}
          />
        </div>
      </div>

      <div className="mt-auto md:mt-8">
        <Button
          size="lg"
          disabled={!isValid}
          onClick={goToNext}
          className="w-full h-[52px] bg-lmk-primary hover:bg-lmk-primary/90 text-white text-[15px] font-bold rounded-md"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
