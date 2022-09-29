import React from 'react';
import './ExerciseDetails.css'
const ExerciseDetails = () => {
    return (
        <div className='exerise-detailse-container'>
            <h5>Exercise Details</h5>
            <div className="exercise-time">
                <p>Exercise time</p>
                <p className='execrise-minitue'>0 minute</p>
            </div>
            <div className="breakTime">
            <p>Break time</p>
                <p className='break-minitue'>0 minute</p>
            </div>
        </div>
    );
};

export default ExerciseDetails;