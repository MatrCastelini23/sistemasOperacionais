import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { DATA, type OSKey } from "../../../data/dataOSIngles/dataOS";


export const TerminalOsIngles = () => {
    const navigate = useNavigate();
    const [osSelected, setOsSelected] = useState<OSKey>("linux");
    const current = DATA[osSelected];

    return (
        <div className="w-full rounded-lg border border-zinc-300 dark:border-zinc-800 shadow-2xl overflow-hidden my-12">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-300 dark:border-zinc-800">
                <span className="w-3 h-3 rounded-full bg-red-700" />
                <span className="w-3 h-3 rounded-full bg-blue-600" />
                <span className="w-3 h-3 rounded-full bg-emerald-700" />
                <span className="ml-3 font-mono text-xs">
                    Let's look at the pros and cons.
                </span>
            </div>
            <div className="flex border-b border-zinc-300 dark:border-zinc-800">
                {(Object.entries(DATA) as [OSKey, typeof DATA[OSKey]][]).map(([key, os]) => {
                    const Icon = os.icon;
                    const isActive = key === osSelected;
                    return (
                        <button
                            key={key}
                            onClick={() => setOsSelected(key)}
                            className={`flex items-center gap-2 px-5 py-3 font-mono text-sm border-b-2 transition-colors ${isActive
                                ? `${os.border} ${os.accent}`
                                : "border-transparent opacity-80 hover:opacity-100"
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
                    <h3 className="font-mono text-sm opacity-60 mb-4">Pros</h3>
                    <ul className="space-y-3">
                        {current.pros.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm opacity-90">
                                <span className="font-mono text-green-500">+</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-mono text-sm opacity-60 mb-4">Cons</h3>
                    <ul className="space-y-3">
                        {current.cons.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm opacity-90">
                                <span className="font-mono text-red-500">-</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex justify-end">
                <button
                    className="px-5 py-2 rounded-full font-mono text-sm border border-zinc-300 dark:border-zinc-700 opacity-80 hover:opacity-100 hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors"
                    onClick={() => navigate(`/portifolio/${osSelected}`)}
                >
                    See OS's Details
                </button>
            </div>
        </div>
    )
}