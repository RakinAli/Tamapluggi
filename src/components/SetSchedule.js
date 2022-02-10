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

	const inputStyle = {
		border: "solid 1px",
		borderRadius: "5px",
		paddingLeft: "10px",
		marginLeft: "10px",
		marginBottom: "10px"
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

	return (
		<div className="flex flex-col">
			{timerBool ? (
				<Timer minute={minute} />
			) : (
				<div className="flex flex-col">
					<label>Set timer:</label>
					<input
						type="number"
						name="Timer"
						onChange={(e) => setOnChange(e.target.value)}
						style = {inputStyle}
					/>
					<button
						onClick={() => {
							setMinute(onChange);
						}}
						style = {buttonStyle}
					>
						Save time
					</button>
					<button onClick={timerPressed} style = {buttonStyle}>Timer</button>
				</div>
			)}
		</div>
	);
}

export default SetSchedule;
