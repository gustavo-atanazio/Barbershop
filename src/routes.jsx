import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;