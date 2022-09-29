import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Information from '../Information/Information';
import './Club.css'
const Club = () => {
    const [exercises, setExercise] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])

    const handleAddToList = () => {
        console.log('this is click handler')
    }
    return (
        <div className=' club-container'>
            <div className=" exercise-container">
               {
                exercises.map(exercise => <Exercise 
                    key={exercise.id}
                    exercise={exercise}
                    handleAddToList = {handleAddToList}
                    ></Exercise>)
               }
            </div>
            <div className="details-info-container">
                <Information></Information>
            </div>
        </div>
    );
};

export default Club;