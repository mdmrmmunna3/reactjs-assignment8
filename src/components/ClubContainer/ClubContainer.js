import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import MyInfo from '../MyInfo/MyInfo';
import SwimmingExerciseCart from '../SwimmingExerciseCart/SwimmingExerciseCart';
import SwimmingExerciseDetails from '../SwimmingExerciseDetails/SwimmingExerciseDetails';

import './ClubContainer.css'
const ClubContainer = () => {
    const [swmmingExercises, setSwmmingExercises] = useState([])

    const [exerciseTimes, setexerciseTimes] = useState([]);

    const [breaktime, setBreakTime] = useState(0);
    console.log(breaktime);

    useEffect(() => {
        const data = 'data.json';
        console.log(data)
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSwmmingExercises(data))
    }, [])

    const handleAddToList = (swmmingExercises) => {
  
        const exerciseTime = [...exerciseTimes, swmmingExercises]
        setexerciseTimes(exerciseTime);
        
     };

     const handleBreakTime = (breakTime) => {
        setBreakTime(breakTime);
        localStorage.setItem('break-time', breakTime)
        }

    return (
        <div className='club-container'>
            <div className=" swimming-exercise-container">
                {
                    swmmingExercises.map(swmmingExercise => <SwimmingExerciseCart
                        key={swmmingExercise.id}
                        swmmingExercise={swmmingExercise}
                        handleAddToList = {handleAddToList}
                        ></SwimmingExerciseCart>)
                }
                </div>
            
                <div className="details-info-container">
                   <MyInfo></MyInfo>
                   <BreakTime handleBreakTime={handleBreakTime}></BreakTime>
                   <SwimmingExerciseDetails exerciseTimes={exerciseTimes}></SwimmingExerciseDetails>
                </div>
        </div>
    );
};

export default ClubContainer;