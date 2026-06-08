import { useRef, useState } from "react";
import { X } from "lucide-react";
import html2canvas from "html2canvas";
import { cn } from "@/lib/utils";
import { LMK_COLORS } from "@/lib/colors";
import { useResult } from "./ResultContext";

interface SaveAsImageModalProps {
  onClose: () => void;
}

export function SaveAsImageModal({ onClose }: SaveAsImageModalProps) {
  const { topResult, restResults, meta, isAgreement } = useResult();
  const [saving, setSaving] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // The card's whole premise is announcing a pick — without a real
  // `topResult` there's nothing honest to render or save, so bail rather
  // than ever fall back to placeholder/mock data.
  if (!topResult) return null;

  const otherPicks = restResults.slice(0, 4);
  const displayTopic = meta?.topic || "the plans";
  const participantCount = meta?.participant_count;

  async function handleSave() {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      // The card now wears `.paper-card` directly (grain + multiply blend,
      // scoped to the element rather than `fixed` to the viewport like
      // `surface-paper`) — so what html2canvas captures *is* what's on
      // screen, texture included, no separate reconstruction needed.
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: LMK_COLORS.paper,
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = "lmk-result.png";
      link.href = canvas.toDataURL("image/png");
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
        className="surface-paper relative border-2 border-lmk-ink rounded-sketch shadow-sketch w-[354px] flex flex-col gap-2.5 p-4 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 -rotate-[1.5deg] w-16 h-[18px] bg-lmk-blue/10 border border-lmk-blue/20 rounded-sm pointer-events-none" />

        <div className="flex items-center justify-between">
          <span className="font-display text-[19px] font-bold text-lmk-ink leading-tight max-w-[260px]">
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

        <div ref={cardRef} className="paper-card px-5 pt-5 pb-4 flex flex-col gap-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-wordmark text-[26px] text-lmk-wordmark leading-none">lmk</span>
            <span className="font-body text-[11px] text-lmk-ink/35 uppercase tracking-[0.12em] font-semibold">
              the verdict
            </span>
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
            <span className="font-body text-[10px] text-white/60 uppercase tracking-[0.10em] font-semibold">
              {isAgreement ? "★ the chosen one" : "if you had to pick one"}
            </span>
            <p className="font-display text-[28px] text-white leading-tight">
              {topResult.value.name}
            </p>
          </div>

          {otherPicks.length > 0 && (
            <div className="flex flex-col">
              <p className="font-display text-[12px] text-lmk-ink/45 italic mb-1.5">
                also worth a look
              </p>
              {otherPicks.map((rec, i) => (
                <div
                  key={rec.id}
                  className={cn(
                    "flex items-center justify-between py-2",
                    i > 0 && "border-t border-lmk-ink/10"
                  )}
                >
                  <span className="font-body text-[14px] text-lmk-ink">{rec.value.name}</span>
                  <span className="font-display text-[15px] text-lmk-blue">
                    #{rec.value.ranking}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* footer */}
          <p className="font-body text-[10px] text-lmk-ink/30 mt-1">decided with lmk</p>
        </div>

        <div
          className="h-px my-0.5"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(17,17,17,0.20) 0, rgba(17,17,17,0.20) 4px, transparent 4px, transparent 9px)",
          }}
        />

        {/* cta */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full h-11 flex items-center justify-center gap-1.5 bg-lmk-blue text-white border-2 border-lmk-ink rounded-sketch font-display text-[22px] font-bold whitespace-nowrap shadow-sketch-blue transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[5px_7px_0_rgba(21,41,214,0.32)] active:translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed mt-0.5 px-2"
        >
          {saving ? "just a sec..." : "⬇ save it, post it, whatever"}
        </button>
      </div>
    </div>
  );
}
