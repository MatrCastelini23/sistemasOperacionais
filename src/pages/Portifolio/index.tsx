import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { CardOs } from "../../components/CardOs"
import { useNavigate, useParams } from "react-router-dom"
import { osDetailsMap } from "../../data/dataOsDetails"
import { type OSKey } from "../../data/dataOS"

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
    const { os } = useParams<{ os: string }>();

    const osSelected: OSKey = isOsKey(os) ? os : "linux";
    const currentOsDetails = osDetailsMap[osSelected];

    return (
        <>
            <Header />
            <main className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10">
                <div>
                    <CardOs os={currentOsDetails} />
                </div>

                <div className="flex justify-center gap-4">
                    {OS_LIST.map((item) => {
                        const isActive = item.key === osSelected;
                        return (
                            <button
                                key={item.key}
                                onClick={() => navigate(`/portifolio/${item.key}`)}
                                className={`px-5 py-2 rounded-full font-mono text-sm border transition-colors ${isActive
                                    ? "border-zinc-100 text-zinc-100 bg-zinc-900"
                                    : "border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
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