import React,{useState} from 'react';
import {Link } from "react-router-dom";
import Break from './Break';
import Timer from './Timer';

function BreakStarted(props) {

    const [breakTime, setBreakTime] = useState(0);
    const [breakBool, setBreakBool] = useState(false);
    const [studyBool, setStudyBool] = useState(false);  

    function breakFunction(time) {
        setBreakTime(time);
        setBreakBool(true);
    }
  
    return (
        <div>
            {studyBool ? (<Timer studyTime = {5}/>) : (
                <div>
                    {breakBool ? (<Break breakTime = {breakTime}/>): (
                        <div className="popUpWindow">
                            <h3>Time for a break?</h3>
                            <button variant="success" className="largeButton" onClick={() => breakFunction(5)}>Short break</button>
                            <button variant="success" className="largeButton" onClick={() => breakFunction(30)}>Long break</button>
                            <button variant="success" className="largeButton" onClick={() => setStudyBool(true)}>Study for a few more minutes</button>
                            <button variant="success" className="largeButton"><Link to="/Home">Done for today</Link></button>
                        </div>)}
                </div> 
            )}
        </div>    
    );
}

export default BreakStarted