import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
        <div>
      <div className="row  bg-primary" style={{ height: '250px' }}>
        <div className="col-md-1"></div>
        <div className="col-md-3 mt-5">
          <h2><FontAwesomeIcon icon={faStackOverflow} style={{ color: "#FFD43B", }} className='me-3 ' />
            <span className='text-warning ms-4 fs-3'>Project Fair</span> </h2>
          <p style={{ textAlign: 'justify' }} className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure facilis corporis repudiandae, repellat voluptatem beatae quaerat vel distinctio voluptatibus deserunt accusamus, ipsa blanditiis inventore enim ipsum officiis ab cupiditate! Reiciendis!</p>

        </div>

        <div className="col-md-2  mt-5   d-md-flex justify-content-center ">  
          <div >
            <h4 className='mb-3'>Links</h4>
            <p ><Link style={{color:'black'}} to={'/'}>Home Page</Link></p>
            <p className='mt-3'><Link style={{color:'black'}} to={'/wishlist'}>Wishlist</Link></p>
            <p><Link style={{color:'black'}} to={'/cart'}>Cart</Link></p>

          </div>
        </div>
        <div className="col-md-2 mt-5 d-md-flex justify-content-center">
          <div>
            <h4>Guides</h4>
            <p className='mt-4'>React</p>
            <p>React Bootstrap</p>
            <p>Bootwatch</p>
          </div>
        </div>
        <div className="col-md-3 mt-5">
          <h4>Contacts</h4>
          <div className='d-flex mt-4'>
            <input type="text" className='form-control' placeholder='Email ID' />
            <button className='btn btn-warning ms-3'>Subscribe</button>
          </div>
          <div className='d-flex mt-4 d-flex justify-content-between '>
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
            <FontAwesomeIcon icon={faLinkedin}  size="2xl"/>
          </div>
        </div>
        <div className="col-md-1"></div>

      </div>
    </div>
    </div>
  )
}

export default Footer