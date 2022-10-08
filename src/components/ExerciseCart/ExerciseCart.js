import React from 'react';
import './ExerciseCart.css'
const ExerciseCart = ({exercise,handleAddToList}) => {
    const {img, name, desciption, age, time} = exercise;
    return (
        <div>
            <div className='execrise '>
                <img src={img} alt="" />
                <div className='execrise-info'>
                    <p className='fw-bold'> {name}</p>
                    <p className='description'>{desciption}</p>
                    <p className='fw-semibold'>For Age : {age}</p>
                    <p className='fw-bold time'>Time required : {time}min</p>
                </div>
                <button onClick={()=>handleAddToList(exercise)} className='add-to-click-btn'>
                    <p>Add To List</p>
                </button>
            </div>
        </div>
    );
};

export default ExerciseCart;