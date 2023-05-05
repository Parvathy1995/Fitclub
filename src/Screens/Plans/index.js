import Header from "../../Components/Header";
import Footer from "../../Components/Footer";





import "./styles.css";

 function Plans() {
  
  return (
    
    <div>
    
    
    
      <section>
      <div className="container">
      <div className="pricing-top">
      <h2 className="section-title">
      Gym <span className="highlited"> Pricing</span> Plan
      </h2>
     
      </div>
      <div className="pricing_wrapper">
      <div className="pricing-item">
      <div className="pricing_cardtop">
      <h2 className="section_title">Regular Member </h2>
      <h2 className="pricing_sectiontitle">$50 <span>/month</span></h2>
      </div>
      <div className="services">
      <ul>
            <li><span><i class="ri-checkbox-circle-line"></i> limited access to the gym</span></li>
            <li><span><i class="ri-checkbox-circle-line"></i>Customer support</span></li>
            <li><span><i class="ri-checkbox-circle-line">Trainer</i></span></li>
          <li><span><i class="ri-checkbox-circle-line"></i></span>Standard options</li>
          <li><span><i class="ri-checkbox-circle-line"></i>5 classes per week</span></li>
          </ul>
          <button className="reg">Join Now</button>
          



      </div>
      </div>
      <div className="pricing-item">
      <div className="pricing_cardtop">
      <h2 className="section_title">Premium Member </h2>
      <h2 className="pricing_sectiontitle">$100 <span>/month</span></h2>
      </div>
      <div className="services">
      <ul>
            <li><span><i class="ri-checkbox-circle-line"></i> Unlimited access to the gym</span></li>
            <li><span><i class="ri-checkbox-circle-line"></i>Customer support</span></li>
            <li><span><i class="ri-checkbox-circle-line">Personal Trainer</i></span></li>
          <li><span><i class="ri-checkbox-circle-line"></i></span>Standard options</li>
          <li><span><i class="ri-checkbox-circle-line"></i>7 classes per week</span></li>
          </ul>
          <button className="reg">Join Now</button>
          



      </div>
      </div>
      <div className="pricing-item">
      <div className="pricing_cardtop">
      <h2 className="section_title">Standerd Member</h2>
      <h2 className="pricing_sectiontitle">$70 <span>/month</span></h2>
      </div>
      <div className="services">
      <ul>
            <li><span><i class="ri-checkbox-circle-line"></i> Unlimited access to the gym</span></li>
            <li><span><i class="ri-checkbox-circle-line"></i>Customer support</span></li>
            <li><span><i class="ri-checkbox-circle-line">Personal Trainer</i></span></li>
          <li><span><i class="ri-checkbox-circle-line"></i></span>Standard options</li>
          <li><span><i class="ri-checkbox-circle-line"></i>6classes per week</span></li>
          </ul>

          
          <button className="reg">Join Now</button>
          



      </div>
      </div>
      
      

      </div>
      </div>
      </section>
      <div>
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
      <Footer/></div>
    </div>
  );
}
export default Plans;