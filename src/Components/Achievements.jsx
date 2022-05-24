import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { Swiper } from 'swiper/react';
import 'swiper/scss';
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
        <div className='students-img-container'>
           <Swiper
               slideToClickedSlide={count}
               grabCursor={true}
           >
           {achievements.map((img,index)=>(
                count===index&&<div>
                    <SwiperSlide  className='student-img'>
                      <img src={img} alt='' />
                    </SwiperSlide>
                </div>
            ))}
           </Swiper>
        </div>
        
        <div className='circle-button'>
            {achievements.map((img,index)=>(
                <span className={count===index?'circle active':'circle'} role='button' tabIndex={index} onClick={()=>setCount(index)}></span>
            ))}
        </div>
    </div>
  )
}
