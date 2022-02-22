import React, { useState } from "react";
import StudyHistoryModel from "./StudyHistoryModel";

function Statistics(props) {
	let historyIsEmpty = true;

	let studyHistory;
	if (localStorage.getItem('studyHistory') !== null) {
		historyIsEmpty = false;
		studyHistory = JSON.parse(localStorage.getItem('studyHistory'));
	}

	const [displayMode, setDisplayMode] = useState("session");

	return (
		<main>
			<h2>Statistics</h2>
			<div className="flex flex-col justify-between">				
				<div className="flex flex-row">
					<h3>Study Sessions:</h3>
					{displayMode == "day" ? (
						<button onClick = {() => setDisplayMode("session")} className="smallButton">All</button>
					):(
						<button onClick = {() => setDisplayMode("day")} className="smallButton">Day</button>
					)}			
				</div>
				{historyIsEmpty ? (
					<p>No study sessions recorded!</p>	
				) : (
					<StudyHistoryModel
						displayMode = {displayMode}
					/>
				)}
			</div>
		</main>
	);
}

export default Statistics;
