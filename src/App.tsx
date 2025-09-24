import {  ThemeProvider } from "@mui/material"
import { customeTheme } from "./Theme/customeTheme"
import Home from "./customer/pages/Home/Home"
import Products from "./customer/pages/Product/Products"
import Footer from "./customer/Footer/Footer"
import ProductDetails from "./customer/pages/Product/ProductDetails/ProductDetails"
import Cart from "./customer/pages/Cart/Cart"
import CheckOut from "./customer/pages/Checkout/CheckOut"
import Navbar from "./customer/Navbar/Navbar"
import Profile from "./customer/pages/Order/Profile"

function App() {


  return (
    <ThemeProvider theme={customeTheme}>
      <Navbar/>
      {/* <Home/> */}
      {/* <Products/> */}
      {/* <ProductDetails/> */}
      {/* <Cart/> */}
      {/* <CheckOut/> */}
<Profile/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
