import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../context/CartProvider'
import { useContext } from 'react'

const CardPizza = ({product}) => {
    const {addToCart} = useContext(CartContext)

    return (
        <Card style={{ width: '20rem' }}>
            <img src={product.img} />
            <Card.Body>
                <Card.Title>Pizza {product.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <p>{product.desc}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p><strong>Ingredientes:</strong></p>
                    <ul style={{listStyle:"none"}}>
                        {
                        product.ingredients.map(ingredient =>(
                            <li key={ingredient}>{ingredient}</li>
                        ))
                        }
                    </ul>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Text>Precio: ${product.price}</Card.Text>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary" href="#">Ver Mas</button>
                    <button className="btn btn-primary" onClick={() => addToCart(product)}>Añadir <i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            </Card.Body>
        </Card>
    );
}
export default CardPizza
