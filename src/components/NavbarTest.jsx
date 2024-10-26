import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'

const NavbarTest = () => {
    const { total } = useContext(CartContext)
    const token = false;
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/"><h4 className='p-3'>Pizzeria Mamma Mia!</h4></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto gap-3">
                    <Link to="/"><p>Home</p></Link>
                    {token ? <Link to="/profile"><p>Profile</p></Link> : <Link to="/login"><p>Login</p></Link>}
                    {token ? <p>Logout</p> : <Link to="/register"><p>Register</p></Link>}
                </Nav>
                <Nav className="justify-content-end gap-3">
                    <Link to="/profile"><p>Profile</p></Link>
                    <Link to="/cart"><p>Total: $ {total}</p></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarTest