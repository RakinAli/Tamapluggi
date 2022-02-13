import React, { useState } from "react";
import Timer from "./Timer";
import SetSchedule from "./SetSchedule";
function SelectButtons(props) {
	const iconStyle = {
		width: "50px",
	};

	const [startBoolean, setStartBoolean] = useState(false);
	const [scheduleBoolean, setScheduleBoolean] = useState(false);
	const [buttonPressed, setButtonPressed] = useState(false);
	/*const [minutes, setMinutes] = useState(25);*/

	function startPressed() {
		setButtonPressed(true);
		setStartBoolean(true);
	}
	function setSchedulePressed() {
		setButtonPressed(true);
		setScheduleBoolean(true);
	}

	/* Logiken redan är 
		Har vi tryckt på någon knappt?
			Om ja: är det Timer -> Timer
			Om ja: är det SetSchedule -> Schedule
			Om nej: Visa menyn och vänta tills en knapp är tryckt
		*/
	return (
		<div className="flex flex-col pt-3">
			{startBoolean ? (
				<Timer
					energyFill={props.energyFill}
					setEnergyFill={props.setEnergyFill}
					minute={props.minute}
					setMinute={props.setMinute}
					second={props.second}
					setSecond={props.setSecond}
					shortBreak = {props.shortBreak}
					setShortBreak = {props.setShortBreak}
					longBreak = {props.longBreak}
					setLongBreak = {props.setLongBreak}
				/>
			) : (
				""
			)}
			{scheduleBoolean ? <SetSchedule 
				minute={props.minute}
				setMinute={props.setMinute}
				second={props.second}
				setSecond={props.setSecond}
				shortBreak = {props.shortBreak}
				setShortBreak = {props.setShortBreak}
				longBreak = {props.longBreak}
				setLongBreak = {props.setLongBreak}
			
			/> : ""}
			{buttonPressed ? (
				""
			) : (
				<div className="flex flex-col">
					<h2>Study</h2>
					<button
						variant="success"
						onClick={startPressed}
						className="largeButton"
					>
						Start
					</button>
					<button
						variant="success"
						onClick={setSchedulePressed}
						className="largeButton"
					>
						Set study timer
					</button>
				</div>
			)}
		</div>
	);
}

export default SelectButtons;
