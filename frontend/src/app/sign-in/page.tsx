import React from 'react';
import './LoginForm.css';

import { FaUserAlt, FaLock } from "react-icons/fa";
import {SignInForm} from "@/app/sign-in/sign-in-form/SignInForm";


const Login = () => {
    return (
        <>
          <SignInForm />

      {/*<div className="login-container">*/}
      {/*  <img src="/petlogo.jpg" alt="PetModel Logo" className="login-logo" />*/}
      {/*  <div className="wrapper">*/}
      {/*    <h1>Login</h1>*/}
      {/*    <form action="">*/}
      {/*      <div className="input-box">*/}
      {/*        <input type="text" placeholder="Email" required />*/}
      {/*        <FaUserAlt className="icon" />*/}
      {/*      </div>*/}
      {/*      <div className="input-box">*/}
      {/*        <input type="password" placeholder="Password" required />*/}
      {/*        <FaLock className="icon" />*/}
      {/*      </div>*/}
      {/*      <div className="remember-forgot">*/}
      {/*        <label><input type="checkbox" /> Remember Me</label>*/}
      {/*        <a href="#">Forgot Password?</a>*/}
      {/*      </div>*/}
      {/*      <button type="submit" className="login-btn">Login</button>*/}
      {/*      <div className="register-link">*/}
      {/*        <p>Don't Have an Account? <a href="#">Register</a></p>*/}
      {/*      </div>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*</div>*/}
          </>
    );  // <-- Closing parenthesis for return statement
  };  // <-- Closing curly brace for the component
  

export default Login
