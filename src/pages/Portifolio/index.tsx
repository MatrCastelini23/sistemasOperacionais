import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { CardOsPortuguese } from "../../components/CardOs/Portugues"
import { useNavigate, useParams } from "react-router-dom"
import { osDetailsMap } from "../../data/dataOSPortugues/dataOsDetails"
import { type OSKey } from "../../data/dataOSPortugues/dataOS"
import { useLanguage } from "../../context/languageContext"
import { CardOsEnglish } from "../../components/CardOs/Ingles"

const OS_LIST: { key: OSKey; label: string }[] = [
    { key: "linux", label: "Linux" },
    { key: "windows", label: "Windows" },
    { key: "mac", label: "macOS" },
];

const isOsKey = (value: string | undefined): value is OSKey => {
    return value === "linux" || value === "windows" || value === "mac";
};

export const Portifolio = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const { os } = useParams<{ os: string }>();

    const osSelected: OSKey = isOsKey(os) ? os : "linux";
    const currentOsDetails = osDetailsMap[osSelected];

    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
                <div>
                    {language === "portuguese" ? <CardOsPortuguese os={currentOsDetails} /> : <CardOsEnglish />}
                </div>

                <div className="flex justify-center gap-4">
                    {OS_LIST.map((item) => {
                        const isActive = item.key === osSelected;
                        return (
                            <button
                                key={item.key}
                                onClick={() => navigate(`/portifolio/${item.key}`)}
                                className={`px-5 py-2 rounded-full font-mono text-sm border transition-colors ${isActive
                                    ? "border-black dark:border-zinc-100 bg-zinc-200 dark:bg-zinc-900"
                                    : "border-zinc-300 dark:border-zinc-800 opacity-60 hover:opacity-100 hover:bg-zinc-200 dark:hover:bg-zinc-900"
                                    }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}