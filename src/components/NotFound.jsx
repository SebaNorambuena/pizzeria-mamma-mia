import React from 'react'
import { Link } from 'react-router-dom'
import pizza from "../assets/img/NotFound.png"

const NotFound = () => {
  return (
    <div>
        <h1>Esta pagina no existe</h1>
        <img src={pizza} alt="" />

        <p>Te invitamos a continuar viendo nuestras mejores pizzas</p>
        <Link to='/'><button className='btn btn-primary'>Volver al inicio</button></Link>
    </div>
  )
}

export default NotFound
