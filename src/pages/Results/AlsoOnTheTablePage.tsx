import { useNavigate } from "react-router-dom";
import { SHARE_RESULTS_ROUTE } from "@/common/routes";
import { TypographyH2 } from "@/components/ui/Typography";
import { TapToContinue } from "@/components/common/TapToContinue";

interface RunnerUpItem {
  name: string;
  desc: string;
  count: string;
  accentClass: string;
}

const runners: RunnerUpItem[] = [
  {
    name: "Farmers Market",
    desc: "outdoor option, free entry, Saturday AM",
    count: "4/6",
    accentClass: "bg-lmk-primary",
  },
  {
    name: "Brunch Spot",
    desc: "accommodates dietary needs, indoor",
    count: "4/6",
    accentClass: "bg-lmk-tertiary",
  },
  {
    name: "Morning Hike",
    desc: "free, but 1 person needs a ride",
    count: "3/6",
    accentClass: "bg-lmk-accent",
  },
];

export function AlsoOnTheTablePage() {
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
              <div className={`w-1 rounded-sm flex-shrink-0 ${runner.accentClass}`} />
              <div className="flex-1">
                <p className="font-brand font-semibold text-[16px]">{runner.name}</p>
                <p className="font-brand text-[13px] text-lmk-dark/50 mt-1">{runner.desc}</p>
              </div>
              <p className="font-brand font-bold text-[14px] text-lmk-tertiary whitespace-nowrap self-center">
                {runner.count}
              </p>
            </div>
          ))}
        </div>
      </div>

      <TapToContinue className="opacity-50" />
    </div>
  );
}
