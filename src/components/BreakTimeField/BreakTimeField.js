import React from 'react';
import './BreakTimeField.css'
const BreakTimeField = () => {
    
    return (
        <div className='break-container'>
            <h5>Add a Break</h5>
            <div className="break-time">
                <p className='style'>10min</p>
                <p className='style'>20min</p>
                <p className='style'>30min</p>
                <p className='style'>40min</p>
                <p className='style'>50min</p>
            </div>
        </div>
    );
};

export default BreakTimeField;