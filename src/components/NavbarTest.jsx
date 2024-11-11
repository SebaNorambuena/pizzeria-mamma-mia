import React from 'react'
import { Link, NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { UserContext } from '../context/UserProvider'

const NavbarTest = () => {
    const { total } = useContext(CartContext)
    const isActiveClass = ({ isActive }) => (isActive ? 'text-blue' : 'text-black')
    const { user, logOut } = useContext(UserContext)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/"><h4 className='p-3 text-black'>Pizzeria Mamma Mia!</h4></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto gap-3">
                    <NavLink to="/" className={isActiveClass}>Home</NavLink>
                    {user ? <NavLink to="/profile" className={isActiveClass}>Profile</NavLink> : <NavLink to="/login" className={isActiveClass}>Login</NavLink>}
                    {user ? <Link to="#" className='text-black' onClick={()=>logOut()}>Logout</Link> : <NavLink to="/register" className={isActiveClass}>Register</NavLink>}
                </Nav>
                <Nav className="justify-content-end gap-3">
                    <NavLink to="/cart" className={isActiveClass}><i className="fa-solid fa-cart-shopping"></i> $ {total}</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarTest