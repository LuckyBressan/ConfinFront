import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import EstadoPage from "./pages/EstadoPage";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/estados" element={<EstadoPage />} />
            </Routes>
        </BrowserRouter>
    )
}