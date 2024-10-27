import React from 'react'
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../context/CartProvider'
import { useContext } from 'react'

const CardPizza = ({product}) => {
    const {addToCart} = useContext(CartContext)

    return (
        <div style={{ width: '20rem', border: '2px solid black', borderRadius: '10px'}}>
            <img style={{ width: '19.7rem', borderRadius: '10px' }} src={product.img} />

            <h5>Pizza {product.name}</h5>
            <hr />
            <div style={{ width: '15rem', height: '18rem' }} className='text-center m-auto'>
                <p>{product.desc}</p>
            </div>

            <hr />

            <h6>Ingredientes:</h6>
            
            {
            product.ingredients.map(ingredient =>(
                <p key={ingredient}><i class="fa-solid fa-utensils"></i> {ingredient}</p>
            ))
            }
        
            <hr />

            <div className='d-flex flex-column gap-2'>
                <h5>Precio: ${product.price}</h5>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary">Ver Mas</button>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Añadir <i className="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>
        </div>
    );
}
export default CardPizza
