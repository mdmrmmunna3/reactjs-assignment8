
import './BreakTime.css'
const BreakTime = ({handleBreakTime}) => {

    return (
        <div className='break-time-container'>
            <h5 className='break-title'>Add a Break</h5>
            <div className="break-time">
                
                <button onClick={()=>handleBreakTime(5)} className='brTime-rest'>5m</button>
                <button onClick={()=>handleBreakTime(10)} className='brTime-rest'>10m</button>
                <button onClick={()=>handleBreakTime(15)} className='brTime-rest'>15m</button>
                <button onClick={()=>handleBreakTime(20)} className='brTime-rest'>20m</button>
                <button onClick={()=>handleBreakTime(25)} className='brTime-rest'>25m</button>
                
            </div>
        </div>
    );
};

export default BreakTime;

