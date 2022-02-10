import React, { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";
function SetSchedule() {
	const [minute, setMinute] = useState(25);
	const [timerBool, setTimerBool] = useState(false);
	const [onChange, setOnChange] = useState(0);
	function timerPressed() {
		setTimerBool(true);
	}
	return (
		<div className="flex flex-col">
			{timerBool ? (
				<Timer minute={minute} />
			) : (
				<div className="flex flex-col">
					<label>Set timer</label>
					<input
						type="number"
						name="Timer"
						onChange={(e) => setOnChange(e.target.value)}
					/>
					<button
						onClick={() => {
							setMinute(onChange);
						}}
					>
						Save time
					</button>
					<button onClick={timerPressed}>Timer</button>
				</div>
			)}
		</div>
	);
}

export default SetSchedule;
