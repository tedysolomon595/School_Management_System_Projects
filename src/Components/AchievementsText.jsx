import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/scss';
export default function AchievementsText() {
    const text=[
        {
            date:"July 19 , 2016",
            description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."

        },
        {
            date:"June 1 , 2015",
            description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            
        },
        {
            date:"September 30 , 2020",
            description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."

        },
        {
            date:"October 12 , 2016",
            description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            
        },
        {
            date:"May 10 , 2016",
            description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."

        },
        {
            date:"May 19 , 2020",
            description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            
        },
        {
            date:"July 30 , 2017",
            description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."

        },
        {
            date:"July 20 , 2018",
            description:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            
        },
        
    ]
  return (
    <div className='AchievementsText'>
          {window.innerWidth>768&&<Swiper
             slidesPerView={4}
             grabCursor={true}
             spaceBetween={10}
             className='text-container'
          >
            {text.map((item,index)=>(
                <SwiperSlide className='div'>
                    <p>{item.date}</p>
                    <p>{item.description}</p>
                </SwiperSlide>
            ))}    
          </Swiper>}
          {window.innerWidth<=768&&<Swiper
             slidesPerView={2}
             grabCursor={true}
             spaceBetween={10}
             className='text-container'
          >
            {text.map((item,index)=>(
                <SwiperSlide className='div'>
                    <p>{item.date}</p>
                    <p>{item.description}</p>
                </SwiperSlide>
            ))}    
          </Swiper>}
          {window.innerWidth<=480&&<Swiper
             slidesPerView={1}
             grabCursor={true}
             spaceBetween={10}
             className='text-container'
          >
            {text.map((item,index)=>(
                <SwiperSlide className='div'>
                    <p>{item.date}</p>
                    <p>{item.description}</p>
                </SwiperSlide>
            ))}    
          </Swiper>}       
    </div>
  )
}
