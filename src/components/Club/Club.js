import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Club.css'
const Club = () => {
    const [exercises, setExercise] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])
    return (
        <div className='club-container'>
            <div className="exercise-container">
               {
                exercises.map(exercise => <Exercise 
                    key={exercise.id}
                    exercise={exercise}
                    ></Exercise>)
               }
            </div>
            <div className="details-info-container">
                <h2>this is details</h2>
            </div>
        </div>
    );
};

export default Club;