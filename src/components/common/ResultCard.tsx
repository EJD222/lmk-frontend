interface ResultCardProps {
  label: string;
  value: string;
  progress: number;
}

export function ResultCard({ label, value, progress }: ResultCardProps) {
  return (
    <div className="bg-black/[0.04] rounded-xl p-4">
      <p className="font-brand font-semibold text-[11px] tracking-[0.08em] uppercase text-lmk-dark/50 mb-2">
        {label}
      </p>
      <p className="font-brand font-bold text-[20px] mb-2">{value}</p>
      <div className="h-2 bg-black/[0.08] rounded-full overflow-hidden">
        <div
          className="h-full bg-lmk-primary rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
