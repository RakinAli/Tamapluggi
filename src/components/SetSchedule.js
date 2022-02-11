import React, { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
function SetSchedule() {
	const [minute, setMinute] = useState(25);
	const [second, setSecond] = useState(0);
	const [timerBool, setTimerBool] = useState(false);
	const [onChangeMinutes, setOnChangeMinutes] = useState(0);
	const [onChangeSeconds, setOnChangeSeconds] = useState(0);
	const [savedTimer, setSavedTimer] = useState(false);
	function timerPressed() {
		if(savedTimer) {
			setTimerBool(true);
		}
		else{
			alert("Do not forget to save!");
		}
	}
	function save(){
	setSavedTimer(true);
    setSecond(onChangeSeconds);
	setMinute(onChangeMinutes);
	}

	return (
		<div className="flex flex-col">
			{timerBool ? (
				<Timer minute={minute} second = {second} />
			) : (
				<div className="flex flex-col">
					<h2>Set study timer</h2>
					<label>Set timer minutes:</label>
					<input
						type="number"
						name="Timer"
						onChange={(e) => setOnChangeMinutes(e.target.value)}						
					/>
				
						<label>Set timer seconds:</label>
						<input
							type="number"
							name="Timer"
							onChange={(e) => setOnChangeSeconds(e.target.value)}
						/>
						<button
							onClick={save}
							className = "largeButton"
						>
							Save timer
						</button>
					<button onClick={timerPressed} className = "largeButton" >Timer</button>
				</div>
			)}
		</div>
	);
}

export default SetSchedule;
