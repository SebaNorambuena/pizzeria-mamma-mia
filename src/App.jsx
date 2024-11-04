import { useState, useContext } from "react"
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
import UserProvider from "./context/UserProvider"
import { UserContext } from "./context/UserProvider"

const App = () => {
  const [user, setUser] = useState(null);
  const {token} = useContext(UserContext)

  return (
    <>
    <ApiProvider>
      <CartProvider>
          <NavbarTest />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={token ? <Home /> : <Register />} />
            <Route path="/login" element={token ? <Home /> : <Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={token ? <Profile /> : <Login />} />
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
