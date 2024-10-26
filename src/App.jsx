import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import './App.css'
import NavbarTest from "./components/NavbarTest"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import Profile from "./components/Profile"
import NotFound from "./components/NotFound"
import ApiProvider from "./context/ApiProvider"
import CartProvider from "./context/CartProvider"

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
    <ApiProvider>
      <CartProvider>
        <NavbarTest />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </ApiProvider>
    </>
  )
}

export default App
