// // import { useState } from 'react';
import React from 'react';

import './BreakTimeField.css'
const BreakTimeField = () => {
    const breakHandleTime = () => {
        
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

// import React, { useEffect, useState } from 'react';

// const BreakTimeField = () => {
//     const [breakTime, setBreakTime] = useState[0];
//     useEffect(()=> {
//         const oldTime = localStorage.getItem('breakTime')
//         let saveStorage = []
//         if (oldTime) {
//             saveStorage = [oldTime];
//             localStorage.setItem('breakTime', JSON.stringify(saveStorage))
//         }
//         else {
//             if(oldTime) {
//                 return;
//             }
//             else {
//                 localStorage.setItem('breakTime', JSON.stringify(breakTime))
//                 setBreakTime(breakTime)
//             }
//         }
//     },[breakTime])
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default BreakTimeField;