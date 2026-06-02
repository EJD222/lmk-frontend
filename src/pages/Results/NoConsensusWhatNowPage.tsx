import { useNavigate } from "react-router-dom";
import { RESULTS_ROUTE } from "@/common/routes";

const suggestions = [
  { icon: "💬", text: "Talk it out and try again" },
  { icon: "🎯", text: "Start a new session with narrower options" },
  { icon: "✌️", text: "Split into two groups (it's okay)" },
];

export function NoConsensusWhatNowPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-lmk-secondary text-white">
      <div className="flex-1 flex items-center justify-center">
        <div className="px-8 w-full max-w-[600px] mx-auto">
          <h2 className="font-brand font-bold text-[32px] leading-[1.2] tracking-[-0.02em] text-white mb-6">
            what now?
          </h2>
          <div className="flex flex-col gap-4 mb-8">
            {suggestions.map(({ icon, text }) => (
              <div key={text} className="flex gap-3 items-start">
                <span className="text-[20px]">{icon}</span>
                <p className="font-brand text-[16px] leading-relaxed text-white/85">{text}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate(RESULTS_ROUTE)}
            className="w-full h-12 rounded-sm bg-white text-lmk-secondary font-brand font-semibold text-[16px]"
          >
            Start new session
          </button>
        </div>
      </div>
    </div>
  );
}
