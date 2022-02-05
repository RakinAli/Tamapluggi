import React, { useEffect, useState } from "react";


function Timer() {
	const [seconds, setSeconds] = useState(3);
	const [minutes, setMinutes] = useState(25);
	const [startBool, setStartBool] = useState(true);
	function handleStop() {
		setStartBool(false);
		clearInterval(clock);
	}
	function handleRestart() {
		setSeconds(2);
		setMinutes(5);
	}
	function handleStart() {
		setStartBool(true);
	}
	let clock;
	useEffect(() => {
		if (startBool) {
			if (minutes === 0 && seconds === 0) {
				handleStop();
			}
			clock = setInterval(() => {
				setSeconds(seconds - 1);
				if (seconds === 0) {
					setSeconds(59);
					setMinutes(minutes - 1);
				}
			}, 1000);

			return () => clearInterval(clock);
		} else {
			return;
		}
	});

	return (
		<div>
			<h1>
				{minutes < 10 ? "0" + minutes : minutes}:
				{seconds < 10 ? "0" + seconds : seconds}
			</h1>
			<button className="px-2 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700" onClick={handleStop}>Stop</button>
			<button className="px-2 py-2 font-bold text-white bg-gray-400 rounded-full hover:bg-gray-700" onClick={handleRestart}>Restart</button>
			<button className="px-2 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-700" onClick={handleStart}>Start</button>
		</div>
	);
}

export default Timer;
