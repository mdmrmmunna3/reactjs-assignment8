import React from 'react';
import logo from '../../imge/fitness-gym.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container shadow'>
            <div className='logo-titel'>
                <img src={logo} alt="" />
                <h2 className='header-text'>Health & Fitness Workout-Club</h2>
            </div>
            <div className='link'>
                <a href="/Home">Home</a>
                <a href="/Contact-us">Blog</a>
            </div>
            
        </div>
    );
};

export default Header;