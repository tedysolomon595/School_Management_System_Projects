import React from 'react'
import ImageContainer from './ImageContainer'
import StaffSchoolCard from './StaffSchoolCard'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/scss';
export default function StaffAndSchool() {

  return (
    <div className='StaffAndSchool'>
       
       <div className='card-container'>
           <Swiper 
             spaceBetween={5}
             slidesPerView={3}
             grabCursor={true}
             
             className="card-container"
           >
              {ImageContainer.map(item=>(
                <SwiperSlide className='slidinding-card'>
                    <StaffSchoolCard img={item.img} title={item.title} desc={item.desc}/>
                </SwiperSlide>
               ))}
           </Swiper>
       </div>
       
    </div>
  )
}
