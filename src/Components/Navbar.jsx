import {React,useEffect,useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function Navbar(props) {
  const location=useLocation()
  const links=[
    {
      name:"Home",
      path:"/"
    },
    {
      name:"About Us",
      path:"/AboutUs"
    },
    {
      name:"Contacts",
      path:"/Contacts"
    },
    {
      name:"Calender",
      path:"/Calender"
    },
    {
      name:"News Announcement",
      path:"/NewsAnnouncement"
    },
    {
      name:"Schedule",
      path:"/Schedule"
    },
    {
      name:"Login",
      path:"/Login"
    },
    {
      name:"Register",
      path:"/Register"
    }
  ]
  const [setting,setSetting]=useState(
    {
      '--background-color': '#fff',
      '--text-color': '#000',
      '--text-light': 'rgba(0, 0, 0, 0.5)',
      '--important-color': 'rgb(255, 0, 86)',
      '--shadow-color': '#abb8c3',
      '--link-color': '#fff',
      '--animation-speed': 1,
      
    }
  )
  const [_theme,_setTheme]=useState(props._theme)
  const themes=[
    {
      '--background-color': '#fff',
      '--text-color': '#000',
      '--text-light': 'rgba(0, 0, 0, 0.5)',
      '--important-color': 'rgb(255, 0, 86)',
      '--shadow-color': '#abb8c3',
      '--link-color': '#fff',
      '--animation-speed': 1
      
      
    },
    {
      '--background-color': 'rgb(50,50,50)',
      '--text-color': '#fff',
      '--text-light': '#fff',
      '--important-color': 'rgb(255, 0, 86)',
      '--shadow-color': '#abb8c3',
      '--link-color': '#fff',
      '--animation-speed': 1 
    }
  ]
  
  function changeTheme(i){
     const theme={...themes[i]}
     _setTheme(i===0?"light":"dark")
     let _setting={...setting}
     for(let key in theme){
       _setting[key]=theme[key]
     }
     setSetting(_setting);
     
  }
  
  useEffect(()=>{
    console.log(setting)
    const root=document.documentElement;
    for(let key in setting)
    {
      root.style.setProperty(key,setting[key])
    }
},[setting])
  return (
    <div className='navbar'>
       <div className='logo'>
          <Link to='/' >
            <h2 className={_theme==="dark"&&"active"}>School<span>Of</span>Tomorrow</h2>
          </Link>
       </div>
       <div className='nav-links'>
           {links.map((link,index)=>(
             <Link to={link.path} className={location.pathname===link.path?"link active":"link"}>{link.name}</Link>
           ))}          
       </div>
       <div className='light-dark'>
              <div className={_theme==="dark"?"dark active":"dark"} onClick={()=>changeTheme(1)}>
                   
              </div>
              <div className={_theme==="light"?"light active":"light"}  onClick={()=>changeTheme(0)}>
                  
              </div>
       </div>
    </div>
  )
}
