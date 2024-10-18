import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Pizza = () => {
    const [item, setItem] = useState([])

    const url = "http://localhost:5000/api/pizzas/p001"
    const getPizza = async() => {
        const res = await fetch(url)
        const data = await res.json()
        setItem(data)
    }

    useEffect(() => {
        getPizza()
    }, [])

    return (
        <div key={item.id}>
            <h1>Pizza {item.name}</h1>
            <div className='d-flex justify-content-center align-items-center gap-2'>

                <img src={item.img} alt="" style={{
                    width:"450px",
                    border:"black 1px solid"
                }}/>

                <div className='d-flex flex-column justify-content-center'>
                    <p>{item.desc}</p>
                    <strong>Ingredientes</strong>
                    <ul>
                        {
                        item.ingredients?.map(ingredients => (
                            <li key={ingredients}>{ingredients}</li>
                        ))
                        }
                    </ul>
                    <p><strong>Precio: ${item.price}</strong></p>
                    <button className='btn btn-primary'>Añadir al carrito</button>  
                </div>
                
            </div>
        </div>
    )
}

export default Pizza
