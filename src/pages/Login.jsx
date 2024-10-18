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
        <div style={{
            width:'100%',
            display: 'flex',
            flexDirection:'column',
            gap:'1rem',
            padding:'2rem',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <form onSubmit={session} style={{
            display: 'flex',
            flexDirection:'column',
            gap:'1rem'
        }}>
                <input type="email" placeholder="Ingresa tu email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Ingresa tu Contraseña" onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit">Iniciar sesion</button>
            </form>
        </div>
    )
}

export default Login