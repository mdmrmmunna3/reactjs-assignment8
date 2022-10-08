import React, { useEffect, useState } from 'react';
import SwimmingExerciseCart from '../SwimmingExerciseCart/SwimmingExerciseCart';

import './ClubContainer.css'
const ClubContainer = () => {
    const [swmmingExercises, setSwmmingExercises] = useState([])

    const [exerciseTimes, setexerciseTimes] = useState([]);

    useEffect(() => {
        const data = 'data.json';
        console.log(data)
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSwmmingExercises(data))
    }, [])

    const handleAddToList = (swmmingExercises) => {
  
        const newTime = [...exerciseTimes, swmmingExercises]
        setexerciseTimes(newTime);
        
     }

    return (
        <div className='club-container'>
            <div className=" swimming-exercise-container">
                {
                    swmmingExercises.map(swmmingExercise => <SwimmingExerciseCart
                        key={swmmingExercise.id}
                        exercise={swmmingExercise}
                        handleAddToList = {handleAddToList}
                        ></SwimmingExerciseCart>)
                }
                </div>
            
                <div className="details-info-container">
                   
                </div>
        </div>
    );
};

export default ClubContainer;