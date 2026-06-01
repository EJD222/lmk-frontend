import { Button, type ButtonProps } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function PrimaryButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      size="lg"
      className={cn(
        'w-full h-[52px] bg-lmk-primary hover:bg-lmk-primary/90 text-white text-[15px] font-bold rounded-md',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
