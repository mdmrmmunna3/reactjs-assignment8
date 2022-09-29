// import { useState } from 'react';
import React from 'react';

import './BreakTimeField.css'
const BreakTimeField = () => {
    const breakHandleTime = (id)=> {
        console.log('connect', id)
    }
    return (
        <div className='break-container'>
            <h5>Add a Break</h5>
            <div className="break-time">
                <button onClick={breakHandleTime} className='style'>10min</button>
                <button onClick={breakHandleTime} className='style'>20min</button>
                <button onClick={breakHandleTime} className='style'>30min</button>
                <button onClick={breakHandleTime} className='style'>40min</button>
                <button onClick={breakHandleTime} className='style'>50min</button>
                
            </div>
        </div>
    );
};

export default BreakTimeField;