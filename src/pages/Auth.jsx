import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import titleimage2 from '../assets/user-account.png'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'




function Auth({register}) {
  return (
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column" style={{height:'100vh'}}>
      <Link to={'/'} className='text-warning'><FontAwesomeIcon icon={faArrowLeft} className='me-3'/>Back To Home</Link>
      <div className="container w-75 bg-info p-3 mt-2 rounded">
        <Row>
          <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
          <img src={titleimage2} alt="" className='w-75'/>

          </Col >
          <Col sm={12} md={6} className=' d-flex justify-content-center align-items-center text-light flex-column'>
          <h3><FontAwesomeIcon icon={faStackOverflow} className='me-3'/>Project Fair</h3>
         {register? <h5>Sign Up to your Account</h5>
         :
          <h5>Sign In to your Account</h5>}
          <form className='mt-4 w-75'>
           {register&& <div className="mb-3">
              <input type="text" placeholder='Username' className='form-control'/>
            </div>}
            <div className="mb-3">
              <input type="text" placeholder='Email' className='form-control'/>
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Password' className='form-control'/>
            </div>
            <div className="mb-3">
              {register?<div>
              <button className='btn btn-warning w-100'>Register</button>
              <p>Already a User? Click here to <Link to={'/login'} className='text-danger'>Login</Link></p>
              </div>
              :
              <div>
              <button className='btn btn-warning w-100'>Login</button>
              <p>New User ? Click here to <Link to={'/register'} className='text-danger'>Register</Link></p>
            </div>}
            </div>
          </form>

          </Col>

        </Row>

      </div>
    </div>
    </>
  )
}

export default Auth