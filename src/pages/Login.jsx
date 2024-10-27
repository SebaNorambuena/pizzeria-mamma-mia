import { useState } from "react"

const Login = ({user})=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const session = ()=>{
        if(email === user.email && password === user.password){
            alert("Inicio de sesion exitoso!")
        }else{
            alert("Correo o contraseña invalidos!")
        }
    }

    return(
        <div className="d-flex flex-column gap-3 w-100 p-3 justify-content-center align-items-center">
            <form onSubmit={session} className="d-flex flex-column gap-3">
                <input type="email" placeholder="Ingresa tu email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Ingresa tu contraseña" onChange={(e)=> setPassword(e.target.value)}/>
                <button className="btn btn-primary" type="submit">Iniciar sesion</button>
            </form>
        </div>
    )
}

export default Login