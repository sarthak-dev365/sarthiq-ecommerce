
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import BudgetPicks from "./components/BudgetPicks";
import OffersSection from "./components/OffersSection";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function Home() {
    return (
        <>
           

            <main>
                <HeroSection />
                <CategorySection />
                <FeaturedProducts />
                <BudgetPicks />
                <OffersSection />
                
            </main>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    );
}

export default App;
