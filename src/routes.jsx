import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SidebarProvider } from "./context/sidebarContext";
import Home from "./pages/Home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <SidebarProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </SidebarProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;