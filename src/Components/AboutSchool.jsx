import React from 'react';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function AboutSchool(props) {
  return (
    <div className='about-school'>
       <div className='about-school-left'>
          <div className='logo'>
              <p className='logo-svg'>
                  <FontAwesomeIcon icon={faLightbulb}/>
                  <span>School<b>Of</b>Tomorrow</span>
              </p>
             
          </div>
          <p className='enlightment'>
                 <span>Time of</span> Enlightment
              </p>
       </div>
       <div className='about-school-right'>
                <h2>About School of Tomorrow</h2>
                <p> 
        School of Tomorrow is a private school, which was established in September 1993.
        It is one of the most prominent schools in Ethiopia, providing quality education at Nursery, Primary, Secondary and Pre-college levels.
        The School is known for providing high quality education including strong English background, accelerated curriculum, small class size, and individual attention as well as a healthy and nurturing environment. 
        Students are educated well so that they will be wholesome citizens of the world.</p>
        <p>School of Tomorrow is an ever expanding educational establishment highly sought for by both parents and students.
            It stands as one of the most popular schools with its well-trained teaching staff and overall conducive teaching-learning atmosphere.
        </p>
        <p>The School is located in ten different parts of Addis Ababa City, the capital of Ethiopia. 
        It has three branches in Bole sub-city (Hayahulet, Rwanda & Bole Eyerusalem) three branches in Yeka Sub city ( Misrak, CMC & Lem ), One branch in Arada Sub city (Ras Desta), three branches in Nifassilk Lafto Sub City  (Bisrat, Gofa and Mekanisa).
        This makes the school easily accessible to students/ parents from different parts of the city.
        </p>
        <p>
        It stands as one of the most popular schools with its well-trained teaching staff and overall conducive teaching-learning atmosphere.
        The School provides an atmosphere conducive for focused learning.  Spacious athletic compound and fields well equipped laboratories, libraries, other activities rooms and creatively designed buildings that complement the natural beauty of the different branches of the school all help to make School of Tomorrow not only educationally excellent but also aesthetically beautiful. 
        However, each one of the school branches is unique in the way that it adapts to its particular circumstances.
        </p>
       </div>
    </div>
  )
}
