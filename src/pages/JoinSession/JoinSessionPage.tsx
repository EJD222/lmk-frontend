import { useNavigate, useParams } from "react-router-dom";
import { JoinSessionProvider } from "./JoinSessionContext";
import { ParticipantForm } from "./ParticipantForm";
import { Wordmark } from "@/components/common/Wordmark";
import { BackButton } from "@/components/common/BackButton";

function JoinSessionContent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center gap-3 px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
        <BackButton onClick={() => navigate(-1)} />
        <Wordmark />
      </header>

      <div className="flex flex-col flex-1 px-6 pb-8 w-full max-w-[600px] mx-auto">
        <ParticipantForm />
      </div>
    </div>
  );
}

export function JoinSessionPage() {
  const { linkId } = useParams<{ linkId: string }>();

  return (
    <JoinSessionProvider initialLinkId={linkId ?? ""}>
      <JoinSessionContent />
    </JoinSessionProvider>
  );
}
