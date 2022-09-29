import React, { useEffect, useState } from 'react';
import BreakTimeField from '../BreakTimeField/BreakTimeField';
import Exercise from '../Exercise/Exercise';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Information from '../Information/Information';
import './Club.css'
const Club = () => {
    const [exercises, setExercise] = useState([]);

    const [exerciseTimes, setexerciseTimes] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])

    const handleAddToList = (exercises) => {
  
       const newTime = [...exerciseTimes, exercises]
    //    console.log(typeof newTime)
       setexerciseTimes(newTime);
        
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
                    <BreakTimeField></BreakTimeField>
                    <ExerciseDetails exerciseTimes={exerciseTimes}></ExerciseDetails>
                    <button className='activity-btn'>Activity Completed</button>
                </div>
            </div>
    );
};

export default Club;