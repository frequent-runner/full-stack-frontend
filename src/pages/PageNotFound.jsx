import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PageNotFound() {
  return (
    <>
    <div style={{marginTop:'100px'}} className='d-flex align-items-center justify-content-center '>
        <img src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif" alt="" />
        
    </div>
    <div className='d-flex align-items-center justify-content-center'>
        <button className='btn btn-primary mb-5'><FontAwesomeIcon icon={faArrowLeft} size="xl" />    Back To Home</button>
    </div>
    </>
  )
}

export default PageNotFound