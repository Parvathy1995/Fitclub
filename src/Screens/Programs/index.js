
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


import React, { useState } from 'react';

import "./styles.css";
import data from "./data.json";

 function Programs() 
 {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <>
        <div className="templateContainer">
          <div className="searchInput_Container">
            <input id="searchInput" type="text" placeholder="Search your program..." onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
          </div>
          <div className="template_Container">
            {
              data 
                .filter((val) => {
                  if(searchTerm == ""){
                    return val;
                  }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }
                })
                .map((val) => {
                  return(
                    <div className="template" key={val.id}>
                        
                        <h3>{val.title}</h3>
                        <p className="price">{val.price}</p>
                        
                    </div> 
                  )
                })
            }
          </div>
          <div className="footer-container1">
      <div className="footer-about">
        <h3>About Us</h3>
        <p>Our mission is to provide a safe and welcoming environment where individuals can achieve their fitness goals, improve their overall health and well-being, and build lifelong healthy habits</p>
      </div>
      <div className="footer-links">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Careers</a></li>
                                   
        </ul>
      </div>
      
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>London Street</p>
        <p>Ewell, UK SW 150</p>
        <p>Phone:+44 974724 1254</p>
        <p>Email: info@fitclub.com</p>
      </div>
      
     
   
    </div>
    
          <div><Footer></Footer></div>
        </div>
      </>
    )
  }
  
export default Programs;



