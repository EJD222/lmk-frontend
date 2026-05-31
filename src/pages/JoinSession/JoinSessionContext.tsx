import React, { createContext, useContext, useState } from 'react';
import { participantService } from '@/services/participantService';
import { notifyError } from '@/lib/notify';

interface JoinSessionContextValue {
  linkId: string;
  displayName: string;
  setLinkId: (v: string) => void;
  setDisplayName: (v: string) => void;
  handleJoin: () => void;
}

const JoinSessionContext = createContext<JoinSessionContextValue | null>(null);

interface JoinSessionProviderProps {
  children: React.ReactNode;
  initialLinkId?: string;
}

export function JoinSessionProvider({ children, initialLinkId = '' }: JoinSessionProviderProps) {
  const [linkId, setLinkId] = useState(initialLinkId);
  const [displayName, setDisplayName] = useState('');

  const handleJoin = () => {
    participantService.joinSession(linkId, { display_name: displayName })
      .then(response => {
        // TODO: move to loading then session page. To be implemented in FE-5 ticket
        console.log('Joined session with participant ID:', response.participant_id);
      })
      .catch(() => {
        notifyError('Failed to join session. Please check the link and try again.');
      });
  };

  return (
    <JoinSessionContext.Provider value={{ linkId, displayName, setLinkId, setDisplayName, handleJoin }}>
      {children}
    </JoinSessionContext.Provider>
  );
}

export function useJoinSession(): JoinSessionContextValue {
  const ctx = useContext(JoinSessionContext);
  if (!ctx) throw new Error('useJoinSession must be used within JoinSessionProvider');
  return ctx;
}
