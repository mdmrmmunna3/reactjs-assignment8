import React from 'react';
import logo from '../../imge/stock-vectswimming-club-logo-.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container shadow'>
            <div className='d-flex align-items-center'>
                <div className='logo-title'>
                    <img src={logo} alt="" />
                </div>
                <h3 className='header-text'>Dashing Shark Club</h3>
            </div>
                <p className='club-text-title'>Select today's Your Favorite Swimmingexercise and do your workout!</p>
        </div>
    );
};

export default Header;