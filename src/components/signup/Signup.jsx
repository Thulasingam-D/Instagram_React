import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '/src/components/signup/Signup.css'

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card instagram-card p-4 text-white">
        <h1 className="text-center insta-logo">Instagram</h1>
        <p className="text-center">Sign up to see photos and videos from your friends.</p>
        
        <button className="btn btn-primary w-100 mb-3">
          <i className="fab fa-facebook"></i> Log in with Facebook
        </button>

        <div className="d-flex align-items-center mb-3">
          <hr className="flex-grow-1 text-white" />
          <span className="mx-2">OR</span>
          <hr className="flex-grow-1 text-white" />
        </div>

        <input type="text" className="form-control mb-2" placeholder="Mobile Number or Email" />
        <input type="password" className="form-control mb-2" placeholder="Password" />
        <input type="text" className="form-control mb-2" placeholder="Full Name" />
        <input type="text" className="form-control mb-2" placeholder="Username" />

        <p className="small text-center">
          People who use our service may have uploaded your contact information to Instagram. 
          <a href="#"> Learn More</a>
        </p>

        <p className="small text-center">
          By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookies Policy</a>.
        </p>

        <button className="btn btn-primary w-100">Sign up</button>
      </div>
    </div>
  );
};

export default Signup;
