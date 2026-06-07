import { useRef, useState } from "react";
import { X } from "lucide-react";
import html2canvas from "html2canvas";
import { cn } from "@/lib/utils";
import { useResult } from "./ResultContext";

type Shape = "rectangle" | "square";

const MOCK_TOP = { id: "m1", value: { name: "Board Game Café", ranking: 1, reasoning: "Most of the group prefers indoor; fits the $$ budget range well." } };
const MOCK_REST = [
  { id: "m2", value: { name: "Farmers Market", ranking: 2, reasoning: "" } },
  { id: "m3", value: { name: "Brunch Spot", ranking: 3, reasoning: "" } },
  { id: "m4", value: { name: "Morning Hike", ranking: 4, reasoning: "" } },
  { id: "m5", value: { name: "Night Market", ranking: 5, reasoning: "" } },
];

interface SaveAsImageModalProps {
  onClose: () => void;
}

export function SaveAsImageModal({ onClose }: SaveAsImageModalProps) {
  const { topResult, restResults, meta } = useResult();
  const [shape, setShape] = useState<Shape>("rectangle");
  const [saving, setSaving] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const topPick = topResult ?? MOCK_TOP;
  const otherPicks = (restResults.length > 0 ? restResults : MOCK_REST).slice(0, 4);
  const displayTopic = meta?.topic || "the plans";
  const participantCount = meta?.participant_count;

  async function handleSave() {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#F5F0E8",
        scale: 2,
        useCORS: true,
        logging: false,
      });

      let finalCanvas = canvas;
      if (shape === "square") {
        const size = Math.min(canvas.width, canvas.height);
        const sq = document.createElement("canvas");
        sq.width = sq.height = size;
        const ctx = sq.getContext("2d");
        if (ctx) {
          ctx.drawImage(canvas, (canvas.width - size) / 2, (canvas.height - size) / 2, size, size, 0, 0, size, size);
        }
        finalCanvas = sq;
      }

      const link = document.createElement("a");
      link.download = "lmk-result.png";
      link.href = finalCanvas.toDataURL("image/png");
      link.click();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="fixed inset-0 bg-lmk-ink/40 z-50 flex items-center justify-center p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-lmk-paper border-2 border-lmk-ink rounded-sketch shadow-sketch w-[354px] flex flex-col gap-2.5 p-4 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 -rotate-[1.5deg] w-16 h-[18px] bg-lmk-blue/10 border border-lmk-blue/20 rounded-sm pointer-events-none" />

        <div className="flex items-center justify-between">
          <span className="font-display text-[22px] font-bold text-lmk-ink leading-none">
            make this a screenshot-worthy moment
          </span>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center border-2 border-lmk-ink rounded-sketch-pill shadow-sketch-sm text-lmk-ink hover:bg-lmk-ink/5 transition-colors"
          >
            <X className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>

        <p className="font-display text-[12px] text-lmk-ink/55 -mb-1">preview</p>

        <div
          ref={cardRef}
          className="bg-lmk-paper px-5 pt-5 pb-4 flex flex-col gap-4 rounded-lg"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-[32px] text-lmk-blue leading-none">lmk</span>
            <span className="font-body text-[11px] text-lmk-ink/35 uppercase tracking-[0.12em] font-semibold">the verdict</span>
          </div>

          <div className="-mt-1">
            <p className="font-display text-[22px] text-lmk-ink leading-tight">{displayTopic}</p>
            {participantCount != null && (
              <p className="font-body text-[12px] text-lmk-ink/45 mt-0.5">
                {participantCount} {participantCount === 1 ? "person" : "people"} made this call
              </p>
            )}
          </div>

          <div className="bg-lmk-blue rounded-xl px-4 py-3 flex flex-col gap-2">
            <span className="font-body text-[10px] text-white/60 uppercase tracking-[0.10em] font-semibold">★ the chosen one</span>
            <p className="font-display text-[28px] text-white leading-tight">{topPick.value.name}</p>
          </div>

          {otherPicks.length > 0 && (
            <div className="flex flex-col">
              <p className="font-display text-[12px] text-lmk-ink/45 italic mb-1.5">also worth a look</p>
              {otherPicks.map((rec, i) => (
                <div
                  key={rec.id}
                  className={cn(
                    "flex items-center justify-between py-2",
                    i > 0 && "border-t border-lmk-ink/10",
                  )}
                >
                  <span className="font-body text-[14px] text-lmk-ink">{rec.value.name}</span>
                  <span className="font-display text-[15px] text-lmk-blue">#{rec.value.ranking}</span>
                </div>
              ))}
            </div>
          )}

          {/* footer */}
          <div className="flex items-center justify-between mt-1">
            <span className="font-body text-[10px] text-lmk-ink/30">decided with lmk</span>
            <span className="font-display text-[15px] text-lmk-blue">lmk.app</span>
          </div>
        </div>

        <div
          className="h-px my-0.5"
          style={{ background: "repeating-linear-gradient(90deg, rgba(17,17,17,0.20) 0, rgba(17,17,17,0.20) 4px, transparent 4px, transparent 9px)" }}
        />

        {/* shape */}
        <div>
          <p className="font-display text-[12px] text-lmk-ink/55 mb-1">shape</p>
          <div className="flex gap-1.5">
            {(["rectangle", "square"] as Shape[]).map((s) => (
              <button
                key={s}
                onClick={() => setShape(s)}
                className={cn(
                  "flex-1 py-[5px] border-2 border-lmk-ink rounded-sketch-pill font-body text-[12px] font-medium shadow-sketch-sm transition-colors",
                  shape === s ? "bg-lmk-ink text-lmk-paper" : "bg-lmk-paper-warm text-lmk-ink hover:bg-lmk-ink/10",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* cta */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full h-11 flex items-center justify-center gap-1.5 bg-lmk-blue text-white border-2 border-lmk-ink rounded-sketch font-display text-[18px] font-bold shadow-sketch-blue transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[5px_7px_0_rgba(21,41,214,0.32)] active:translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed mt-0.5"
        >
          {saving ? "just a sec..." : "⬇ save it, post it, whatever"}
        </button>
      </div>
    </div>
  );
}

