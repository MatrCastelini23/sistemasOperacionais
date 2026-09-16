import { Rotas } from "./routes"
import { Analytics } from "@vercel/analytics/react"
import './index.css'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Rotas />
      </div>
      <Analytics />
    </>
  )
}

export default App
