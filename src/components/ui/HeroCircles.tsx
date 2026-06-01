// components/HeroCircles.tsx

const heroCircles = [
  { size: 28, color: "bg-lmk-primary", delay: "0s" },
  { size: 20, color: "bg-lmk-secondary", delay: "0.3s" },
  { size: 32, color: "bg-lmk-tertiary", delay: "0.6s" },
  { size: 18, color: "bg-lmk-accent", delay: "0.9s" },
  { size: 14, color: "bg-lmk-primary", delay: "1.2s", opacity: 0.5 },
];

export function HeroCircles() {
  return (
    <div className="flex items-center justify-center gap-2.5 my-12">
      {heroCircles.map((c, i) => (
        <div
          key={i}
          className={`hero-circle ${c.color}`}
          style={{
            width: c.size,
            height: c.size,
            animationDelay: c.delay,
            opacity: c.opacity ?? 1,
          }}
        />
      ))}
    </div>
  );
}
