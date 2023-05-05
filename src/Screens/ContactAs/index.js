
import "./styles.css";
import img1 from "../../Components/Images/bag.jpg"
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
const ContactUs = () => {
  return (


    <div className="contactpage">
    {/* Contact Header */}
   
    <div className="contact">
    
    <div className="ContactContent">
      {/*  */}
      <form action="" >
      <div className="headc"><h6 >GET IN TOUCH WITH US</h6></div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Your PhoneNumber"
            required
          />
        </div>

        <div className="form-group">
          <textarea
            rows="6"
            className="form-control"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button className="btn">Submit Now</button>
      </form>
      {/*  */}
    </div>
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
  <div><Footer/></div>
    </div>
    
  ); 
}
export default ContactUs;
