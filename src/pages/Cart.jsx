import React, { useContext } from 'react'
//import { useState } from 'react'
//import { pizzaCart } from '../components/pizzas'
import { CartContext } from '../context/CartProvider'

const Cart = () => {
    const { cart, removeFromCart, aumentar, disminuir, total } = useContext(CartContext)
    
  return (
    <div style={{padding:"1rem"}}>
        {
            cart.map((cart) =>(
                <div key={cart.id}>
                    <div style={{border:"black 1px solid", display:"flex", padding:"1rem", gap:"1rem",justifyContent: "space-around"}}>
                        <img style={{width:"300px"}} src={cart.img} alt="Imagen de pizza" />
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                            <h2>Pizza {cart.name}</h2>
                            <h3>Precio: {cart.price}</h3>
                            <h3>Cantidad: {cart.count}</h3>
                        </div>
                        <div style={{display:"flex", gap:"1rem"}}>
                            <button style={{width:"30px", height:"30px"}} onClick={() => disminuir(cart)}>-</button>
                            <button style={{width:"30px", height:"30px"}} onClick={() => aumentar(cart)}>+</button>
                            <button style={{width:"30px", height:"30px"}} onClick={() => removeFromCart(cart)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            ))
        }
        <div>
            <h3>Total: {total}</h3>
            <button>Pagar</button>
        </div>
    </div>
  )
}

export default Cart
