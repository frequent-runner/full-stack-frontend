import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn btn-success' onClick={handleShow}>Add Project</button>
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <label htmlFor="projImg">
              <input type="file"  id='projImg' style={{display:'none'}}/>
              <img src="https://w7.pngwing.com/pngs/602/266/png-transparent-add-image-icon.png" alt="no image" width={'100%'} />
            </label>
            </Col>
           < Col sm={12} md={6}>
           <form className='p-3'>
            <div className="mb-3">
              <input type="text"  placeholder='Title' className='form-control'/>
            </div>
            <div className="mb-3">
            <input type="text"  placeholder='Language' className='form-control'/>
            </div>
            <div className="mb-3">
            <input type="text"  placeholder='Github' className='form-control'/>
            </div>
            <div className="mb-3">
            <input type="text"  placeholder='Website' className='form-control'/>
            </div>
            <div className="mb-3">
            <textarea placeholder="Overview" className='form-control' rows={'4'}></textarea>
            </div>

           </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddProject