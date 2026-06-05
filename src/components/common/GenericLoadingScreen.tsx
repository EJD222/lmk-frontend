import { useEffect, useState } from "react";
import { Wordmark } from "@/components/common/Wordmark";
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
    <div className="min-h-screen bg-lmk-dark flex flex-col items-center justify-center text-center px-6">
      <Wordmark className="text-lmk-light mb-16" />
      <LoadingDots className="mb-10" />
      <p
        className="text-[17px] text-lmk-light/60 font-medium transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {messages[msgIndex]}
      </p>
    </div>
  );
}
