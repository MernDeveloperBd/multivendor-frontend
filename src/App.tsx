import { ThemeProvider } from "@mui/material"
import { customeTheme } from "./Theme/customeTheme"
import Home from "./customer/pages/Home/Home"
import Products from "./customer/pages/Product/Products"
import Footer from "./customer/Footer/Footer"
import ProductDetails from "./customer/pages/Product/ProductDetails/ProductDetails"
import Cart from "./customer/pages/Cart/Cart"
import CheckOut from "./customer/pages/Checkout/CheckOut"
import Navbar from "./customer/Navbar/Navbar"
import Profile from "./customer/pages/Order/Profile"
import { Route, Routes } from "react-router"
import SellerDashboard from "./Seller/SellerDashboard/SellerDashboard"
import HomePage from "./Seller/HomePage/HomePage"
import CustomerRoute from "./router/CustomerRoute"
import BecomeSeller from "./Auth/BecomeSeller/BecomeSeller"
import Auth from "./Auth/Login/Auth"
import AdminDashboard from "./Admin/Dashboard/AdminDashboard"

function App() {


  return (
    <ThemeProvider theme={customeTheme}>

      {/* seller routes */}
      <Routes>
        <Route path="/become-seller" element={<BecomeSeller />} />      
        <Route path="/seller/*" element={<SellerDashboard />} />      
        <Route path="/admin/*" element={<AdminDashboard />} />      
        <Route path="/login" element={<Auth />} />      
        <Route path="/*" element={<CustomerRoute />} />      
      </Routes>
      {/* <SellerDashboard/> */}

      {/* customer routes */}
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/address" element={<CheckOut />} />
        <Route path="/account/*" element={<Profile />} />
      </Routes> */}

      {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default App
