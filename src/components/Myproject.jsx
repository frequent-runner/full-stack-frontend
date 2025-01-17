import React from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Myproject() {
  return (
    <>

      <div className='shadow px-4 py-4 ps-5 rounded'>
        <div className='d-flex justify-content-between'>
        <h2 className='text-success'>My Project</h2>
        <AddProject/>
        </div>
        <div className="mt-4 bg-light p-3 rounded d-flex justify-content-between">
            <h5>Media Player</h5>
            <div className='d-flex align-items-center'>  
                <EditProject/>
                <FontAwesomeIcon icon={faGlobe} className='text-warning ms-3'/>
                <FontAwesomeIcon icon={faGithub} className='text-success ms-3'/>
                <FontAwesomeIcon icon={faTrash} className='text-danger ms-3'/>


            </div>
        </div>

        </div>
            
        
        


   
    </>
  )
}

export default Myproject