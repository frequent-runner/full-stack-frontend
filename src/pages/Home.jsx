import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../assets/img6.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="container-fluid bg-primary " style={{height:'100vh'}}>
        <Row className='align-items-center p-3 p-md-5'>
          <Col xs={12} md={6}>
          <h1 className='text-light' style={{fontSize:'75px'}}>Project Fair</h1>
          <p className='mt-3 '> One stop destination for all software development projects</p>
          <Link to={'/login'}><button className='btn btn-warning  mt-3 me-5'>Get Started<FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button></Link>
          <Link to={'/dashboard'}><button className='btn btn-warning mt-3'>Manage Project<FontAwesomeIcon icon={faArrowRight} /></button></Link>

          </Col>
          <Col xs={12} md={6}>
          <img src={titleimage} className='w-75' style={{marginTop:'150px'}}/>
          </Col>
        </Row>
      </div>

      <div className="container-fluid">
        <h1 className='mt-5 text-center'>Explore Our Projects</h1>
        <div className="row">
          <div className="col-md-4 p-4">
            <ProjectCard/>
          </div>
          <div className="col-md-4 p-4">
          <ProjectCard/>
          </div>
          <div className="col-md-4 p-4">
          <ProjectCard/>
          </div>
        </div>
        <Link to={'/project'} className='text-center text-danger'><h5>See More Projects</h5></Link>

      </div>
    </>
  )
}

export default Home