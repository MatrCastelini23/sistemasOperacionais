import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

const LINKS = [
    { path: "/", label: "Home" },
    { path: "/portifolio", label: "Portifolio" },
    { path: "/sobre", label: "Quem somos" },
    { path: "/contato", label: "Contato" },
]

export const NoRoute = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <main className="max-w-2xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-6">
                <div className="rounded-lg border border-zinc-300 dark:border-zinc-800 px-8 py-10 flex flex-col items-center gap-4 w-full">
                    <p className="font-mono text-sm opacity-60">Error 404</p>
                    <h1 className="text-5xl font-bold">404</h1>
                    <h2 className="text-lg opacity-80">
                        Essa página não existe. <br /> Mas temos outros conteúdos abaixo:
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {LINKS.map((link) => (
                        <button
                            key={link.path}
                            onClick={() => navigate(link.path)}
                            className="px-5 py-2 rounded-full font-mono text-sm border border-zinc-300 dark:border-zinc-800 opacity-70 hover:opacity-100 hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}