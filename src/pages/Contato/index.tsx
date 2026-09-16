import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Phone, Mail, Link2, GitCommitVertical } from "lucide-react";
import { NAME, PHONE, EMAIL, GITHUB_URL, LINKDIN } from "../../data/dataSocial";

export const Contato = () => {

    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center gap-3">
                    <p className="font-mono text-xs text-black-500">{NAME}</p>
                    <h1 className="text-2xl font-semibold text-black-100">
                        Para entrar em contato comigo:
                    </h1>
                    <h2 className="text-base text-black-400">
                        Ou caso se interesse por minhas publicações:
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    <a
                        href={`tel:${PHONE}`}
                        className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                    >
                        <Phone className="w-4 h-4 text-zinc-400" />
                        {PHONE}
                    </a>

                    <a
                        href={`mailto:${EMAIL}`}
                        className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                    >
                        <Mail className="w-4 h-4 text-zinc-400" />
                        {EMAIL}
                    </a>

                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                    >
                        <GitCommitVertical className="w-4 h-4 text-zinc-400" />
                        GitHub
                    </a>

                    <a
                        href={LINKDIN}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                    >
                        <Link2 className="w-4 h-4 text-zinc-400" />
                        LinkedIn
                    </a>
                </div>
            </main>
            <Footer />
        </>
    )
}