import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "VoyageTester",
    password: "apasswordforVoyageTester",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://innvoyage-hotel-management.onrender.com/api/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/homepage")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (


    <div className="login">
      <div className="row">
        <div className="col-12 col-md-6 left">
       <h1>Welcome to InnVoyage!</h1>
       <h5>An Elegant Hotel Booking Experience Right at Your Fingertips.</h5> 
       <div className="notebox">
       Note: This is a <a href="https://syedmoinahmed.dev/" target="_blank" rel="noreferrer">portfolio</a> project and is not intended for commercial use. So don't pack your bags just yet! 😄
       <br/>
       </div>
       <div className="listBox">
       <b>Features:</b>
       <ul>
        <li className="mt-2">
          <span className="colorizer"><b>Cutting-Edge Features: </b></span>
         Our system is designed to handle even the most intricate aspects of hotel booking, including solving the notorious "race condition" problem. 
        </li>
        <li>
        <span className="colorizer"><b>User-Friendly: </b></span>
         Navigating through our site is as easy as strolling through a 5-star hotel lobby.
          </li>
          <li>
          <span className="colorizer"><b>Source Code: </b></span>
          Interested in the behind-the-scenes? All code for this project is available on the GitHub Repository: <a href="https://github.com/iamsyed21/InnVoyage-FullStack_Hotel_Booking_App" target="_blank" rel="noreferrer">Here</a> 
          </li>
       </ul>
       </div>
        </div>
        <div className="col-12 col-md-6 right">
        <div className="lContainer">
          <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          id="username"
          value="VoyageTester"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          value="apasswordforVoyageTester"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
      <span className="colorizer"><b>Test User Loaded: </b></span>
         Curious to see the functionality of the website? No need to sign up. Simply click the "Login" button to explore the site with a pre-loaded test user.
        </div>
      </div>
   
    </div>
  );
};

export default Login;
