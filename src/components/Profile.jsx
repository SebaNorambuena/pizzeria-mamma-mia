import React from 'react'
import perfil from "../assets/img/perfil.png"
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const Profile = () => {
  const { user } = useContext(UserContext)
  const { logOut } = useContext(UserContext)
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex flex-column justify-content-center align-items-start gap-3'>
            <img src={perfil} className='imagen-perfil' alt="imagen de perfil" />
            <h3>Bienvenido</h3>
            <p>Email: <strong>{user?.email}</strong></p>
            <div className='d-flex gap-3'>
                <p>Medios de pago: <strong>Ninguno</strong></p> 
                <button className='btn btn-primary'>Agregar</button>
            </div>
            <button className='btn btn-primary'>Editar perfil</button>
            <button className='btn btn-primary' onClick={()=>logOut()}>Cerrar sesion</button>
        </div> 
    </div>
  )
}

export default Profile
