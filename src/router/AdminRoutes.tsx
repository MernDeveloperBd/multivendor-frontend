import { Route, Routes } from "react-router";
import Coupon from "../Admin/Coupon/Coupon";
import Deal from "../Admin/Deal/Deal";
import CouponForm from "../Admin/Coupon/CouponForm";
import SellerTable from "../Admin/Seller/SellerTable";
import GridTable from "../Admin/HomePage/GridTable";
import ShopByCategory from "../Admin/HomePage/ShopByCategory";
import WomenFashionTable from "../Admin/HomePage/WomenFashionTable";




const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SellerTable/>}/>
            <Route path="/coupon" element={<Coupon/>}/>
            <Route path="/add-coupon" element={<CouponForm/>}/>
            <Route path="/home-grid" element={<GridTable/>}/>
            <Route path="/women-category" element={<WomenFashionTable/>}/>
            <Route path="/shop-by-category" element={<ShopByCategory/>}/>
            <Route path="/deals" element={<Deal/>}/>
         
        </Routes>
    );
};

export default AdminRoutes;