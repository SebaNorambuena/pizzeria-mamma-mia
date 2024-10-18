import React from 'react'
import { useState } from 'react'
import Header from "../components/Header"
import CardPizza from '../components/Cardpizza'
// import { pizzas } from "./pizzas"
import { useEffect } from 'react'

const Home = () => {

  // Consumo de archivo
  // const [productos, setProductos] = useState(pizzas)

  //Consumo de API
  const [products, setProducts] = useState([])

  const url = "http://localhost:5000/api/pizzas"
  const getApi = async() => {
    const res = await fetch(url)
    const data = await res.json()
    setProducts(data)
  }

  useEffect(()=>{
    getApi()
  }, [])

  return (
    <>
    <Header/>
    <div style={{
      display: "flex", justifyContent: "space-around", padding: "1rem", gap: "1rem", flexWrap: "wrap"
      }}>
      {
        products.map(product =>(
            
              <CardPizza
                key={product.id}
                name={product.name}
                price={product.price}
                ingredients={product.ingredients}
                img={product.img}
                description={product.desc}
                />  
        ))
      } 
      </div> 
    </>
  )
}

export default Home
