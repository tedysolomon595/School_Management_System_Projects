import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope,faPhone,faLocation} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faLinkedin,faTelegram, faTwitter} from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div className='footer'>
         
         <div className='footer-collector'>
            <div className='more-about'>
                <h3>About</h3>
                <div className='links-about'>
                    <a href='!#'>News</a>
                    <a href='!#'>Student Community</a>
                    <a href='!#'>Staffs</a>
                    <a href='!#'>
                        Find more <FontAwesomeIcon icon={faArrowRight}/>
                    </a>
                </div>
            </div>
            <div className='contacts'>
                <h3>Contact Us</h3>
                <p>
                    <FontAwesomeIcon icon={faEnvelope}/>tedy266@gmail.com
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone}/>+(251)-953-381275
                </p>
                <a href='https://www.facebook.com/schooloftomorrow.et/'>
                    <FontAwesomeIcon icon={faFacebook}/>Facebook Page
                </a>
                <a href='https://t.me/SoTinteract'>
                    <FontAwesomeIcon icon={faTelegram}/>Telegram Channel
                </a>
                <a href='https://t.me/SoTinteract'>
                    <FontAwesomeIcon icon={faTwitter}/>Twitter Page
                </a> 
                <a href='https://t.me/SoTinteract'>
                    <FontAwesomeIcon icon={faLinkedin}/>Linked Page
                </a>         
            </div>
            <div className='location'>
                <h3>Location</h3>
                <p>Main office at Bole Michael</p>
                <a href='https://goo.gl/maps/qA1Q3YAcqTPQfuR4A'>
                    <FontAwesomeIcon icon={faLocation}/>School Of Tomorrow
                </a>
            </div>
         </div>
         <div className='copy-box'>
            <p className='copyright'>&copy; 2022 Tedy Solomon. All Rights Reserved.</p>
         </div>
    </div>
  )
}
