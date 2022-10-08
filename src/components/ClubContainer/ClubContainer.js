import React, { useEffect, useState } from 'react';
import ExerciseCart from '../ExerciseCart/ExerciseCart';

import './ClubContainer.css'
const ClubContainer = () => {
    const [exercises, setExercise] = useState([])

    const [exerciseTimes, setexerciseTimes] = useState([]);

    useEffect(() => {
        const data = 'data.json';
        console.log(data)
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])

    const handleAddToList = (exercises) => {
  
        const newTime = [...exerciseTimes, exercises]
        setexerciseTimes(newTime);
        
     }

    return (
        <div className='club-container'>
            <div className=" exercise-container">
                {
                    exercises.map(exercise => <ExerciseCart
                        key={exercise.id}
                        exercise={exercise}
                        handleAddToList = {handleAddToList}
                        ></ExerciseCart>)
                }
                </div>
            
                <div className="details-info-container">
                   
                </div>
        </div>
    );
};

export default ClubContainer;