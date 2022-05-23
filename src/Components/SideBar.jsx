import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SideBar({links}) {
    const location=useLocation();
  return (
    <div className='SideBar'>
         <h2>School<span>of</span>Tomorrow</h2>
         {links.map((link,index)=>(
                 
                <Link to={link.path} className={location.pathname===link.path?"link active":"link"}>
                    <FontAwesomeIcon icon={link.icon}/>
                    {link.name}
                </Link>
        ))}
    </div>
  )
}
