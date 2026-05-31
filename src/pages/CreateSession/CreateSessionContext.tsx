import React, { createContext, useContext, useState } from 'react';
import { sessionService } from '@/services/sessionService';
import { notifyError } from '@/lib/notify';

export type CreateSessionStep = 'host-topic' | 'context';

export interface CreateSessionFormData {
  hostName: string;
  topic: string;
  context: string;
}

interface CreateSessionContextValue {
  step: CreateSessionStep;
  isLoading: boolean;
  formData: CreateSessionFormData;
  setHostName: (v: string) => void;
  setTopic: (v: string) => void;
  setContext: (v: string) => void;
  goToNext: () => void;
  goToPrev: () => void;
  handleSubmit: () => void;
}

const CreateSessionContext = createContext<CreateSessionContextValue | null>(null);

interface CreateSessionProviderProps {
  children: React.ReactNode;
}

export function CreateSessionProvider({ children }: CreateSessionProviderProps) {
  const [step, setStep] = useState<CreateSessionStep>('host-topic');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<CreateSessionFormData>({
    hostName: '',
    topic: '',
    context: '',
  });

  const setHostName = (v: string) => setFormData(prev => ({ ...prev, hostName: v }));
  const setTopic = (v: string) => setFormData(prev => ({ ...prev, topic: v }));
  const setContext = (v: string) => setFormData(prev => ({ ...prev, context: v }));

  const goToNext = () => {
    if (step === 'host-topic') setStep('context');
  };

  const goToPrev = () => {
    if (step === 'context') setStep('host-topic');
  };

  const handleSubmit = () => {
    setIsLoading(true);
    sessionService.createSession({
      topic: formData.topic,
      host_display_name: formData.hostName,
      context: formData.context || undefined,
    }).then(response => {
      setIsLoading(false);
      // TODO: navigate to session created / share-link page (FE-5)
    }).catch(() => {
      setIsLoading(false);
      notifyError('Failed to create session. Please try again.');
    });
  };

  return (
    <CreateSessionContext.Provider
      value={{ step, isLoading, formData, setHostName, setTopic, setContext, goToNext, goToPrev, handleSubmit }}
    >
      {children}
    </CreateSessionContext.Provider>
  );
}

export function useCreateSession(): CreateSessionContextValue {
  const ctx = useContext(CreateSessionContext);
  if (!ctx) throw new Error('useCreateSession must be used within CreateSessionProvider');
  return ctx;
}
