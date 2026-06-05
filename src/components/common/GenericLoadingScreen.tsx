import { useEffect, useState } from "react";
import { LoadingDots } from "@/components/common/LoadingDots";

interface GenericLoadingScreenProps {
  messages: string[];
}

export function GenericLoadingScreen({ messages }: GenericLoadingScreenProps) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setMsgIndex((prev) => (prev + 1) % messages.length);
        setFading(false);
      }, 350);
    }, 2400);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="surface-dark min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="font-display text-[44px] leading-none text-lmk-blue-mid mb-14 -rotate-2">
        lmk
      </span>

      <LoadingDots className="mb-10" />

      <p
        className="text-[19px] italic text-lmk-paper/70 font-light transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {messages[msgIndex]}
      </p>
    </div>
  );
}
