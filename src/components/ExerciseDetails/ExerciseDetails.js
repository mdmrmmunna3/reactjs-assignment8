// import React, { useState } from 'react';
import './ExerciseDetails.css'
const ExerciseDetails = (props) => {
   const {exerciseTimes} = props;

   let totalTime = 0;
   for (const time of exerciseTimes) {
    // console.log(time)
    totalTime = totalTime + JSON.parse(time.time);
   }

    return (
        <div className='exerise-detailse-container'>
            <h5>Exercise Details</h5>
            <div className="exercise-time">
                <p>Exercise time</p>
                <p className='execrise-minitue'>{totalTime} minute</p>
            </div>
            <div className="breakTime">
            <p>Break time</p>
                <p className='break-minitue'>{localStorage.getItem('break-time')?localStorage.getItem('break-time'):0} minute</p>
            </div>
        </div>
    );
};

export default ExerciseDetails;