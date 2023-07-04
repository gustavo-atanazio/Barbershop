import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SidebarProvider } from "./context/sidebarContext";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function AppRoutes() {
    return (
        <BrowserRouter>
            <SidebarProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </SidebarProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;