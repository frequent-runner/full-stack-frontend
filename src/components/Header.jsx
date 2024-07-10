import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header({dash}) {
  return (
    
      <Navbar className="bg-primary">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='text-light fs-4'>
          <FontAwesomeIcon icon={faStackOverflow} size="2xl" className='fa-2x me-3'/>
          Project Fair
          {dash &&
          <button style={{marginLeft:'1000px'}} className='btn btn-info '><FontAwesomeIcon icon={faPowerOff} className='me-2' />Logout</button>}

          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    
  )
}

export default Header