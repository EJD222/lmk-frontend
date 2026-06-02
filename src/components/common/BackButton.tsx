interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Go back"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-lmk-dark/[0.06] text-lmk-dark cursor-pointer text-lg transition-colors hover:bg-lmk-dark/10 active:bg-lmk-dark/[0.12]"
    >
      ←
    </button>
  );
}
