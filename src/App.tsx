import {  ThemeProvider } from "@mui/material"
import { customeTheme } from "./Theme/customeTheme"
// import Home from "./customer/pages/Home/Home"
import Products from "./customer/pages/Product/Products"
import Footer from "./customer/Footer/Footer"
import ProductDetails from "./customer/pages/Product/ProductDetails/ProductDetails"
import Cart from "./customer/pages/Cart/Cart"
import CheckOut from "./customer/pages/Checkout/CheckOut"

function App() {


  return (
    <ThemeProvider theme={customeTheme}>
      {/* <Home/> */}
      {/* <Products/> */}
      {/* <ProductDetails/> */}
      {/* <Footer/> */}
      {/* <Cart/> */}
      <CheckOut/>
    </ThemeProvider>
  )
}

export default App
