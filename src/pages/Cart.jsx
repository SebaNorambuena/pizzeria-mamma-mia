import React from 'react'
import { useState } from 'react'
import { pizzaCart } from '../components/pizzas'

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart)
    let todo = 0
    const total = () => {
        cart.map(cart => (
            todo += cart.price * cart.count
        ))
        return todo
    }

const aumentar = (index) => {
    console.log(index)
    const newCount = [...cart];
    console.log(newCount[index])
    newCount[index].count++;
    setCart(newCount);
    }

const disminuir = (index) => {
    const newCount = [...cart];
    newCount[index].count--;
    if (newCount[index].count === 0) {
        newCount.splice(index, 1);
    }
    setCart(newCount);
    }

  return (
    <div style={{padding:"1rem"}}>
        {
            cart.map((cart, index) =>(
                <div>
                    <div key={index} style={{border:"black 1px solid", display:"flex", padding:"1rem", gap:"1rem",justifyContent: "space-around"}}>
                        <img style={{width:"300px"}} src={cart.img} alt="Imagen de pizza" />
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                            <h2>Pizza {cart.name}</h2>
                            <h3>Precio: {cart.price}</h3>
                            <h3>Cantidad: {cart.count}</h3>
                        </div>
                        <div style={{display:"flex", gap:"1rem"}}>
                            <button style={{width:"30px", height:"30px"}} onClick={() => disminuir(index)}>-</button>
                            <button style={{width:"30px", height:"30px"}} onClick={() => aumentar(index)}>+</button>
                        </div>
                    </div>
                </div>
            ))
        }
        <div>
            <h3>Total: {total()}</h3>
            <button>Pagar</button>
        </div>
    </div>
  )
}

export default Cart
