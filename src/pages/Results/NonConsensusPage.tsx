import { BY_THE_NUMBERS_RESULT_ROUTE, NON_CONSENSUS_RESULT_ROUTE } from "@/common/routes";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";

const NonConsensusPage = () => {
  const navigate = useNavigate();

  const handleOnTapContinue = () => {
    navigate(BY_THE_NUMBERS_RESULT_ROUTE);
  };

  return (
    <div onClick={handleOnTapContinue} className="flex flex-col min-h-screen bg-lmk-primary">
      <div className="flex items-center justify-center flex-1">
        <div className="px-6 mb-6 w-full max-w-[600px] mx-auto flex flex-col justify-center items-center">
          <TypographyP className="!mt-0 opacity-[0.70] text-[22px] text-white">
            except for one thing ...
          </TypographyP>
          <TypographyH1 className="text-[96px] lg:text-[96px] leading-none my-2 text-white">
            5 vs 1
          </TypographyH1>
          <TypographyP className="!mt-0 text-bold text-[16px] text-white">
            5 of you want indoor. 1 lone wolf wants outdoor.
          </TypographyP>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center gap-2 my-6">
              <div className="flex flex-wrap justify-center gap-1 max-w-[80px]">
                <div className="w-5 h-5 bg-white rounded-full"></div>
                <div className="w-5 h-5 bg-white rounded-full"></div>
                <div className="w-5 h-5 bg-white rounded-full"></div>
                <div className="w-5 h-5 bg-white rounded-full"></div>
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>

              <div className="w-8 h-[2px] bg-white/30 mx-2"></div>

              <div className="w-5 h-5 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>

        <div className="absolute text-xs text-white -translate-x-1/2 opacity-50 bottom-8 left-1/2 animate-bounce">
          tap to continue ↑
        </div>
      </div>
    </div>
  );
};

export default NonConsensusPage;
