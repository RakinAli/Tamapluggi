import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Statpanel from "./Statpanel";
import snackImage from "../Images/snack.svg";
import Alarm from "../sounds/alarm.m4a";

function Break(props) {
	let clock;
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(props.breakTime);
	const [studyBool, setStudyBool] = useState(false);

	const alarmSound = new Audio(Alarm);

	useEffect(() => {
		if (minutes === 0 && seconds === 0) {
			setStudyBool(true);
			alarmSound.play();
		}
		clock = setInterval(() => {
			setSeconds(seconds - 1);
			if (seconds === 0) {
				setSeconds(59);
				setMinutes(minutes - 1);
			}
			props.setEnergyFill(props.energyFill + 0.7);
		}, 1000);

		return () => clearInterval(clock);
	});

	return (
		<main>
			<Statpanel
				energyFill={props.energyFill}
				setEnergyFill={props.setEnergyFill}
				gradeFillBreak = {props.gradeFill}
			/>
			{studyBool ? (
				<div className="popUpWindow">
					<h3>Time study again?</h3>
					<Link to="../Timer">
						<button className="largeButton">Ok</button>
					</Link>
					<Link to="/">
						<button className="largeButton">Done for today</button>
					</Link>
				</div>
			) : (
				<div>
					<h2>Taking a break:</h2>
					<div className="centerContent">
						<img src={snackImage} style={{ width: "150px", margin: "auto" }} />
						<p style={{ fontSize: "1.2rem" }}>Time to study in:</p>
						<p style={{ fontSize: "3rem" }}>
							{minutes < 10 ? "0" + minutes : minutes}:
							{seconds < 10 ? "0" + seconds : seconds}
						</p>
					</div>
				</div>
			)}
		</main>
	);
}

export default Break;
