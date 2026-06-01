import { NON_CONSENSUS_RESULT_ROUTE } from "@/common/routes";
import { TypographyH1, TypographyH3, TypographyP } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import React from "react";
import { useNavigate } from "react-router-dom";

const ConsensusPage = () => {
  const navigate = useNavigate();

  const handleOnTapContinue = () => {
    navigate(NON_CONSENSUS_RESULT_ROUTE);
  };

  return (
    <div onClick={handleOnTapContinue} className="flex flex-col min-h-screen bg-cyan-500">
      <div className="flex items-center justify-center flex-1">
        <div className="px-6 mb-6 w-full max-w-[600px] mx-auto flex flex-col justify-center items-center">
          <TypographyP className="!mt-0 opacity-[0.70] text-[22px]">
            you all agree on one thing
          </TypographyP>
          <TypographyH1 className="text-[96px] lg:text-[96px] leading-none my-2">6/6</TypographyH1>
          <TypographyP className="!mt-0 text-bold text-[22px]">
            Saturday morning works for everyone
          </TypographyP>
        </div>
      </div>

      <div className="absolute text-xs -translate-x-1/2 opacity-50 bottom-8 left-1/2 animate-bounce">
        tap to continue ↑
      </div>
    </div>
  );
};

export default ConsensusPage;
