import React, { createContext, useContext, useState } from 'react';

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
    // TODO: implement join session — call participantService.joinSession
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
