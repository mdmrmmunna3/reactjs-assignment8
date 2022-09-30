import React from 'react';
import './Utilites.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Utilites = () => {
    const showToastMessage = () => {
        toast.success('Congarculation To Complete Your React Assingment!!', {
            position: toast.POSITION.TOP_CENTER
        });
    };
    return (
        <div>
             <div>
            <button onClick={showToastMessage} className='activity-btn'>Activity Completed</button>
            <ToastContainer />
        </div>
        </div>
    );
};

export default Utilites;

