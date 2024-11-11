import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const register = async (e, email, password)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const data = await response.json()
        alert(data?.error || "Registro exitoso")
        localStorage.setItem("token", data.token)
        setUser(data)
        console.log(data)
    }

    const logIn = async (e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const data = await response.json()
        alert(data?.error || "Sesión iniciada")
        localStorage.setItem("token", data.token)
        setUser(data)
    }

    useEffect(()=>{
        const token = localStorage.getItem("token")
    
        if(token){
          fetch("http://localhost:5000/api/auth/me", {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => setUser(data))
        }
    }, [])

    const logOut = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user, setUser, email, setEmail, password, setPassword, register, logIn, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider