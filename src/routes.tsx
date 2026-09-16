import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Portifolio } from "./pages/Portifolio";
import { QuemSouEu } from "./pages/QuemSouEu";
import { Contato } from "./pages/Contato";
import { NoRoute } from "./pages/NoRoute";

export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/portifolio"
                    element={<Portifolio />}
                />
                <Route
                    path="/portifolio/:os"
                    element={<Portifolio />}
                />
                <Route
                    path="/sobre"
                    element={<QuemSouEu />}
                />
                <Route
                    path="/contato"
                    element={<Contato />}
                />

                <Route
                    path="*"
                    element={<NoRoute />}
                />
            </Routes>
        </BrowserRouter>
    )

}