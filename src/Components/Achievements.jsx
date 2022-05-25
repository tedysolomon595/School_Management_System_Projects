import React from 'react'
import AchievementsText from './AchievementsText'
export default function Achievements() {
    const achievements=[
        "../img/Students/img_8.jpg",
        "../img/Students/img_9.jpg",
        "../img/Students/img_10.jpg",
        "../img/Students/img_11.jpg",
        "../img/Students/img_12.jpg",
        "../img/Students/img_13.jpg"
    ]
    const [count,setCount]=React.useState(0)
    
  return (
    <div className='Achievements'>
        <h2 className='title'>Achievements </h2>
        <AchievementsText/>
        <div className='students-img-container'>
            {achievements.map((img,index)=>(
                count===index&&<div className='student-img'>
                    <img src={img} alt='' />
                </div>
            ))}
        </div>
        
        <div className='circle-button'>
            {achievements.map((img,index)=>(
                <span className={count===index?'circle active':'circle'} role='button' tabIndex={index} onClick={()=>setCount(index)}></span>
            ))}
        </div>
    </div>
  )
}
