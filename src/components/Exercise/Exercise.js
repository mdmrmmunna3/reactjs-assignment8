import React from 'react';

const Exercise = (props) => {
    console.log(props.exercise)
    const {img, name, desciption, time} = props.exercise;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Exercise;