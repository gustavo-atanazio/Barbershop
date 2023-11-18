import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import Loading from "components/Loading";

import Home from "pages/Home";
const Products = lazy(() => import('pages/Products'));
const Contact = lazy(() => import('pages/Contact'));

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header/>

            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Suspense>

            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;