import React from 'react'
import TopStudentsList from '../Components/TopStudentsList'

export default function TopRanked() {
  return (
    <div className='TopRanked'>
       <h2>Our Top Ranked Students</h2>
       <div className='top-image'>
           {TopStudentsList.map((item,index)=>(
             <div className='frame'>
               <div className='img-container'>
                  <img src={item.img} alt=''/>
               </div>
               <div className='text-content'>
                  <h4>{item.name}</h4>
                  <p><b>City : </b>{item.city}</p>
                  <p><b>Score : </b>{item.score}</p>
                  <p><b>Year : </b>{item.year}</p>
               </div>
             </div>)
           )}
       </div>
    </div>
  )
}
