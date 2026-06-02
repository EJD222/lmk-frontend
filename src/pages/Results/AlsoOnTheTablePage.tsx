import React from "react";
import { useNavigate } from "react-router-dom";
import { SHARE_RESULTS_ROUTE } from "@/common/routes";
import { TypographyH2 } from "@/components/ui/Typography";

interface RunnerUpItem {
  name: string;
  desc: string;
  count: string;
  accentColor: string;
}

const runners: RunnerUpItem[] = [
  {
    name: "Farmers Market",
    desc: "outdoor option, free entry, Saturday AM",
    count: "4/6",
    accentColor: "#FF6B35",
  },
  {
    name: "Brunch Spot",
    desc: "accommodates dietary needs, indoor",
    count: "4/6",
    accentColor: "#00D4AA",
  },
  {
    name: "Morning Hike",
    desc: "free, but 1 person needs a ride",
    count: "3/6",
    accentColor: "#FFE14D",
  },
];

const AlsoOnTheTablePage = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(SHARE_RESULTS_ROUTE)}
      className="flex flex-col min-h-screen cursor-pointer"
    >
      <div className="flex flex-col w-full max-w-xl gap-4 mt-20 mx-auto">
        <TypographyH2 className="mb-2 leading-none">also on the table</TypographyH2>

        <div className="flex flex-col gap-3">
          {runners.map((runner) => (
            <div
              key={runner.name}
              className="flex gap-3 p-4 bg-white rounded-xl border border-black/[0.06] items-stretch"
            >
              <div
                className="w-1 rounded-sm flex-shrink-0"
                style={{ background: runner.accentColor }}
              />
              <div className="flex-1">
                <p className="font-brand font-semibold text-[16px]">{runner.name}</p>
                <p className="font-brand text-[13px] text-[#888888] mt-1">{runner.desc}</p>
              </div>
              <p className="font-brand font-bold text-[14px] text-lmk-tertiary whitespace-nowrap self-center">
                {runner.count}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute text-xs -translate-x-1/2 opacity-50 bottom-8 left-1/2 animate-bounce">
        tap to continue ↑
      </div>
    </div>
  );
};

export default AlsoOnTheTablePage;