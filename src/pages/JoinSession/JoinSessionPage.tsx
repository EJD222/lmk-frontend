import { useNavigate, useParams } from 'react-router-dom';
import { JoinSessionProvider } from './JoinSessionContext';
import { ParticipantForm } from './ParcticipantForm';

function JoinSessionContent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center gap-3 px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-lmk-dark/[0.06] text-lmk-dark cursor-pointer text-lg transition-colors hover:bg-lmk-dark/10 active:bg-lmk-dark/[0.12]"
        >
          ←
        </button>
        <span className="font-brand font-extrabold text-xl tracking-[-0.04em]">lmk</span>
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
    <JoinSessionProvider initialLinkId={linkId ?? ''}>
      <JoinSessionContent />
    </JoinSessionProvider>
  );
}
