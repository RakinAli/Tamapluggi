import React, { useEffect, useState } from "react";
import BreakStarted from "./BreakStarted";
function Timer(props) {
	
	let minute = 25;
	let second = 0;
	
	if (props.studyTime !== undefined) {
		minute = props.studyTime
	}
	
	if (props.minute !== undefined) {
		minute = props.minute;
	}
	if (props.second !== undefined) {
		second = props.second;
	}
	
	const [seconds, setSeconds] = useState(second);
	const [minutes, setMinutes] = useState(minute);
	const [startBool, setStartBool] = useState(true);
	const [stopBool, setStopBool] = useState(false);
	function handleStop() {
		setStartBool(false);
		clearInterval(clock);
	 }

	function handleRestart() {
		if(window.confirm("Are you sure you want to restart")){
			//Yes
			setSeconds(second);
			setMinutes(minute);
		}
	}

	function handleStart() {
		setStartBool(true);
	}

	let clock;
	useEffect(() => {
		if (startBool) {
			if (minutes === 0 && seconds === 0) {
				setStopBool(true);
			}
			clock = setInterval(() => {
				setSeconds(seconds - 1);
				if (seconds === 0) {
					setSeconds(59);
					setMinutes(minutes - 1);
				}
			}, 1000);

			return () => clearInterval(clock);
		} else {
			return;
		}
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
			{stopBool ? (
				<BreakStarted setMinutes = {setMinutes}/>
			): (
				<div>
					<p style={textStyle}>Break in:</p>
					<p style={clockStyle}>
						{minutes < 10 ? "0" + minutes : minutes}:
						{seconds < 10 ? "0" + seconds : seconds}
					</p>
					<button
						className="px-2 py-2 m-1 font-bold text-white bg-red-500 rounded-lg hover:bg-red-700"
						onClick={handleStop}
					>
						Stop
					</button>
					<button
						className="px-2 py-2 m-1 font-bold text-white bg-green-400 rounded-lg hover:bg-green-700"
						onClick={handleStart}
					>
						Start
					</button>
					<button
						className="px-2 py-2 m-1 font-bold text-white bg-gray-400 rounded-lg hover:bg-gray-700"
						onClick={handleRestart}
					>
						Restart
					</button>
				</div>
			)}
			</div>
	);
}

export default Timer;
