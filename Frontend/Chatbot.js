import React, { useState } from 'react'
import props from "react";
import Frontstyle from "../Styling/Frontpage.module.css"
import {Link} from "react-router-dom";

import arrowIcon from "../images/rightarrow.jpg"

const Chatbot = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [loginFormData, setLoginFormData] = useState({ useremail: '', password: '' });
  const [signFormData, setSignFormData] = useState({ name: '', useremail: '', userphonenumber: '', password: '', confirmpassword: '' });


  const openLogin = () => {
    setShowLogin(true);
    setIsSignup(false);
  };

  const openSignup = () => {
    setIsSignup(true);
  };

  const closeModal = () => {
    setShowLogin(false);
    setIsSignup(false);
  };

  // const handleSwitch = () => {
  //   setIsLogin(!isLogin);
  //   setFormData({ email: '', password: '', confirmPassword: '' });
  // };

  const seeTOpicsDetails = () => {
    setShowLogin(true);
  }

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const dataToSend = {
      email: loginFormData.useremail,
      password: loginFormData.password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      const data = await response.json();
      alert(data.success || data.error);
      if (response.ok) {
        closeModal();
      }
    } catch (error) {
      alert('Error during login. Try again.');
    }
  };



  // Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    // Ensure password and confirmPassword match
    if (signFormData.password !== signFormData.confirmpassword) {
        alert("Passwords do not match!");
        return;
    }

    const dataToSend = {
        userename: signFormData.userename,
        useremail: signFormData.useremail,
        userphonenumber: signFormData.userphonenumber,
        password: signFormData.password,
        confirmpassword: signFormData.confirmpassword,
    };

    try {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.success);
            closeModal();
        } else {
            alert(data.error || 'Signup failed. Please try again.');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred. Please try again later.');
    }
};

  return (
    <>
    <body style={{backgroundColor:"black"}}>
      <div className="chatbot">
        <navbar>
        <nav className={Frontstyle.navbar}>
        <div className={Frontstyle.navbarBrand}>WebpageName</div>
        <button className={Frontstyle.loginButton} onClick={openLogin}>
          Login
        </button>
      </nav>

      {showLogin && (
        <div className={Frontstyle.modal}>
          <div className={Frontstyle.modalContent}>
            <form>
              <button className={Frontstyle.closeButton} onClick={closeModal}>
                &times;
              </button>
              {!isSignup ? (
                <>
                <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                      <label htmlFor='email'>Email</label>
                      <input
                        type="text"
                        placeholder="Enter email"
                        name='email'
                        value={loginFormData.useremail}
                  onChange={(e) => setLoginFormData({ ...loginFormData, useremail: e.target.value })}
                  required
                      />
                      <label htmlFor='password'>Password</label>
                      <input
                        type="password"
                        placeholder="Enter password"
                        name='password'
                        value={loginFormData.password}
                  onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
                  required
                      />
                      <button type="submit" className={Frontstyle.submitButton}>
                        Login
                      </button>
                      <p>
                        Don’t have an account?{" "}
                        <span className={Frontstyle.link} onClick={openSignup}>
                          Create Account
                        </span>
                      </p>
                    </form>
                </>
              ) : (
                <>
                 <h2>Sign Up</h2>
                    <form onSubmit={handleSignup}>
                      <label htmlFor='name'>Name</label>
                      <input
                        type="text"
                        placeholder="Enter Name"
                        name='name'
                        value={signFormData.name}
                  onChange={(e) => setSignFormData({ ...signFormData, name: e.target.value })}
                  required
                      />
                      <label htmlFor='email'>Email</label>
                      <input
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        value={signFormData.useremail}
                  onChange={(e) => setSignFormData({ ...signFormData, useremail: e.target.value })}
                  required
                      />
                      <label htmlFor='phoneNumber'>Phone Number</label>
                      <input
                        type="number"
                        placeholder="Enter Phone Number"
                        name='phoneNumber'
                        value={signFormData.userphonenumber}
                  onChange={(e) => setSignFormData({ ...signFormData, userphonenumber: e.target.value })}
                  required
                      />
                      <label htmlFor='createPassword'>Create Password</label>
                      <input
                        type="password"
                        placeholder="Create password"
                        name='createPassword'
                        value={signFormData.password}
                  onChange={(e) => setSignFormData({ ...signFormData, password: e.target.value })}
                  required
                      />
                      <label htmlFor='confirmPassword'>Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Confirm password"
                        name='confirmPassword'
                        value={signFormData.confirmpassword}
                  onChange={(e) => setSignFormData({ ...signFormData, confirmpassword: e.target.value })}
                  required
                      />
                      <button type="submit" className={Frontstyle.submitButton}>
                        Sign Up
                      </button>
                      <p>
                        Already have an account?{" "}
                        <span className={Frontstyle.link} onClick={() => setIsSignup(false)}>
                          Login
                        </span>
                      </p>
                    </form>
                </>
              )}
            </form>
          </div>
        </div>
      )}
        </navbar>


        <main>
          <div className="main-container">
            <div className="main-content">
              <div className={`${Frontstyle.chatbotItroduction} chatbotItroduction`}>
                <div className={`${Frontstyle.chatbotIntro} chatbotIntro`}>
                  <h1>Hello !</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sequi sunt voluptate quod quas similique illo consequuntur velit itaque? Molestiae excepturi aliquid explicabo maiores sint veniam minima voluptatibus asperiores neque.</p>

                  <div className={`${Frontstyle.downforMore} downforMore`}>Scroll Down</div>

                  {/* <div className="sample-input">
                    <input type="text" placeholder='Enter something here'/>
                  </div> */}
                </div>
              </div>


              <div className={`${Frontstyle.botContentPara} botContentPara`}>
                <h1>Our ChatBot Has Trained To Perform on This Topics</h1>
              </div>


              <div className={`${Frontstyle.botTopics} botTopics`}>
               <div className={`${Frontstyle.topicsCards} topicsCards`}>
                 <Link to="/Finance" style={{color:"white", textDecoration:"none"}}><h2>Personal Finance</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure repudiandae sed officia quia, alias temporibus saepe explicabo magnam facilis dolorum ratione provident soluta, inventore voluptates et nesciunt maxime expedita?</p>
          <button></button></Link>
        </div>


        <div className={`${Frontstyle.topicsCards} topicsCards`}>
                 <Link to="/Bank" style={{color:"white", textDecoration:"none"}}><h2>Bank and Loans</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure repudiandae sed officia quia, alias temporibus saepe explicabo magnam facilis dolorum ratione provident soluta, inventore voluptates et nesciunt maxime expedita?</p>
          <button></button></Link>
        </div>


        <div className={`${Frontstyle.topicsCards} topicsCards`}>
                 <Link to="/Schemes" style={{color:"white", textDecoration:"none"}}><h2>Schemes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure repudiandae sed officia quia, alias temporibus saepe explicabo magnam facilis dolorum ratione provident soluta, inventore voluptates et nesciunt maxime expedita?</p>
          <button></button></Link>
        </div>


        <div className={`${Frontstyle.topicsCards} topicsCards`}>
                 <Link to="Finance" style={{color:"white", textDecoration:"none"}}><h2>Incometax</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure repudiandae sed officia quia, alias temporibus saepe explicabo magnam facilis dolorum ratione provident soluta, inventore voluptates et nesciunt maxime expedita?</p>
          <button></button></Link>
        </div>
      </div>
              
              
              

            </div>
          </div>
        </main>
      </div>
      
    </body>
    </>
  )
}

export default Chatbot
