import React from 'react'
import { useState, useEffect, createContext } from 'react'

export const ApiContext = createContext()

const ApiProvider = ({children}) => {
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
        <ApiContext.Provider value={{products}}>
            {children} 
        </ApiContext.Provider>
    )
}

export default ApiProvider
