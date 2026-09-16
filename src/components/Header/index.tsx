import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../context/themeContext";
import { Moon, Sun, Menu, X } from "lucide-react";

const URL_IMG = "/Logo.png"

const NAV_LINKS = [
    { path: "/", label: "Home" },
    { path: "/portifolio", label: "Portifolio" },
    { path: "/sobre", label: "Quem Sou Eu" },
    { path: "/contato", label: "Contato" },
]

export const Header = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const goTo = (path: string) => {
        navigate(path);
        setMenuOpen(false);
    }

    return (
        <header className="w-full bg-zinc-950 border-b border-zinc-800 mb-4 sm:mb-6 md:mb-8">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 sm:px-8 sm:py-4 min-h-[64px] sm:min-h-[72px] md:min-h-[80px]">
                <img
                    src={URL_IMG}
                    alt="Logo"
                    className="h-20 w-auto cursor-pointer"
                    onClick={() => goTo('/')}
                />

                <ul className="hidden md:flex items-center gap-6 list-none">
                    {NAV_LINKS.map((link) => (
                        <li key={link.path}>
                            <button
                                className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer"
                                onClick={() => goTo(link.path)}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button
                        className="flex items-center justify-center gap-2 font-mono text-sm text-zinc-300 hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer w-[90px]"
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? <Moon className="w-4 h-4 shrink-0" /> : <Sun className="w-4 h-4 shrink-0" />}
                        {theme === "light" ? "Escuro" : "Claro"}
                    </button>

                    <button
                        className="md:hidden text-zinc-300 hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Abrir menu"
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4">
                    <ul className="flex flex-col gap-4 list-none">
                        {NAV_LINKS.map((link) => (
                            <li key={link.path}>
                                <button
                                    className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer"
                                    onClick={() => goTo(link.path)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}