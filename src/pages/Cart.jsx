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
                <div key={cart.id} className='container'>
                    <div className='d-flex p-3 flex-wrap items-center justify-content-evenly'>
                        <img style={{width:"200px"}} src={cart.img} alt="Imagen de pizza" />
                        <div className='d-flex flex-column justify-content-between'>
                            <h6>Pizza {cart.name}</h6>
                            <h5>Precio: {cart.price}</h5>
                            <p>Cantidad: {cart.count}</p>
                            <div className='d-flex justify-content-between'>
                                <p onClick={() => aumentar(cart)}><i className="fa-solid fa-plus"></i></p>
                                <p onClick={() => disminuir(cart)}><i className="fa-solid fa-minus"></i></p>
                                <p className="text-danger" onClick={() => removeFromCart(cart)}><i className="fa-solid fa-trash"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        <div className='d-flex justify-content-evenly'>
            <h3>Total: {total}</h3>
            <button className='btn btn-primary'>Pagar</button>
        </div>
    </div>
  )
}

export default Cart
