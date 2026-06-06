import { useNavigate, useParams } from "react-router-dom";
import { JoinSessionProvider } from "./JoinSessionContext";
import { ParticipantForm } from "./ParticipantForm";
import { NavHeader } from "@/components/common/NavHeader";

function JoinSessionContent() {
  const navigate = useNavigate();

  return (
    <div className="surface-paper min-h-screen flex flex-col">
      <NavHeader onBack={() => navigate(-1)} />

      <div className="flex flex-col flex-1 px-6 pb-8 pt-2 w-full max-w-[600px] mx-auto">
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
