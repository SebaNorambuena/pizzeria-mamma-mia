import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartProvider'

const Pizza = () => {
    const [item, setItem] = useState([])
    const { id } = useParams()
    const {addToCart} = useContext(CartContext)

    const url = `http://localhost:5000/api/pizzas/${id}`
    const getPizza = async() => {
        const res = await fetch(url)
        const data = await res.json()
        setItem(data)
    }

    useEffect(() => {
        getPizza()
    }, [])

    return (
        <div style={{padding:"1rem"}}>
            <div key={item.id} className='container'>
                <div className='d-flex p-3 flex-wrap items-center justify-content-evenly'>
                    <img style={{width:"400px"}} src={item.img} alt="Imagen de pizza" />
                    <div className='d-flex flex-column justify-content-between'>
                        <h3>Pizza {item.name}</h3>
                        <p>{item.desc}</p>
                        {
                        item.ingredients?.map(ingredient =>(
                            <p key={ingredient}><i className="fa-solid fa-utensils"></i> {ingredient}</p>
                        ))
                        }
                        <h3>Precio: {item.price}</h3>
                        <button className='btn btn-primary' onClick={()=>addToCart(item)}>Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizza
