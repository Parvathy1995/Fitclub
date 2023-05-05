import React from "react";
import "./styles.css";
import fb from "../Images/facebook.png";
import logo from "../Images/logo.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.png";


function Footer() {
 
  return (
   <div className="footer">
   <div className="social_links">
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
   <div className='feeter' style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
   <div className="logo-f">
          <img src={logo} alt=""></img>
        </div>
   <p>Copyright © 2023 Fit club, Inc. </p>
   <p><a href="">Legal Stuff</a> | <a href=''>Privacy Policy</a> | <a href=''>Security</a></p>
   </div></div>
   
  );
}
export default Footer;
