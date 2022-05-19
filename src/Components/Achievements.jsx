import React from 'react'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
   function Increase(){
       if(count>achievements.length-1){
           setCount(0)
       }
       else{
        setCount(count+1)
       }
   }
  function Decrease(){
      if(count<0){
          setCount(achievements.length-1)
      }
      else{
          setCount(count-1)
      }
  }
  return (
    <div className='Achievements'>
        <div className='prev' onClick={Decrease}>
           <p>
               <FontAwesomeIcon icon={faChevronLeft}/>
           </p>
       </div>
       <div className='center'>
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
       <div className='next' onClick={Increase}>
           <p>
               <FontAwesomeIcon icon={faChevronRight}/>
           </p>
       </div>
    </div>
  )
}
