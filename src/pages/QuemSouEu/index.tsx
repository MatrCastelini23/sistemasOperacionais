import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { MapPinned, Mail, Link2 } from "lucide-react"
import { NAME, EMAIL, LINKDIN } from "../../data/dataSocial"

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
                        className="w-50 h-50 rounded-full border border-zinc-800 object-cover"
                    />
                    <div>
                        <h1 className="text-xl font-semibold text-black-100">{NAME}</h1>
                        <h3 className="font-mono text-sm text-black-500">Junior Full-Stack Developer</h3>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <span className="flex items-center justify-center md:justify-start gap-2 text-sm text-black-400">
                            <MapPinned className="w-4 h-4" />
                            Umuarama - PR
                        </span>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="flex items-center justify-center md:justify-start gap-2 text-sm text-black-400 hover:text-zinc-100 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            {EMAIL}
                        </a>
                        <a
                            href={LINKDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center md:justify-start gap-2 text-sm text-black-400 hover:text-zinc-100 transition-colors"
                        >
                            <Link2 className="w-4 h-4" />
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold text-black-100">Olá, meu nome é Matheus</h1>
                    <h2 className="text-base text-black-400">Moro em Umuarama - PR</h2>
                    <p className="text-sm text-black-300 leading-relaxed">
                        Estou atualmente estudando Sistemas para Internet na UniAlfa. O curso é
                        focado no desenvolvimento e manutenibilidade de Sistemas Web.
                    </p>
                    <h3 className="font-mono text-sm text-black-500 mt-2">
                        Tenho trabalhado com as tecnologias abaixo:
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {STACK.map((tech) => (
                            <li
                                key={tech}
                                className="rounded-full border border-black-800 bg-zinc-950 px-3 py-1 text-xs font-mono text-zinc-300"
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