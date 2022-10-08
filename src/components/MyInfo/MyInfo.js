import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import logo from '../../imge/photo.jpg'
import './MyInfo.css'
const MyInfo = () => {
    return (
        <div>
            <div className='my-info'>
                <img src={logo} alt="" />
                <div className='info'>
                    <h6 className='name'><small>Md.Mustafijur Rahman Munna</small></h6>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    <span  className='place fw-semibold'>Dhaka,Bangladesh</span></p>
                </div>
            </div>
            <div className='info-details'>
                <div className="details">
                    <p><span className='fw-bold'>50</span><sub>kg</sub> <br />Weight</p>
                </div>
                <div className="details">
                <p><span className='fw-bold'>5.5</span><br/>Height</p>
                </div>
                <div className="details">
                <p><span className='fw-bold'>19</span><sub>yrs</sub> <br />Age</p>
                </div>
            </div>
        </div>
    );
};

export default MyInfo;