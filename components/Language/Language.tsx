import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Language = "en" | "ru";
export type ContextType = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
} | null;

export const LanguageContext = createContext<ContextType>(null);

export function Language({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
