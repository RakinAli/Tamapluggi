import React, { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

function SetSchedule(props) {
	//const [minute, setMinute] = useState(25);
	//const [second, setSecond] = useState(0);
	//const [timerBool, setTimerBool] = useState(false);
	/*const [onChangeMinutes, setOnChangeMinutes] = useState(0);
	const [onChangeSeconds, setOnChangeSeconds] = useState(0);
	const [onChangeShortBreak, setOnChangeShortBreak] = useState(0);
	const [onChangeLongBreak, setOnChangeLongBreak] = useState(0);*/
	const [savedTimer, setSavedTimer] = useState(true);
	
	function timerPressed() {
		if(!savedTimer) {
			alert("Do not forget to save!");	
		}
	}

	function save(){
		setSavedTimer(true);
		/*props.setSecond(onChangeSeconds);
		props.setMinute(onChangeMinutes);
		props.setShortBreak(onChangeShortBreak);
		props.setLongBreak(onChangeLongBreak);*/
	}

	return (
		<main className="flex flex-col">
			<h2>Set study timer</h2>
				<label>Set timer minutes:</label>
				<input
					defaultValue={props.minute}
					type="number"
					name="Timer"
					onChange={(e) => {props.setMinute(e.target.value); setSavedTimer(false);}}						
				/>
			
				<label>Set timer seconds:</label>
				<input
					defaultValue={props.second}
					type="number"
					name="Timer"
					onChange={(e) => {props.setSecond(e.target.value); setSavedTimer(false);}}
				/>

				<label>Set short break minutes:</label>
				<input
					defaultValue={props.shortBreak}
					type="number"
					name="ShortBreak"
					onChange={(e) => {props.setShortBreak(e.target.value); setSavedTimer(false);}}
				/>

				<label>Set long break minutes:</label>
				<input
					defaultValue={props.longBreak}
					type="number"
					name="LongBreak"
					onChange={(e) => {props.setLongBreak(e.target.value); setSavedTimer(false);}}
				/>

				{savedTimer ? (<>
					<button onClick={save} className = "largeButton inactive">Saved</button>
					<Link to="../Timer"><button className = "largeButton" >Start timer</button></Link>
					<Link to="../Study"><button className = "largeButton" >Back to menu</button></Link>
					</>):(<>
					<button onClick={save} className = "largeButton">Save</button>
					<button onClick={timerPressed} className = "largeButton" >Start timer</button>
					<button onClick={timerPressed} className = "largeButton" >Back to menu</button>
					</>)
				}
		</main>
	);
}

export default SetSchedule;
