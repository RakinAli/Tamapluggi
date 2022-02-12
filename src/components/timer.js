import React, { useEffect, useState } from "react";
import BreakStarted from "./BreakStarted";
import studyBook from "../Images/study_book.svg";

function Timer(props) {
	let minute = 0;
	let second = 5;

	if (props.studyTime !== undefined) {
		minute = props.studyTime;
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
		if (window.confirm("Are you sure you want to restart")) {
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
				props.setEnergyFill(props.energyFill - 0.5);
			}, 1000);

			return () => clearInterval(clock);
		} else {
			return;
		}
	});

	const textStyle = {
		fontSize: "1.2rem",
		textAlign: "center",
		marginTop: "10px",
	};

	const clockStyle = {
		fontSize: "3rem",
		textAlign: "center",
	};

	/* * Logiken är följande: *
	
		
	
	*/
	return (
		<div>
			{stopBool ? (
				<BreakStarted setMinutes={setMinutes} energyFill = {props.energyFill}
				setEnergyFill = {props.setEnergyFill}
				 />
			) : (
				<div>
					<h2>Study</h2>
					<img src={studyBook} style={{ width: "150px", margin: "auto" }} />
					<p style={textStyle}>Break in:</p>
					<p style={clockStyle}>
						{minutes < 10 ? "0" + minutes : minutes}:
						{seconds < 10 ? "0" + seconds : seconds}
					</p>
					{startBool ? (
						<>
							<button className="controlButton red" onClick={handleStop}>
								Stop
							</button>
							<button className="controlButton inactive" onClick={handleStart}>
								Start
							</button>
						</>
					) : (
						<>
							<button className="controlButton inactive" onClick={handleStop}>
								Stop
							</button>
							<button className="controlButton green" onClick={handleStart}>
								Start
							</button>
						</>
					)}
					<button className="controlButton yellow" onClick={handleRestart}>
						Restart
					</button>
				</div>
			)}
		</div>
	);
}

export default Timer;
