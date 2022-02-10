import React, { useState } from "react";
import Timer from "./Timer";
import SetSchedule from "./SetSchedule";
function SelectButtons() {
	
	const iconStyle = {
		width: "50px",
	};

	const buttonStyle = {
		backgroundColor: "#649552",
		borderRadius: "10px",
		padding: "10px",
		color: "#FFFFFF",
		fontWeight: "bold",
		width: "200px",
		marginBottom: "10px",
	};
	const [startBoolean, setStartBoolean] = useState(false);
	const [scheduleBoolean, setScheduleBoolean] = useState(false);
	const [buttonPressed, setButtonPressed] = useState(false);	
	const [minutes, setMinutes] = useState(25);

	function startPressed() {
		setButtonPressed(true)
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
				<Timer />
			) : (
				""
			)}
			{scheduleBoolean ? (
				<SetSchedule />
			) : (
				""
			)}
			{buttonPressed ? "" : (
				<div className="flex flex-col">
					<h1>Study</h1>
					<button ariant="success" onClick={startPressed} style={buttonStyle}>
						Start
					</button>
					<button
						variant="success"
						onClick={setSchedulePressed}
						style={buttonStyle}
					>
						Set schedule
					</button>
				</div>
			)}
			
		</div>
	);
}



export default SelectButtons;