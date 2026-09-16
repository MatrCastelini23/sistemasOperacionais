import { Rotas } from "./routes"
import { Analytics } from "@vercel/analytics/react"
import './index.css'

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 dark:bg-black text-black dark:text-zinc-100 transition-colors">
      <Rotas />
      <Analytics />
    </div>
  )
}

export default App