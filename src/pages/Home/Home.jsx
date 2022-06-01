import React from "react";
import logo from '../../images/petLove-Logo.svg';
import Authmodal from "../../components/AuthModal/AuthModal"
import { useState } from "react";
import Nav from '../../components/Nav/Nav';
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const authToken = localStorage.getItem("AuthToken");
  
  const handleClick = () => {
    if(authToken) {
      localStorage.clear()
      window.location.reload()
      return 
    }
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div className="overlay">
      <Nav minimal={false} 
           isPage={true}
           authToken={authToken} 
           setShowModal={setShowModal} 
           showModal={showModal}
           setIsSignUp={setIsSignUp}
           />
      <div className="home">
        <div className="div-container--title">
        <img className="img-logo" src={logo} alt="Logo" />
        {/* <img src="./img/petLove-Logo.png'"/> */}
          <h1 className="title-h1">Pet <span className="boldLove">Lof</span><span className="copyRightSpan">®</span></h1>
          <div className="div-container--buttons">
          <button className="primary-button" onClick={handleClick}>
            {authToken ? "Signout" : "Create Account"}
          </button>
          </div>
        </div>

        {showModal && (
          <Authmodal  
            setShowModal={setShowModal}
            isSignUp={isSignUp}
          />
        )}
      </div>
    </ div>
  );
};


export default Home;
