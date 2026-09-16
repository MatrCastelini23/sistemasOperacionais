import { type OsDetails } from "../../data/dataOsDetails";

type CardOsProps = {
    os: OsDetails;
};

export const CardOs = ({ os }: CardOsProps) => {
    return (
        <div className="w-full max-w-3xl mx-auto rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-black text-black dark:text-zinc-100 shadow-2xl overflow-hidden transition-colors">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-300 dark:border-zinc-800">
                <span className="w-3 h-3 rounded-full bg-red-700" />
                <span className="w-3 h-3 rounded-full bg-blue-600" />
                <span className="w-3 h-3 rounded-full bg-emerald-700" />
                <span className="ml-3 font-mono text-xs opacity-60">
                    Aqui está mais detalhes sobre o OS
                </span>
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-8">
                <div>
                    <h1 className="text-2xl font-semibold">{os.nome}</h1>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="rounded-full border border-zinc-300 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs font-mono opacity-80">
                            {os.linguagem}
                        </span>
                        <span className="rounded-full border border-zinc-300 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs font-mono opacity-80">
                            Kernel: {os.kernel.split(".")[0]}
                        </span>
                    </div>
                </div>

                <section>
                    <h3 className="font-mono text-sm opacity-60 mb-2">Filosofia do criador</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{os.filosofiaCriador}</p>
                </section>

                <section>
                    <h3 className="font-mono text-sm opacity-60 mb-2">História detalhada</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{os.historiaDetalhada}</p>
                </section>

                {os.versoes && (
                    <section>
                        <h3 className="font-mono text-sm opacity-60 mb-2">Linha de versões</h3>
                        <ul className="space-y-2">
                            {os.versoes.map((versao, i) => (
                                <li key={i} className="flex gap-3 text-sm opacity-90">
                                    <span className="font-mono opacity-50">-</span>
                                    <span>{versao}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {os.arvoreGenealogica && (
                    <section>
                        <h3 className="font-mono text-sm opacity-60 mb-2">Árvore genealógica</h3>
                        <p className="text-xs font-mono opacity-50 mb-4">{os.arvoreGenealogica.raiz}</p>
                        <div className="flex flex-col gap-4">
                            {os.arvoreGenealogica.troncosPrincipais.map((tronco, i) => (
                                <div key={i} className="rounded-lg border border-zinc-300 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900 p-4">
                                    <div className="flex items-center justify-between gap-3 mb-3">
                                        <h4 className="text-sm font-semibold">{tronco.nome}</h4>
                                        <span className="font-mono text-xs opacity-60 whitespace-nowrap">
                                            {tronco.gerenciadorPacotes}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {tronco.filhos.map((filho, j) => (
                                            <li key={j} className="text-sm opacity-80">
                                                <span className="font-medium opacity-100">{filho.nome}</span>
                                                {" — "}
                                                {filho.perfil}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section>
                    <h3 className="font-mono text-sm opacity-60 mb-2">Modus operandi</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{os.modusOperandi}</p>
                </section>

                <section>
                    <h3 className="font-mono text-sm opacity-60 mb-2">Kernel</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{os.kernel}</p>
                </section>

                <section>
                    <h3 className="font-mono text-sm opacity-60 mb-2">Fontes</h3>
                    <ul className="flex flex-wrap gap-2">
                        {os.fontes.map((fonte, i) => (
                            <li
                                key={i}
                                className="rounded-full border border-zinc-300 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-900 px-3 py-1 text-xs opacity-70"
                            >
                                {fonte}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};