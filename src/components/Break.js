import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Statpanel from "./Statpanel";
import snackImage from "../Images/snack.svg";

function Break(props) {
	let clock;
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(props.breakTime);
	const [studyBool, setStudyBool] = useState(false);

	useEffect(() => {
		if (minutes === 0 && seconds === 0) {
			setStudyBool(true);
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

	return (
		<main>
			<Statpanel/>
			{studyBool ? (
				<div className="popUpWindow">
					<h3>Time study again?</h3>
					<Link to="../Timer"><button className="largeButton">Ok</button></Link>
					<Link to="/"><button className="largeButton">Done for today</button></Link>
				</div>
			) : (
				<div>
					<h2>Taking a break:</h2>
					<div className="centerContent">
						<img src={snackImage} style={{ width: "150px", margin: "auto" }} />
						<p style={{fontSize: "1.2rem"}}>Time to study in:</p>
						<p style={{fontSize: "3rem"}}>
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
