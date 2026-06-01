import ResultCard from "@/components/common/ResultCard";
import { Card } from "@/components/ui/Card";
import { TypographyH2 } from "@/components/ui/Typography";
import React from "react";

const mockMetrics = [
  {
    label: "BUDGET RANGE",
    value: "$20 – $50",
    progress: 50,
  },
  {
    label: "ENERGY LEVEL",
    value: "chill 😴",
    progress: 36,
  },
  {
    label: "ALIGNMENT",
    value: "high",
    progress: 80,
  },
];

const ByTheNumbersPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col w-full max-w-xl gap-4 mt-20">
        <TypographyH2 className="mb-2 leading-none">by the numbers</TypographyH2>

        <div className="flex flex-col gap-4">
          {mockMetrics.map((item) => (
            <ResultCard
              key={item.label}
              label={item.label}
              value={item.value}
              progress={item.progress}
            />
          ))}
        </div>
      </div>

      <div className="absolute text-xs -translate-x-1/2 opacity-50 bottom-8 left-1/2 animate-bounce">
        tap to continue ↑
      </div>
    </div>
  );
};
export default ByTheNumbersPage;
