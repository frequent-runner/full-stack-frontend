import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'


function Project() {
  return (
    <>
    <Header/>
    <h1 className='text-center mt-5'>Projects</h1>
    <div className="row w-100 mt-5">
      <div className="col-md-4"></div>
      <div className="col-md-4 d-flex">
        <input type="text" placeholder='Technologies' className='form-control'/>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{marginTop:'10px ',marginLeft:'-30px'}} className='text-secondary'/>
      </div>
      <div className="col-md-4"></div>
    </div>

    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4">
          <ProjectCard/>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>

    </div>
    <p className='text-center text-danger mt-5 fs-3'>No Project to Display</p>
    </>
  )
}

export default Project