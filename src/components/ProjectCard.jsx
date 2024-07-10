import React from 'react'
import Card from 'react-bootstrap/Card';
import projImg from '../assets/img6.png'
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';





function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
    
      <Card style={{ width: '100%' }} className='shadow' onClick={handleShow}>
      <Card.Img variant="top" src={projImg} width={'100%'} />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
      </Card.Body>
    </Card>
   

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <img src={projImg} width={'100%'} />
            </Col  >
            <Col sm={12} md={6}>
            <h4>Discriptions:</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse hic cupiditate vitae aperiam ab reprehenderit non aspernatur ea! Voluptatem quibusdam, maxime labore possimus esse distinctio accusantium saepe! Nobis, reiciendis?</p>
            <h4 className='mt-3'>Technologies</h4>
            <p>React</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className='justify-content-start'>
          <Link to={''}><FontAwesomeIcon icon={faGithub} className='fa-2x' /></Link>
          <Link to={''}><FontAwesomeIcon icon={faLink} className='fa-2x ms-4' /></Link>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default ProjectCard