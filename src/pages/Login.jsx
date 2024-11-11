import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

const Login = ()=>{
    const {logIn, setEmail, setPassword} = useContext(UserContext)
    return(
        <div className="d-flex flex-column gap-3 w-100 p-3 justify-content-center align-items-center">
            <form onSubmit={logIn} className="d-flex flex-column gap-3">
                <input type="email" placeholder="Ingresa tu email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Ingresa tu contraseña" onChange={(e)=> setPassword(e.target.value)}/>
                <button className="btn btn-primary" type="submit">Iniciar sesion</button>
            </form>
        </div>
    )
}

export default Login