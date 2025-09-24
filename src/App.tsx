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

function App() {


  return (
    <ThemeProvider theme={customeTheme}>
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
    </ThemeProvider>
  )
}

export default App
