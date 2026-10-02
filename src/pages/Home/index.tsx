import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { useLanguage } from "../../context/languageContext"
import { TerminalOsPortuguese } from "../../components/TerminalOs/TerminalOsPortuguese"
import { TerminalOsIngles } from "../../components/TerminalOs/TerminalOSIngles"

export const Home = () => {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <main className="max-w-3xl mx-auto px-6 py-16">
                {language === "portuguese" ? <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-3xl font-semibold">Olá, tudo bem?</h1>
                    <h2 className="text-lg opacity-90">
                        Meu nome é Matheus e nesse site quero te mostrar as diferenças entre
                        os Sistemas Operacionais mais conhecidos
                    </h2>
                    <p className="text-sm opacity-70 leading-relaxed">
                        Nesta página vou te mostrar brevemente os prós e contras de cada um,
                        e você também pode navegar até a aba de portfólio para ver um resumo
                        do meu estudo sobre cada sistema
                    </p>
                </div> :
                    <div className="flex flex-col gap-4 text-center">
                        <h1 className="text-3xl font-semibold">Hello, how are you?</h1>
                        <h2 className="text-lg opacity-90">
                            My name is Matheus, and on this site,
                            I want to show you the differences between the most well-known operating systems.
                        </h2>
                        <p className="text-sm opacity-70 leading-relaxed">
                            On this page, I will briefly outline the pros and cons of each one,
                            and you can also navigate to the portfolio tab to see a summary of my research on each system.
                        </p>
                    </div>
                }

                {language === "portuguese" ? <TerminalOsPortuguese /> : <TerminalOsIngles />}
            </main>
            <Footer />
        </>
    )
}