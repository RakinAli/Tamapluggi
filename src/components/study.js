import React from "react";
import Statpanel from "./Statpanel";
import SelectButtons from "./Selectbuttons";

function Study(props) {
	return (
		<main className="flex flex-col pt-3 ">
			<Statpanel energyFillStudy={props.energyFill} />
			<SelectButtons 
				energyFill={props.energyFill} 
				setEnergyFill = {props.setEnergyFill}
				minute={props.minute}
				setMinute={props.setMinute}
				second={props.second}
				setSecond={props.setSecond}
				shortBreak = {props.shortBreak}
				setShortBreak = {props.setShortBreak}
				longBreak = {props.longBreak}
				setLongBreak = {props.setLongBreak}
			/>
		</main>
	);
}

export default Study;
