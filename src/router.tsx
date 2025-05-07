import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import IndexPage from "./Pages/IndexPage";
import EstadoPage from "./Pages/EstadoPage";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<IndexPage />} />
                <Route path="/estados" element={<EstadoPage />} />
            </Routes>
        </BrowserRouter>
    )
}