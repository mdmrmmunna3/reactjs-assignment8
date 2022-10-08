import './SwimmingExerciseDetails.css'
const SwimmingExerciseDetails = (props) => {
    const { exerciseTimes } = props;

    let totalExerciseTime = 0;
    for (const time of exerciseTimes) {
        totalExerciseTime = totalExerciseTime + JSON.parse(time.time);
    }

    return (
        <div className='exerise-detailse-container'>
            <h5>Exercise Details</h5>
            <div className="exercise-time">
                <p>Exercise time</p>
                <p>{totalExerciseTime} minutes</p>
            </div>
            <div className="breakTime">
                <p>Break time</p>
                <p>{localStorage.getItem('break-time') ? localStorage.getItem('break-time') : 0} minute</p>
            </div>
        </div>
    );
};

export default SwimmingExerciseDetails;
