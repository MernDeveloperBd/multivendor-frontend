import { Route, Routes } from "react-router";
import Navbar from "../customer/Navbar/Navbar";
import Home from "../customer/pages/Home/Home";
import Products from "../customer/pages/Product/Products";
import ProductDetails from "../customer/pages/Product/ProductDetails/ProductDetails";
import Cart from "../customer/pages/Cart/Cart";
import CheckOut from "../customer/pages/Checkout/CheckOut";
import Profile from "../customer/pages/Order/Profile";
import Footer from "../customer/Footer/Footer";

const CustomerRoute = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:categoryId" element={<Products />} />
                <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout/address" element={<CheckOut />} />
                <Route path="/account/*" element={<Profile />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default CustomerRoute;