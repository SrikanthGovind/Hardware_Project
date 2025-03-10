import Home from "./Components/Home/Home"
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import Overlay from "./Components/Overlay/Overlay"
import { Box } from "@mui/material"
import { useSelector } from "react-redux";
import { RootState } from "./types"
import { Route, Routes } from "react-router-dom"
import Cart from "./Components/Cart/Cart"
import Productdetail from "./Components/Productspage/ProductDetails/Productdetail"
import Search from "./Components/Productspage/Search/Search"
import Wishlist from "./Components/wishlist/Wishlist"

function App() {
const openOverlay=useSelector((state:RootState)=>state.product.openOverlay)
  

  return (
    <Box sx={{position:'relative'}}>
    <Navbar/>


    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
      <Route path="productdetails" element={<Productdetail/>}></Route>
      <Route path="search" element={<Search/>}></Route>
      <Route path="wishlist" element={<Wishlist/>}></Route>
    </Routes>
     {openOverlay && <Overlay/>}
    </Box>
  )
}

export default App
