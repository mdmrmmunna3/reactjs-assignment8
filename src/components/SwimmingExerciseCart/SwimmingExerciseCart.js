import React from 'react';
import './SwimmingExerciseCart.css'
const SwimmingExerciseCart = ({swmmingExercise,handleAddToList}) => {
    const {img, name, desciption, time} = swmmingExercise;
    return (
        <div>
            <div className='swimming-execrise '>
                <img src={img} alt="" />
                <div className='swimming-execrise-info'>
                    <p className='fw-bold'> {name}</p>
                    <p className='description'>{desciption}</p>
                    <p className='fw-bold time'>Time required : {time}min</p>
                </div>
                <button onClick={()=>handleAddToList(swmmingExercise)} className='add-to-click-btn'>
                    <p>Add To List</p>
                </button>
            </div>
        </div>
    );
};

export default SwimmingExerciseCart;