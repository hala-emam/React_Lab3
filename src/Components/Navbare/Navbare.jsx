import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , NavLink} from 'react-router-dom';
import Movies from './../../Pages/Movies/Movies';
import Favorites from './../../Pages/Favorites/Favorites';
function Navbare() {
    return (
        <>
         <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
          <NavLink  to='/' className={({isActive,isPending})=> (isActive)?'text-danger text-decoration-none mx-3':'mx-3'}>Movies</NavLink>
          <NavLink  to='/Favorites' className={({isActive,isPending})=> (isActive)?'text-danger text-decoration-none mx-3':'mx-3'}>Favorites</NavLink>
           
          </Nav>
          <Nav >
          <NavLink  to='/Login' className={({isActive,isPending})=> (isActive)?'text-danger text-decoration-none mx-3':'mx-3'}>Login</NavLink>
          <NavLink  to='/Register' className={({isActive,isPending})=> (isActive)?'text-danger text-decoration-none mx-3':'mx-3'}>Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
        
        </>
    )
}

export default Navbare
