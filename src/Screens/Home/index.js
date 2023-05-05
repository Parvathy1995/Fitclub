import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAPI, apis } from "../../Network";

import { callsomeapi } from "./reducer";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./styles.css";
import Img from "../../Components/Images/img1.jpeg";
import Ex1 from "../../Components/Images/ex1.png";
import Ex2 from "../../Components/Images/ex2.png";
import Ex3 from "../../Components/Images/ex3.png";


import Trainer from "../../Components/Images/trainer.png";

export default function Home(props) {
  const state = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchNew = async () => {
    const result = await fetchAPI({ url: apis.food });
    dispatch(callsomeapi(result));
  };
  return (
    <div>
      <div className="start">
        <div className="left-h">
          <div className="heading">
            <div></div>
            <span> The best fitness in the country</span>
          </div>
          <div className="heading-text">
            <div>
              <span className="stroke-text">Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal body</span>
              <div className="h">
                <span>
                Lift your confidence with Fitclub
                </span>
              </div>
            </div>

            <div className="figures">
              <div>
                <span>+150 </span>
                <span>expert coaches</span>
              </div>
              <div>
                <span>+1000 </span>
                <span>members joined</span>
              </div>
              <div>
                <span>+40 </span>
                <span>fitness program </span>
              </div>
            </div>
            <div className="start-button">
              
              
              <button className="btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                 Get Started
              </button>

              <buttons className="btn">Learn More</buttons>
            </div>
            
          </div>
          
        </div>
        
        <div className="hero__img">
          <img src={Img} alt="hero-Img" />
        </div>
      </div>
      <div className="search">
        
      <div className="content">
        
      
  </div></div>
      <div className="container exercise_container">
        <div className="exercise_top">
          <h2 className="section_title">
            Benefits of <span className="highlighte">Exercise</span>
          </h2>
          <p>
          Exercise is an essential component of a healthy lifestyle, <br/>
          and there are numerous benefits associated with regular physical activity.<br/>
           For instance, exercise can improve cardiovascular health by strengthening the heart and improving blood flow
          </p>
        </div>
        <div className="exercise_wrapper">
          <div className="exercise_item">
            <span className="exercise_icon">
              <img src={Ex1} alt=" " />
            </span>
            <div className="exercise_content">
              <h4>Healthy Life</h4>
              <p>
              Living a healthy life involves making choices that support your physical, mental,
               and emotional well-being. 
               
              </p>
            </div>
          </div>

          <div className="exercise_item">
            <span className="exercise_icon">
              <img src={Ex2} alt=" " />
            </span>
            <div className="exercise_content">
              <h4>Incresed Flexibility</h4>
              <p>
              willingness to adjust one's plans or approach in response to new information or unexpected challenges
              </p>
            </div>
          </div>

          <div className="exercise_item">
            <span className="exercise_icon">
              <img src={Ex3} alt=" " />
            </span>
            <div className="exercise_content">
              <h4>Reducing Pressure</h4>
              <p> Reducing blood pressure can help to lower these risks and improve overall health.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="start_wrapper">
          <div className="start_image">
            <img src={Trainer} alt="" />
          </div>
          <div className="start_content">
            <h2 className="section_title">Ready to make a change?</h2>
            <p>
            You can enjoy flexible memberships, unlimited classes and 24/7 access, but it's not just the stuff you'd expect from a gym, 
            it's the extra value too.
             Think new friends, way more you time, friendly teams and a judgement-free space to workout and feel-good in.
            </p>

            <button className="reg_btn"
            onClick={() => {
              navigate("/login");
            }}
          >
             Get Started
          </button>
            
          </div>
        </div>
      </div>
      <div>
      <div>
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
   
    </div>
      </div>

     
      </div>
      <div><Footer/></div>
    </div>
    
  );
}
