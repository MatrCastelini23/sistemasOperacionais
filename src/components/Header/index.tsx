import { useNavigate } from "react-router-dom"

const URL_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRd6aMmfiqMFdXazffe2cmKKUY4ljwlWyVx8Xj9foCdUUznCNikVGOAOU&s=10"

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="w-full bg-zinc-950 border-b border-zinc-800 mb-4 sm:mb-6 md:mb-8">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6 sm:px-8 sm:py-8 md:py-10 min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                <img
                    src={URL_IMG}
                    alt="Logo"
                    className="h-15 w-auto cursor-pointer"
                    onClick={() => {
                        navigate('/')
                    }}
                />
                <ul className="flex items-center gap-6 list-none">
                    <li>
                        <button
                            className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer"
                            onClick={() => { navigate('/') }}
                        >Home
                        </button></li>
                    <li>
                        <button
                            className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer"
                            onClick={() => { navigate('/portifolio') }}
                        >Portifolio</button></li>
                    <li>
                        <button
                            className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer"
                            onClick={() => { navigate('/sobre') }}
                        >Quem Sou Eu
                        </button>
                    </li>
                    <li>
                        <button
                            className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors bg-transparent border-none cursor-pointer"
                            onClick={() => {
                                navigate('/contato')
                            }}
                        >Contato
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}