import React from "react";
import { useNavigate } from "react-router-dom";
import { ALSO_ON_TABLE_RESULT_ROUTE } from "@/common/routes";

const AIRecommendationPage = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(ALSO_ON_TABLE_RESULT_ROUTE)}
      className="flex flex-col min-h-screen bg-lmk-secondary text-white cursor-pointer"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="px-8 w-full max-w-[600px] mx-auto text-center">
          <p className="font-brand font-semibold text-[11px] tracking-[0.08em] uppercase opacity-70 mb-6">
            AI recommendation
          </p>
          <h1 className="font-brand font-extrabold text-[44px] leading-[1.1] tracking-[-0.03em] mb-6">
            Board Game Café
          </h1>
          <p className="font-brand text-[16px] leading-relaxed opacity-85">
            Indoor (5/6 want it), low-energy (avg 36/100), $15–$25 fits all budgets, Saturday morning works for everyone.
          </p>
        </div>
      </div>
      <div className="absolute text-xs text-white -translate-x-1/2 opacity-40 bottom-8 left-1/2 animate-bounce">
        tap to continue ↑
      </div>
    </div>
  );
};

export default AIRecommendationPage;
