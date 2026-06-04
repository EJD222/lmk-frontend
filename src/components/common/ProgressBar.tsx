interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-[3px] bg-lmk-dark/[0.08] rounded-full overflow-hidden">
      <div
        className="h-full bg-lmk-primary rounded-full transition-[width] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
