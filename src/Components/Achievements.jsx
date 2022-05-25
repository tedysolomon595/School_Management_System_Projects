import React from 'react'
import AchievementsText from './AchievementsText'
export default function Achievements() {
   
  return (
    <div className='Achievements'>
        <h2 className='title'>Achievements </h2>
        <AchievementsText/>
        <div className='students-container'>
            <div className='text-container'>
               <h2 className='title'>Our Laboratory is organized by :</h2>
               <p>Full of laboratory equipments and chemicals</p>
               <p>The manuals are prepared properly for the students.</p>
               <p>A center for innovation for our students for expermenting on their idea.</p>
               <p>Laboratory assistances works during regular time.</p>
               <p>There are also safety measures for protection and preventing damages.</p>
            </div>
            <div className='student-img'>
              <img src='../img/Slide/techLab.gif' alt='' />
            </div>           
        </div>
    </div>
  )
}
