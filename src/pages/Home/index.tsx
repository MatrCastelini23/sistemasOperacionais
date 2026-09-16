import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DATA, type OSKey } from "../../data/dataOS";

export const Home = () => {
    const navigate = useNavigate();
    const [osSelected, setOsSelected] = useState<OSKey>("linux");
    const current = DATA[osSelected];

    return (
        <>
            <Header />
            <main className="max-w-3xl mx-auto px-6 py-16">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-3xl font-semibold text-black-100">Olá, tudo bem?</h1>
                    <h2 className="text-lg text-black-300">
                        Meu nome é Matheus e nesse site quero te mostrar as diferenças entre
                        os Sistemas Operacionais mais conhecidos
                    </h2>
                    <p className="text-sm text-black-400 leading-relaxed">
                        Nesta página vou te mostrar brevemente os prós e contras de cada um,
                        e você também pode navegar até a aba de portfólio para ver um resumo
                        do meu estudo sobre cada sistema
                    </p>
                </div>

                <div className="w-full rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden my-12">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
                        <span className="w-3 h-3 rounded-full bg-red-700" />
                        <span className="w-3 h-3 rounded-full bg-blue-600" />
                        <span className="w-3 h-3 rounded-full bg-emerald-700" />
                        <span className="ml-3 font-mono text-xs text-neutral-100">
                            Vamos aos prós e contras
                        </span>
                    </div>

                    <div className="flex border-b border-zinc-800">
                        {(Object.entries(DATA) as [OSKey, typeof DATA[OSKey]][]).map(([key, os]) => {
                            const Icon = os.icon;
                            const isActive = key === osSelected;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setOsSelected(key)}
                                    className={`flex items-center gap-2 px-5 py-3 font-mono text-sm border-b-2 transition-colors ${isActive
                                        ? `${os.border} ${os.accent}`
                                        : "border-transparent text-zinc-500 hover:text-zinc-300"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {os.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-mono text-sm text-zinc-400 mb-4">Prós</h3>
                            <ul className="space-y-3">
                                {current.pros.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-zinc-300">
                                        <span className="font-mono text-green-400">+</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-mono text-sm text-zinc-400 mb-4">Contras</h3>
                            <ul className="space-y-3">
                                {current.cons.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-zinc-300">
                                        <span className="font-mono text-red-400">-</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex justify-end">
                        <button
                            onClick={() => navigate(`/portifolio/${osSelected}`)}
                            className="px-5 py-2 rounded-full font-mono text-sm border border-zinc-700 text-zinc-200 hover:bg-zinc-900 hover:border-zinc-600 transition-colors"
                        >
                            Ver detalhes do OS
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}