import React from 'react';
import logo from '../../imge/fitness-gym.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <h2 className='header-text'>Health & Fitness Workout-Club</h2>
        </div>
    );
};

export default Header;