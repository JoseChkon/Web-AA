import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Login from "./pages/Login"
import Register from "./pages/Register"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  )
}