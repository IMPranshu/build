import './Main.css';
import { ReactNode, useState, useRef } from 'react';
import AltNavBar from './components/AltNavBar';
import AppContext from './Context';
import useAuth from '../auth/useAuth';
import type { GeneratedIdea } from '../entities';

export default function App({ children }: { children: ReactNode }) {
  const [editedIdea, setEditedIdea] = useState('');
  const [ideaObject, setIdeaObject] = useState<GeneratedIdea | null>(null);
  const popoverButtonRef = useRef<HTMLButtonElement>(null);

  const { data: user } = useAuth();

  return (
    <div className='min-h-screen bg-neutral-300/70 text-center'>
      <AppContext.Provider value={{ popoverButtonRef, editedIdea, setEditedIdea, ideaObject, setIdeaObject }}>
        {!!user && <AltNavBar />}
        {children}
      </AppContext.Provider>
    </div>
  );
}
