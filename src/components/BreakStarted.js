import React, { useState } from "react";
import { Link } from "react-router-dom";
import Break from "./Break";
import Timer from "./Timer";

function BreakStarted(props) {
	const [breakTime, setBreakTime] = useState(0);
	const [breakBool, setBreakBool] = useState(false);
	const [studyBool, setStudyBool] = useState(false);

	let shortBreak = 5;
	let longBreak = 30;

	if(props.shortBreak !== undefined){
		shortBreak = props.shortBreak;
	}

	if(props.longBreak !== undefined){
		longBreak = props.longBreak;
	}

	function breakFunction(time) {
		setBreakTime(time);
		setBreakBool(true);
	}

	return (
		<div>
			{studyBool ? (
				<Timer
					studyTime={5}
					minute={props.minute}
					second = {props.second}
					shortBreak = {props.shortBreak}
					longBreak = {props.longBreak}
				/>
			) : (
				<div>
					{breakBool ? (
						<Break
							breakTime={breakTime}
							energyFill={props.energyFill}
							setEnergyFill={props.setEnergyFill}
						/>
					) : (
						<div className="popUpWindow">
							<h3>Time for a break?</h3>
							<button
								variant="success"
								className="largeButton"
								onClick={() => breakFunction(shortBreak)}
							>
								Short break
							</button>
							<button
								variant="success"
								className="largeButton"
								onClick={() => breakFunction(longBreak)}
							>
								Long break
							</button>
							<button
								variant="success"
								className="largeButton"
								onClick={() => setStudyBool(true)}
							>
								Study for a few more minutes
							</button>
							<Link to="/">
								<button variant="success" className="largeButton">
									Done for today
								</button>
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default BreakStarted;
