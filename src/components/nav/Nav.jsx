import React from 'react';
import whiteLogo from "../../images/petLove-Logo-full.svg"; 
//TODO: importar diferentes logos para distinguir si el usuario ha hecho login o no
import colorLogo from "../../images/petLove-Logo-full.svg";

const Nav = ({minimal, authToken, setShowModal, showModal, setIsSignUp}) => {

    //?  minimal is set to distinguish between display one logo or another logo

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false); //its false because when clicking we are logging in
    }

    return (
        <nav className='isotipo'>
            <div className="logo-container">
                <img
                className="logo-isotipo"
                src={minimal ? colorLogo : whiteLogo}
                alt="logo"
                />
                {/* //TODO: Añadir NavLink para la pagina de about us */}
            </div>
            <div className='container-nav'>
            <h2 className="asg">Inicio</h2>
            <h2 className="asg">About Us</h2>
            <h2 className="asg">Contact</h2>
            </div>
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
}

export default Nav;
