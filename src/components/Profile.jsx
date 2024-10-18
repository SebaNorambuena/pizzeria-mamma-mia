import React from 'react'
import perfil from "../assets/img/perfil.png"

const Profile = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex flex-column justify-content-center align-items-start gap-3'>
            <img src={perfil} className='imagen-perfil' alt="imagen de perfil" />
            <p>Usuario: <strong>Sebastian</strong></p>
            <p>Email: <strong>sebastian.123@pizzeria.cl</strong></p>
            <div className='d-flex gap-3'>
                <p>Medios de pago: <strong>Ninguno</strong></p> 
                <button className='btn btn-primary'>Agregar</button>
            </div>
            <button className='btn btn-primary'>Editar perfil</button>
            <button className='btn btn-primary'>Cerrar sesion</button>
        </div> 
    </div>
  )
}

export default Profile
