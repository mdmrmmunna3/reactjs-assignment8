import React from 'react';
import './SwimmingExerciseCart.css'
const SwimmingExerciseCart = ({exercise,handleAddToList}) => {
    const {img, name, desciption, time} = exercise;
    return (
        <div>
            <div className='swimming-execrise '>
                <img src={img} alt="" />
                <div className='swimming-execrise-info'>
                    <p className='fw-bold'> {name}</p>
                    <p className='description'>{desciption}</p>
                    <p className='fw-bold time'>Time required : {time}min</p>
                </div>
                <button onClick={()=>handleAddToList(exercise)} className='add-to-click-btn'>
                    <p>Add To List</p>
                </button>
            </div>
        </div>
    );
};

export default SwimmingExerciseCart;