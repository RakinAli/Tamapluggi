import React,{useEffect, useState} from 'react'
import Timer from './Timer';

function Break(props) {
    let clock;
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(props.breakTime);
    const [studyBool, setStudyBool] = useState(false);
   
    function studyPopUp(){
        
        if (window.confirm("The break ended. Do you want to continue studying?")) {
            //Yes
            setStudyBool(true);
        }
    }
    
    useEffect(() => { 
        if (minutes === 0 && seconds === 0) {
            studyPopUp();
        }
        clock = setInterval(() => {
            setSeconds(seconds - 1);
            if (seconds === 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
            }
        }, 1000);

        return () => clearInterval(clock);        
    });

	const textStyle = {
		fontSize: "1.5rem",
		textAlign: "center",
	};

	const clockStyle = {
		fontSize: "4rem",
		textAlign: "center",
	};
    
  return (
    <div>
          {studyBool ? (
              <Timer/>
          ): (
            <div>
              <h2>Taking a break:</h2>
              <p style={textStyle}>Time to study in:</p>
              <p style={clockStyle}>
              {minutes < 10 ? "0" + minutes : minutes}:
              {seconds < 10 ? "0" + seconds : seconds}
              </p>
            </div>
          )}
         
    </div>
  )
}

export default Break;