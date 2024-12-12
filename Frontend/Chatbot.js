import React, { useState } from 'react'
import props from "react";
import Frontstyle from "../Styling/Frontpage.module.css"
import {Link} from "react-router-dom";

import arrowIcon from "../images/rightarrow.jpg"

const Chatbot = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

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

  const seeTOpicsDetails = () => {
    setShowLogin(true);
  }



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
                  <label>Email or Phone Number</label>
                  <input type="text" placeholder="Enter email or phone" />
                  <label>Password</label>
                  <input type="password" placeholder="Enter password" />
                  <button type="submit" className={Frontstyle.submitButton}>
                    Login
                  </button>
                  <p>
                    Don’t have an account?{" "}
                    <span className={Frontstyle.link} onClick={openSignup}>
                      Create Account
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <h2>Sign Up</h2>
                  <label>Email</label>
                  <input type="email" placeholder="Enter email" />
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter phone number" />
                  <label>Create Password</label>
                  <input type="password" placeholder="Create password" />
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Confirm password" />
                  <button type="submit" className={Frontstyle.submitButton}>
                    Sign Up
                  </button>
                  <p>
                    Already have an account?{" "}
                    <span className={Frontstyle.link} onClick={() => setIsSignup(false)}>
                      Login
                    </span>
                  </p>
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
                 <Link to="Finance" style={{color:"white", textDecoration:"none"}}><h2>Personal Finance</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure repudiandae sed officia quia, alias temporibus saepe explicabo magnam facilis dolorum ratione provident soluta, inventore voluptates et nesciunt maxime expedita?</p>
          <button></button></Link>
        </div>


        <div className={`${Frontstyle.topicsCards} topicsCards`}>
                 <Link to="Bank" style={{color:"white", textDecoration:"none"}}><h2>Bank and Loans</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure repudiandae sed officia quia, alias temporibus saepe explicabo magnam facilis dolorum ratione provident soluta, inventore voluptates et nesciunt maxime expedita?</p>
          <button></button></Link>
        </div>


        <div className={`${Frontstyle.topicsCards} topicsCards`}>
                 <Link to="Finance" style={{color:"white", textDecoration:"none"}}><h2>Insurance</h2>
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