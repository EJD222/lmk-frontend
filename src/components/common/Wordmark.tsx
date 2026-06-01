import { cn } from '@/lib/utils';

interface WordmarkProps {
  className?: string;
}

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn('font-brand font-extrabold text-xl tracking-[-0.04em]', className)}>
      lmk
    </span>
  );
}
