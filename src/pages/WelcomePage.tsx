import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/Button";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";

const heroCircles = [
    { size: 28, color: "bg-lmk-primary",   delay: "0s"   },
    { size: 20, color: "bg-lmk-secondary", delay: "0.3s" },
    { size: 32, color: "bg-lmk-tertiary",  delay: "0.6s" },
    { size: 18, color: "bg-lmk-accent",    delay: "0.9s" },
    { size: 14, color: "bg-lmk-primary",   delay: "1.2s", opacity: 0.5 },
];

export function WelcomePage() {
    return (
        <AppLayout>
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <TypographyH1 className="text-7xl tracking-[-0.04em] text-lmk-dark mb-4">lmk</TypographyH1>

                <TypographyP className="text-[22px] font-semibold leading-snug tracking-[-0.01em] mb-8">
                    <span className="font-light opacity-60">from</span> let me know,{" "}
                    <span className="font-light opacity-60">to</span>{" "}
                    <span className="font-extrabold text-lmk-primary">let's go</span>
                </TypographyP>

                <TypographyP className="[&:not(:first-child)]:mt-0 text-lmk-dark/60 max-w-[320px]">
                    Stop the endless "what do you wanna do?" chat. Start a session, share the link, and let your group figure it out — without the 45-minute thread.
                </TypographyP>

                <div className="flex items-center justify-center gap-2.5 my-12">
                    {heroCircles.map((c, i) => (
                        <div
                            key={i}
                            className={`hero-circle ${c.color}`}
                            style={{ width: c.size, height: c.size, animationDelay: c.delay, opacity: c.opacity ?? 1 }}
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <Button size="lg" className="w-full h-12 text-base">Start a session</Button>
                    <Button size="lg" variant="outline" className="w-full h-12 text-base border-lmk-primary text-lmk-primary hover:bg-lmk-primary/10">Join a session</Button>
                </div>
            </div>
        </AppLayout>
    );
}
