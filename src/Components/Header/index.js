import React from 'react'
import './styles.css'
import Logo from '../Images/logo.png'
import Bar from '../Images/ham.png'


import {Routes, Route, useNavigate} from 'react-router-dom';





function Header(params) {
  const navigate=useNavigate()
  
    return (
        <div className='header'>
        
        <ul className='header-menu'>
        <img src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
        </ul>
        <li onClick={()=>navigate('/')} >Home</li>
        <li onClick={()=>navigate('plans')}>Plans</li>
        <li onClick={()=>navigate('contact')}>Contact Us</li>
       
        <li onClick={()=>navigate('testimonials')}>Testimonials</li>
        <li onClick={()=>navigate('programs')}>Programs</li>
        <li onClick={()=>navigate('gallery')}>Gallery</li>
        
    
        </ul>
       
        
      
        </div>
        
       
      );
}
export default  Header

