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
        <div style={{
            width:'100%',
            display: 'flex',
            flexDirection:'column',
            gap:'1rem',
            padding:'2rem',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <form action="" onSubmit={validarInput} style={{
            display: 'flex',
            flexDirection:'column',
            gap:'1rem'
        }}>
                <input type="email" placeholder="Ingresa tu Email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Ingresa tu contraseña" onChange={(e)=> setPassword(e.target.value)}/>
                <input type="password" placeholder="Valida tu contraseña" onChange={(e)=> setVpassword(e.target.value)}/>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default Register