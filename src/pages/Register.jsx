import { useState } from "react"

const Register = ({user}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [vpassword, setVpassword] = useState("");

    const validarInput = (e)=>{
        e.preventDefault()
        if (!email || !password || !vpassword){
            alert("Se deben llenar todos los datos")
        }else if (password != vpassword){
            alert("La Contraseña no coincide")
        }else if (password.length < 6){
            alert("La contraseña es demaciado corta")
        }else{
            alert("Tu registro fue exitoso")
            const infoUsuario = {
                "email": email,
                "password": password
            }
            user(infoUsuario)
        }
    }

    return (
        <div className="d-flex flex-column gap-3 w-100 p-3 justify-content-center align-items-center">
            <form action="" onSubmit={validarInput} className="d-flex flex-column gap-3">
                <input type="email" placeholder="Ingresa tu email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Ingresa tu contraseña" onChange={(e)=> setPassword(e.target.value)}/>
                <input type="password" placeholder="Valida tu contraseña" onChange={(e)=> setVpassword(e.target.value)}/>
                <button className="btn btn-primary" type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default Register