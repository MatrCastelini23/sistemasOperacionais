import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type Theme = "light" | "dark";

interface ThemeContextData {
    theme: Theme;
    toggleTheme: () => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextData | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useLocalStorage({ key: "theme", value: "light" });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    function toggleTheme() {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme: theme as Theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme precisa estar dentro de um ThemeProvider");
    }

    return context;
}