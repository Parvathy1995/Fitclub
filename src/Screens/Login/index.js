import "./styles.css";
import Footer from "../../Components/Footer";



function Login() {
    

   
    return (
      
        <div>
        <div className="contact">
    
    <div className="ContactContent">
      {/*  */}
      <form action="" >
      <div className="headc"><h6 >Login</h6></div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="username"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>

       
        


        <button className="btn">Login</button>
      </form>
      {/*  */}
    </div>
  </div>
  <div><Footer/></div>
        </div>
      
    
    
    
    );
      
      
  }
  export default Login;