import React from 'react';
import {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useCookies } from 'react-cookie';

const Authmodal = ({setShowModal, isSignUp }) => {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);
    // const [cookies, setCookie, removeCookie] = useCookies(['user'])

    let navigate = useNavigate();

    const handleClick = () => {
        setShowModal(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        

        try {
            if (isSignUp && ( password !== confirmPassword)) {
                setError('Passwords does not match')
                return
            }
            console.log(email, password)

            //! EL HOOK RECIBE COMO VALORES DEL REQUEST EMAIL Y HASHED_PASSWORD (ASI ESTÁ EN LA DB Y EN EL BACKEND)
            const response = await axios.post(`http://localhost:3001/users/${isSignUp ? 'signup' : 'signin'}`, {"email" : email, "hashed_password" : password});
            console.log(response)
            //TODO: LLAMAR A LA API DEL CUSTOM HOOK PARA REGISTER Y PARA LOGIN
            // setCookie('AuthToken', response.data.token)
            // setCookie('UserId', response.data.userId)

            if (response.status === 200 && isSignUp) {
                localStorage.setItem('AuthToken', response.data.token);
                localStorage.setItem('UserId', response.data.userId);
                navigate('/signup')
                
            };
            if (response.status === 200 && !isSignUp) {
                localStorage.setItem('AuthToken', response.data.token);
                localStorage.setItem('UserId', response.data.userId);
                navigate('/dashboard')
            };
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>
            ⨂
            </div>
            <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
            <p>By clicking login, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy</p>
        
            <form onSubmit={handleSubmit}>
                <input 
                type="email"
                name="email" 
                id="email" 
                placeholder="Email address" 
                required={true} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Password" 
                required={true} 
                onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input 
                type="password" 
                name="passwordCheck" 
                id="passwordCheck" 
                placeholder="Repeat your password" 
                required={true} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>

            </form>
            <hr/>
            <h2 className='h2--howWorks'>HOW IT WORK´S</h2>
            <p className='p--howWorks'>Using the platform to find your feline's love is very simple, use the guide to solve possible doubts. You will also find our resumes, they are humble but sexy.</p>
            <div className="btn-howWorks">ABOUT US</div>
        </div>
    );
}

export default Authmodal;
