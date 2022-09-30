import React, { useEffect, useState } from 'react';
import BreakTimeField from '../BreakTimeField/BreakTimeField';
import Exercise from '../Exercise/Exercise';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Information from '../Information/Information';
import Utilites from '../Utitlites/Utilites';
import './Club.css'
const Club = () => {
    const [exercises, setExercise] = useState([]);

    const [exerciseTimes, setexerciseTimes] = useState([]);

    const [breakTime, setBreakTime] = useState(0);

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
    
    const breakHandleTime = (brTime) => {
        // console.log(brTime)
        setBreakTime(brTime);
        localStorage.setItem('break-time', brTime)
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
                   {/* <BreakTimeField breakTime={breakTime} breakHandleTime = {breakHandleTime}></BreakTimeField> */}
                   <BreakTimeField breakHandleTime={breakHandleTime}></BreakTimeField>
                    <ExerciseDetails exerciseTimes={exerciseTimes}></ExerciseDetails>
                    <Utilites></Utilites>
                </div>
            </div>
    );
};

export default Club;