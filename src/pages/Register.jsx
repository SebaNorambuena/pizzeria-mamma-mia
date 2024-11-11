import { useState } from "react"
import useInput from "../hooks/UseInput";
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

const Register = () => {
    const {register} = useContext(UserContext)
    const [vpassword, setVpassword] = useState("")
    const email = useInput("")
    const password = useInput("")


    const validarInput = (e)=>{
        e.preventDefault()
        console.log(password.value, vpassword)
        if (!email.value || !password.value || !vpassword){
            alert("Se deben llenar todos los datos")
        }else if (password.value !== vpassword){
            alert("La Contraseña no coincide")
        }else if (password.value.length < 6){
            alert("La contraseña es demaciado corta")
        }else{
            register(e, email.value, password.value)
        }
    }

    return (
        <div className="d-flex flex-column gap-3 w-100 p-3 justify-content-center align-items-center">
            <form action="" onSubmit={validarInput} className="d-flex flex-column gap-3">
                <input type="email" placeholder="Ingresa tu email" {...email}/>
                <input type="password" placeholder="Ingresa tu contraseña" {...password}/>
                <input type="password" placeholder="Valida tu contraseña" onChange={(e)=> setVpassword(e.target.value)}/>
                <button className="btn btn-primary" type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default Register