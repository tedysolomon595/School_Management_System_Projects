import React from 'react'

export default function StaffSchoolCard(props) {
  return (
    <div className='StaffSchoolCard'>
        <div className='imge-card'>
           <img src={props.img} alt=''/>
        </div>
        <div className='content'>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}
//
