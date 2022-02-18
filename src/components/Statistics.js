import React, { useState } from "react";

function Statistics(props) {
	console.log("history", props.studyHistory);

	if (props.studyHistory.lenght === 0) {
		props.setHistoryIsEmpty(true);
		console.log("History is empty?: ", props.studyHistory);
	}

	console.log(props.historyIsEmpty);
	return (
		<main>
			<h2>Statistics</h2>
			<div className="flex flex-col justify-between">
				<h3>Study Sessions:</h3>
				{props.historyIsEmpty ? (
					<h2>No study sessions recorded!</h2>
				) : (
					<ul>
						{props.studyHistory.map((element) => {
							return (
								<li>
									{element.dateHistory}: {Math.round(element.timeHistory / 60).toFixed(2)} minutes
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</main>
	);
}

export default Statistics;
