import React from 'react'
import ImageContainer from './ImageContainer'
import StaffSchoolCard from './StaffSchoolCard'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/scss';
export default function StaffAndSchool() {
   const [_index,setIndex]=React.useState(3)
   function slideToNext(){
       if(_index>=7)
        setIndex(7)
       else
        setIndex(_index+1)
   }
   function slideToPrev(){
     if(_index<=3)
       setIndex(3)
     else{
       setIndex(_index-1)
     }
   }
  return (
    <div className='StaffAndSchool'>
       
       <div className='card-container'>
           {window.innerWidth>768&&<Swiper 
             spaceBetween={10}
             slidesPerView={3}
             grabCursor={true} 
             onSlideNextTransitionStart={slideToNext}
             onSlidePrevTransitionStart={slideToPrev}
             className="card-container"
           >
              {ImageContainer.map((item,index)=>(
                <SwiperSlide className='slidinding-card'>
                    <StaffSchoolCard img={item.img} title={item.title} desc={item.desc}/>
                </SwiperSlide>
               ))}
           </Swiper>}
           {window.innerWidth<=768&&<Swiper 
             spaceBetween={10}
             slidesPerView={2}
             grabCursor={true} 
             onSlideNextTransitionStart={slideToNext}
             onSlidePrevTransitionStart={slideToPrev}
             className="card-container"
           >
              {ImageContainer.map((item,index)=>(
                <SwiperSlide className='slidinding-card'>
                    <StaffSchoolCard img={item.img} title={item.title} desc={item.desc}/>
                </SwiperSlide>
               ))}
           </Swiper>}
           {window.innerWidth<=480&&<Swiper 
             spaceBetween={10}
             slidesPerView={1}
             grabCursor={true} 
             onSlideNextTransitionStart={slideToNext}
             onSlidePrevTransitionStart={slideToPrev}
             className="card-container"
           >
              {ImageContainer.map((item,index)=>(
                <SwiperSlide className='slidinding-card'>
                    <StaffSchoolCard img={item.img} title={item.title} desc={item.desc}/>
                </SwiperSlide>
               ))}
           </Swiper>}
                     
       </div>
       <div className='circle-button'>
            {ImageContainer.map((img,index)=>(
                <span className={_index===index+1?'circle active':'circle'} role='button' tabIndex={index}></span>
            ))}
      </div>
    </div>
  )
}
