import { useEffect, useMemo, useState } from "react";
import {
  Bike,
  Camera,
  Coffee,
  Compass,
  Gamepad2,
  IceCream,
  Mountain,
  Music2,
  Palette,
  Pizza,
  Tent,
  Wine,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: LucideIcon[] = [
  Mountain,
  Tent,
  Bike,
  Compass,
  Pizza,
  Coffee,
  IceCream,
  Wine,
  Camera,
  Music2,
  Gamepad2,
  Palette,
];

const COLORS = ["text-lmk-blue", "text-lmk-blue-mid", "text-lmk-ink/40"];

const ICON_SIZE = 52;
const ROTATION_RANGE = 26;
const POSITION_JITTER = 3;

interface IconSlot {
  top: number;
  left: number;
  showOnMobile: boolean;
}

// A loose ring around the central content column — even spacing with corners
// and mid-edges covered, leaving the card's footprint clear (jitter is layered
// on top at render time so the grid doesn't look mechanical).
const SLOTS: IconSlot[] = [
  { top: 6, left: 10, showOnMobile: true },
  { top: 9, left: 38, showOnMobile: false },
  { top: 8, left: 64, showOnMobile: false },
  { top: 5, left: 90, showOnMobile: true },
  { top: 38, left: 6, showOnMobile: true },
  { top: 42, left: 92, showOnMobile: false },
  { top: 64, left: 5, showOnMobile: false },
  { top: 60, left: 93, showOnMobile: true },
  { top: 90, left: 12, showOnMobile: true },
  { top: 86, left: 40, showOnMobile: false },
  { top: 88, left: 66, showOnMobile: false },
  { top: 92, left: 88, showOnMobile: true },
];

interface SafeZone {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

/** Approximates the centered content card (the "clipping zone") in pixels. */
function getSafeZone(viewportWidth: number, viewportHeight: number): SafeZone {
  const width = Math.min(420, viewportWidth * 0.72);
  const height = Math.min(480, viewportHeight * 0.62);
  return {
    left: (viewportWidth - width) / 2,
    right: (viewportWidth + width) / 2,
    top: (viewportHeight - height) / 2,
    bottom: (viewportHeight + height) / 2,
  };
}

/**
 * Crops an icon at the safe zone's boundary so it reads as "tucked behind the
 * card" rather than floating on top of the text. `inset()` can only carve a
 * single rectangle out of one side, so a clean crop is only possible when the
 * icon crosses exactly one edge of the zone — a corner overlap or a fully
 * enclosed icon gets hidden instead, since either would need a polygon clip.
 */
function getClipPath(iconTop: number, iconLeft: number, safeZone: SafeZone): string | undefined {
  const iconBottom = iconTop + ICON_SIZE;
  const iconRight = iconLeft + ICON_SIZE;

  const overlaps =
    iconRight > safeZone.left &&
    iconLeft < safeZone.right &&
    iconBottom > safeZone.top &&
    iconTop < safeZone.bottom;
  if (!overlaps) return undefined;

  const crossesTop = iconTop < safeZone.top && iconBottom > safeZone.top;
  const crossesBottom = iconBottom > safeZone.bottom && iconTop < safeZone.bottom;
  const crossesLeft = iconLeft < safeZone.left && iconRight > safeZone.left;
  const crossesRight = iconRight > safeZone.right && iconLeft < safeZone.right;
  const edgesCrossed = [crossesTop, crossesBottom, crossesLeft, crossesRight].filter(
    Boolean
  ).length;

  if (edgesCrossed !== 1) return "inset(100%)";
  if (crossesTop) return `inset(0 0 ${iconBottom - safeZone.top}px 0)`;
  if (crossesBottom) return `inset(${safeZone.bottom - iconTop}px 0 0 0)`;
  if (crossesLeft) return `inset(0 ${iconRight - safeZone.left}px 0 0)`;
  return `inset(0 0 0 ${safeZone.right - iconLeft}px)`;
}

function useViewportSize() {
  const [size, setSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export function ScatteredIcons() {
  const { width, height } = useViewportSize();
  const safeZone = useMemo(() => getSafeZone(width, height), [width, height]);

  const icons = useMemo(
    () =>
      SLOTS.map((slot) => ({
        ...slot,
        Icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.round((Math.random() * 2 - 1) * ROTATION_RANGE),
        jitterTop: (Math.random() * 2 - 1) * POSITION_JITTER,
        jitterLeft: (Math.random() * 2 - 1) * POSITION_JITTER,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {icons.map(
        ({ Icon, color, rotation, jitterTop, jitterLeft, top, left, showOnMobile }, index) => {
          const topPercent = top + jitterTop;
          const leftPercent = left + jitterLeft;
          const clipPath = getClipPath(
            (topPercent / 100) * height,
            (leftPercent / 100) * width,
            safeZone
          );

          return (
            <Icon
              key={index}
              aria-hidden="true"
              strokeWidth={1.5}
              className={cn("absolute opacity-60", color, !showOnMobile && "hidden sm:block")}
              style={{
                top: `${topPercent}%`,
                left: `${leftPercent}%`,
                width: ICON_SIZE,
                height: ICON_SIZE,
                transform: `rotate(${rotation}deg)`,
                clipPath,
              }}
            />
          );
        }
      )}
    </div>
  );
}
