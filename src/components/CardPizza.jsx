import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardPizza = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>Pizza {props.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <p>{props.description}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p><strong>Ingredientes:</strong></p>
                    <ul style={{listStyle:"none"}}>
                        {
                        props.ingredients.map(ingredient =>(
                            <li key={ingredient}>{ingredient}</li>
                        ))
                        }
                    </ul>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Text>Precio: ${props.price}</Card.Text>
                <Card.Link href="#">Ver Mas</Card.Link>
                <Card.Link href="#">Añadir</Card.Link>
            </Card.Body>
        </Card>
    );
}
export default CardPizza
