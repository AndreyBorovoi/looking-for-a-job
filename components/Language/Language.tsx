import { ReactNode, createContext, useState } from 'react';

type Language = 'en' | 'ru';
export type ContextType = {
  language: Language;
  changeLanguage: (value: string) => void;
} | null;

export const LanguageContext = createContext<ContextType>(null);

export function Language({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const changeLanguage = (value: string) => {
    switch (value) {
      case 'en':
        setLanguage('en');
        break;

      case 'ru':
        setLanguage('ru');
        break;

      default:
        break;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
