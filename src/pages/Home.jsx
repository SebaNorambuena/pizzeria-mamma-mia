import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../context/ApiProvider'
import Header from "../components/Header"
import CardPizza from '../components/Cardpizza'
// import { pizzas } from "./pizzas"
// import { useState, useEffect } from 'react'

const Home = () => {

  const { products } = useContext(ApiContext)

  // Consumo de archivo
  // const [productos, setProductos] = useState(pizzas)

  //Consumo de API
  // const [products, setProducts] = useState([])

  //const url = "http://localhost:5000/api/pizzas"
  //const getApi = async() => {
  //  const res = await fetch(url)
  //  const data = await res.json()
  //  setProducts(data)
  //}

  //useEffect(()=>{
  //  getApi()
  //}, [])

  return (
    <>
    <Header/>
    <div className="container d-flex justify-content-around p-3 gap-3 flex-wrap">
      {
        products.map((product) =>(
            
              <CardPizza
                key={product.id}
                product={product}
                />  
        ))
      } 
      </div> 
    </>
  )
}

export default Home
