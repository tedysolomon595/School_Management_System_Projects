import React from 'react'
import {faEye,faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
export default function Login() {
  const [visible,setVisible]=React.useState(false)
  return (
    <div className='login-form'>
        <div className='about-school'>
           <h2>Guideline</h2>
           <div className='guidelines'>
              <p>
                <FontAwesomeIcon icon={faCheck}/>
                First You should have password priviliged from the school.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck}/>
                Then enter username and password taken from the school.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck}/>
                If you forgot the password click <span>forgot password</span> link.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck}/>
                If you have not already registered in the school please click <span>Register</span> link and register.
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck}/>
                After registeration is done , wait for about 1 minute to receive the verification code and enter that code and then verify to successfully registered. 
              </p>
              
           </div>
        </div>
        <div className='form-section'>
            <h2>Log in</h2>
            <form className='form'>
                <label className='email-text'>Email</label>
                <input type='email' className='email' placeholder='Email' required/>
                <div className='password-label'>
                  <label className='password-text'>Password</label>
                  <label className='visible'>
                    Visible 
                    <span className='visible-btn' onClick={()=>setVisible(!visible)}>
                       {visible===true?<FontAwesomeIcon icon={faEye}/>:<FontAwesomeIcon icon={faEyeSlash}/>}
                    </span>
                  </label>
                </div>
                <input type={visible===false?"password":"text"} className='password' placeholder='Password' required/>
                <button className='btn'>Log in</button>
            </form>
            <div className='linke-here'>
                <a href='!#'>Register Here</a>
                <a href='!#'>Forgot Password?</a>
            </div>
        </div>
    </div>
  )
}
// Hi there I am Tedy  Solomon
