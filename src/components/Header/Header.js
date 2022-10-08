import React from 'react';
import logo from '../../imge/gym-logo-strong.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container shadow'>
            <div className='d-flex align-items-center'>
                <div className='logo-title'>
                    <img src={logo} alt="" />
                </div>
                <h3 className='header-text'>The Muscle and Strength Club</h3>
            </div>
                <p className='club-text-title'>Select today's Your Favorite exercise and do your workout!</p>
        </div>
    );
};

export default Header;