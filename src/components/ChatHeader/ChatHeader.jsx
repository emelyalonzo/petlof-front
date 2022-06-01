import React from 'react';
import {useNavigate} from 'react-router-dom';

const ChatHeader = ({ user }) => {

    const navigate = useNavigate()


    const logout = () => {
        localStorage.clear()
        //set user null ???
        navigate("/")
    }

    

    return (
        <div className='chatHeader'>
            <div className='chatHeader__profile'>
                <div className='chatHeader__img'>
                    <img src={user.imageURL} alt={"photo of "+ user.first_name} className='chatHeader__img--photo'/>

                </div>
                <h3>{user.first_name}</h3>

            </div>
            <i className='log-out-icon' onClick={logout}>👋</i>
            
        </div>
    );
}

export default ChatHeader;
