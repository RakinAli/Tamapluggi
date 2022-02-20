import React, { useState } from "react";
import { DatePicker } from "@mantine/dates";

function Settings() {

	/*
	function Demo() {
  		const [value, onChange] = useState(new Date());
  		return <DatePicker value={value} onChange={onChange} />;
	}
	*/

	const [date, setDate] = useState(new Date());
	const [studyGoal, setStudyGoal] = useState("");
	//console.log("Date:", date)
	
	return (
		<main>
			<h2>Settings</h2>
			<div className="flex flex-col">
				<div className="flex ">
					<DatePicker value = {date} onChange ={setDate} placeholder="Pick date" label="Graduation Date" />
				</div>
				<label>Study goal for today</label>
				<input value = {studyGoal} onChange = {(e)=> setStudyGoal(e.target.value)}/>
			</div>
		</main>
	);
}

export default Settings;
