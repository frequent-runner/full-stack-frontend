import React from 'react'

import Header from '../components/Header';
import Profile from '../components/Profile';
import Myproject from '../components/Myproject';
import { Col, Row } from 'react-bootstrap';


function Dashboard() {
  return (
    <>
    <Header dash={true}/>
    <h1 className='p-5'>Welcome <span className='text-warning'>User</span></h1>

    <Row className='mt-5'>
      <Col sm={12} md={8}>
      <Myproject/>
      </Col>
      <Col sm={12} md={4}>
      <Profile/>
      </Col>

    </Row>
    
    
    </>
  )
}

export default Dashboard