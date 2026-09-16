import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { MapPinned, Mail, Link2, GitCommitVertical } from "lucide-react"
import { NAME, EMAIL, LINKDIN, GITHUB_URL } from "../../data/dataSocial"

const STACK = [
    "HTML5",
    "CSS3",
    "React + Vite",
    "TailwindCss",
    "NodeJS",
    "NestJS",
    "NextJS",
    "Laravel",
    "Docker",
]

export const QuemSouEu = () => {

    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                    <img
                        src="https://lh3.googleusercontent.com/a/ACg8ocK3GrYHMdMRL-Aj7AQJqzlvx-rZE6ZqKvXL5h1E2zd0lgv0jfqBjw=s288-c-no"
                        alt={NAME}
                        className="w-32 h-32 rounded-full border border-zinc-300 dark:border-zinc-800 object-cover"
                    />
                    <div>
                        <h1 className="text-xl font-semibold">{NAME}</h1>
                        <h3 className="font-mono text-sm opacity-60">Junior Full-Stack Developer</h3>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <span className="flex items-center justify-center md:justify-start gap-2 text-sm opacity-80">
                            <MapPinned className="w-4 h-4" />
                            Umuarama - PR
                        </span>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="flex items-center justify-center md:justify-start gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <Mail className="w-4 h-4" />
                            {EMAIL}
                        </a>
                        <a
                            href={GITHUB_URL}
                            className="flex items-center justify-center md:justify-start gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <GitCommitVertical className="w-4 h-4" />
                            GitHub
                        </a>
                        <a
                            href={LINKDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center md:justify-start gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <Link2 className="w-4 h-4" />
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">Olá, meu nome é Matheus</h1>
                    <h2 className="text-base opacity-80">Moro em Umuarama - PR</h2>
                    <p className="text-sm opacity-90 leading-relaxed">
                        Estou atualmente estudando Sistemas para Internet na UniAlfa. O curso é
                        focado no desenvolvimento e manutenibilidade de Sistemas Web.
                    </p>
                    <h3 className="font-mono text-sm opacity-60 mt-2">
                        Tenho trabalhado com as tecnologias abaixo:
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {STACK.map((tech) => (
                            <li
                                key={tech}
                                className="rounded-full border border-zinc-300 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs font-mono opacity-80"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    )
}