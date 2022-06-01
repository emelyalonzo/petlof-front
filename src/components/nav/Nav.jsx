import React from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../../images/petLove-Logo-full.svg";
//TODO: importar diferentes logos para distinguir si el usuario ha hecho login o no
import colorLogo from "../../images/petLove-Logo-full-black.svg";

const Nav = ({
  isAbout,
  minimal,
  isPage,
  authToken,
  setShowModal,
  showModal,
  setIsSignUp,
}) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const FirstStep = localStorage.getItem("FirstStep");
  const Dashboard = localStorage.getItem("Dashboard");

  return (
    <nav className="isotipo">
      <div className="logo-container">
        <img
          className="logo-isotipo"
          src={minimal && !isAbout ? colorLogo : whiteLogo}
          alt="logo"
        />
      </div>
      
      {isPage && (
        <div className="itemsMenu-container">
          <div className="container-nav">
            <Link to="/" 
            className="containerNav--item">
              Home
            </Link>
            <Link to="/about" 
            className="containerNav--item">
              About
            </Link>
            {FirstStep && (
              <Link
                to="/signup"
                className="containerNav--item">
                Sign Up
              </Link>
            )}
            {Dashboard && (
              <Link
                to="/dashboard"
                className="containerNav--item">              
                Dashboard
              </Link>
            )}

          </div>
        </div>
      )}

      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
