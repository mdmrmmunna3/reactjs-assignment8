import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'
const Toast = () => {
    const showToastMessage = () => {
        toast.success('Congarculation To Complete Your React Assingment. Best of Luck for Your Programimg Hero Journey!!', {
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

export default Toast;

