import { GitCommitVertical, Link, Mail, Phone } from "lucide-react";
import { NAME, PHONE, EMAIL, GITHUB_URL } from "../../data/dataSocial";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="w-full bg-zinc-950 border-t border-zinc-800 mt-auto">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="font-mono text-xs text-zinc-500">Developed by</p>
                    <p className="text-zinc-100 text-lg font-semibold">{NAME}</p>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
                    <a
                        onClick={() => { navigate("/sobre") }}
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
                    >
                        <Link className="w-4 h-4" />
                        Sobre
                    </a>
                    <a
                        href={`tel:${PHONE}`}
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        WhatsApp
                    </a>

                    <a
                        href={`mailto:${EMAIL}`}
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        {EMAIL}
                    </a>

                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                        <GitCommitVertical className="w-4 h-4" />
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}