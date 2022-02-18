import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Statpanel from "./Statpanel";
import studyBook from "../Images/study_book.svg";

function BreakStarted(props) {
	let shortBreak = 5;
	let longBreak = 30;

	if (props.shortBreak !== undefined) {
		shortBreak = props.shortBreak;
	}
	if (props.longBreak !== undefined) {
		longBreak = props.longBreak;
	}

	function breakFunction(time) {
		props.setBreakTime(time);
	}

	function studyFunction(time) {
		props.setMinutes(time);
		props.setStopBool(false);
	}

	return (
		<div className="popUpWindow">
			<h3>Time for a break?</h3>
			<Link to="../Break">
				<button
					className="largeButton"
					onClick={() => breakFunction(shortBreak)}
				>
					Short break
				</button>
			</Link>
			<Link to="../Break">
				<button
					className="largeButton"
					onClick={() => breakFunction(longBreak)}
				>
					Long break
				</button>
			</Link>
			<button className="largeButton" onClick={() => studyFunction(1)}>
				Study for a few more minutes
			</button>
			<Link to="/">
				<button className="largeButton">Done for today</button>
			</Link>
		</div>
	);
}

function Timer(props) {
	let minute = 25;
	let second = 0;

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

	//console.log("StudyHistory: ", props.studyHistory);

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

	// Kod för att spara study session, körs när vi går bort från sidan
	useEffect(() => {
		
		return () => {
			let oldHistory = props.studyHistory;
			let newHistory = {
				timeHistory: props.timeHistory,
				dateHistory: new Date().toISOString().slice(0, 10),
			};
			props.setStudyHistory([...oldHistory, newHistory]);
			props.setTimeHistory(0);
		}
	}, []);

	let clock;
	useEffect(() => {
		if (startBool) {
			if (minutes <= 0 && seconds <= 0) {
				setStopBool(true);
			}
			clock = setInterval(() => {
				setSeconds(seconds - 1);
				if (seconds === 0) {
					setSeconds(59);
					setMinutes(minutes - 1);
				}
				props.setEnergyFill(props.energyFill - 0.5);
				props.setTimeHistory(props.timeHistory + 1);
			}, 1000);

			return () => clearInterval(clock);

		} else {
			return;
		}
	});

	return (
		<main>
			<Statpanel
				energyFill={props.energyFill}
				setEnergyFill={props.setEnergyFill}
			/>
			{stopBool ? (
				<BreakStarted
					setMinutes={setMinutes}
					setStopBool={setStopBool}
					shortBreak={props.shortBreak}
					longBreak={props.longBreak}
					setBreakTime={props.setBreakTime}
				/>
			) : (
				<div>
					<h2>Study</h2>
					<div className="centerContent">
						<img src={studyBook} style={{ width: "150px" }} />
						<p style={{ fontSize: "1.2rem" }}>Break in:</p>
						<p style={{ fontSize: "3rem" }}>
							{minutes < 10 ? "0" + minutes : minutes}:
							{seconds < 10 ? "0" + seconds : seconds}
						</p>
						<div className="flex flex-row">
							{startBool ? (
								<>
									<button className="controlButton red" onClick={handleStop}>
										Stop
									</button>
									<button
										className="controlButton inactive"
										onClick={handleStart}
									>
										Start
									</button>
								</>
							) : (
								<>
									<button
										className="controlButton inactive"
										onClick={handleStop}
									>
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
					</div>
				</div>
			)}
		</main>
	);
}

export default Timer;
