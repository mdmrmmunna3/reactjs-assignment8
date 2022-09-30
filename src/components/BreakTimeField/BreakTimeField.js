
import './BreakTimeField.css'
const BreakTimeField = ({breakHandleTime}) => {

    return (
        <div className='break-container'>
            <h5>Add a Break</h5>
            <div className="break-time">
                
                <button onClick={()=>breakHandleTime(10)} className='style'>10min</button>
                <button onClick={()=>breakHandleTime(20)} className='style'>20min</button>
                <button onClick={()=>breakHandleTime(25)} className='style'>25min</button>
                <button onClick={()=>breakHandleTime(30)} className='style'>30min</button>
                <button onClick={()=>breakHandleTime(35)} className='style'>35min</button>
                
            </div>
        </div>
    );
};

export default BreakTimeField;

