import { createContext, useEffect, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useAnyContext } from "../hooks/useAnyContext";

type Language = "portuguese" | "english";

interface ILanguageContextData {
    language: Language;
    toggleLanguage: () => void;
}

interface ILanguageProviderProps {
    children: ReactNode;
}

const LanguageContext = createContext<ILanguageContextData | null>(null);

export function LanguageProvider({ children }: ILanguageProviderProps) {
    const [language, setLanguage] = useLocalStorage({ key: "language", value: "portuguese" });

    useEffect(() => {
        const root = document.documentElement;
        if (language === "portuguese") {
            root.classList.add("portuguese");
        } else {
            root.classList.remove("portuguese");
        }
    }, [language])

    function toggleLanguage() {
        setLanguage((current) => (current === "portuguese" ? "english" : "portuguese"));
    }

    return (
        <LanguageContext.Provider value={{ language: language as Language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useAnyContext(LanguageContext);
}