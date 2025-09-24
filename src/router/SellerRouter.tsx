import { Route, Routes } from "react-router";
import HomePage from "../Seller/HomePage/HomePage";
import Products from "../Seller/Products/Products";
import AddProduct from "../Seller/Products/AddProduct";
import Orders from "../Seller/Orders/Orders";
import Account from "../Seller/Account/Account";
import Payment from "../Seller/Payment/Payment";
import Transaction from "../Seller/Transaction/Transaction";



const SellerRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/add-product" element={<AddProduct/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/transaction" element={<Transaction/>}/>
        </Routes>
    );
};

export default SellerRoutes;