import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    // agregar a cart
    const addToCart = (product) => {
        console.log(product)
        const item = cart.find(p => p.id === product.id)
        if (item) {
            setCart(cart.map(p => p.id === product.id ? {...p, count: p.count + 1} : p))
        } else {
            setCart([...cart, {...product, count: 1}])
        }
    }

    // remover de cart
    const removeFromCart = (product) => {
        console.log(product)
        setCart(cart.filter(p => p.id !== product.id))
    }

    // aumentar cantidad
    const aumentar = (product) => {
        setCart(cart.map(p => p.id === product.id ? {...p, count: p.count + 1} : p))
    }
    
    // disminuir cantidad
    const disminuir = (product) => {
        if (product.count === 1) {
            removeFromCart(product)
        } else {
            setCart(cart.map(p => p.id === product.id ? {...p, count: p.count - 1} : p))
        }
    }

    const pagoTotal = async() => {
        const token = localStorage.getItem("token")
        await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
        cart: cart,
        }),
        });
        if (cart.length === 0) {
            alert("No hay productos en el carrito")
        } else {
            alert("Pago exitoso")
        }
    }

    useEffect  (() => {
        const total = cart.reduce((total, product) => total + product.price * product.count, 0)
        setTotal(total)
    }, [cart])  

    return (
        <CartContext.Provider value={{cart, pagoTotal, addToCart, removeFromCart, aumentar, disminuir, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider