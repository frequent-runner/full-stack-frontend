import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';




function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
    
    <div className='shadow w-75 ms-5 rounded' onMouseEnter={()=>setOpen(true)} >
      <div className=" ms-5 me-5 p-3 title d-flex justify-content-between ">
        <h4  >PROFILE</h4>
        <button className='btn btn-info'  onClick={() => setOpen(!open)} >{!open ?< FontAwesomeIcon icon={faAngleUp}  />:
        <FontAwesomeIcon icon={faAngleDown} />}</button>
        
      </div>

      <Collapse in={open}>
        <div>
          <label htmlFor="profileImg">
            <input id='profileImg' type="file" style={{display:"none"}}/>
            <img src="https://cdn.dribbble.com/users/5534/screenshots/14230133/profile_4x.jpg" style={{widows:'100px',height:'130px',borderRadius:'50%'}} alt="" />
          </label>
    
          <div className="justify-content-center align-items-center mb-5 p-3">
            <input type="text" className='rounded w-100 mt-3 mb-3 p-2' placeholder='LinkedIn'/> 
            <input type="text"  className='rounded w-100 p-2'placeholder='GitHub'/> 
            <button className='btn btn-warning w-100 mt-4 p-2'>update</button>
          </div>
        </div>
      </Collapse>
         
      
      </div>
    
    

    </>
  )
}

export default Profile