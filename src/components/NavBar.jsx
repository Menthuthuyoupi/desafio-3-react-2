import React from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Pokeball from '../assets/imgs/Pokeball.png'

const NavBar = () => {
    const setActiveClass = ({isActive}) => (isActive ? 'active' : undefined)
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className='py-4'>
                <Container>
                    <div className='d-flex'><img src={Pokeball} style={{width:'10%'}} /></div>
                    <Nav className="me-auto">
                        <NavLink className={ setActiveClass } to='/' style={{marginRight:'10px'}}>
                            Home
                        </NavLink>
                        <NavLink className={ setActiveClass } to='/pokemones/:id'>
                            Pokemones
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
  )
}

export default NavBar