import React, { useState } from "react";

function Statistics(props) {
	let historyIsEmpty = true;

	let studyHistory;
	if (localStorage.getItem('studyHistory') !== null) {
		historyIsEmpty = false;
		studyHistory = JSON.parse(localStorage.getItem('studyHistory'));
	}

	return (
		<main>
			<h2>Statistics</h2>
			<div className="flex flex-col justify-between">
				<h3>Study Sessions:</h3>
				{historyIsEmpty ? (
					<p>No study sessions recorded!</p>
				) : (
					<ul>
						{studyHistory.map((element, index) => {
							return (
								<li key={index}>
									{element.dateHistory}:{" "}
									{Math.floor(element.timeHistory / 60)}{" min "}{element.timeHistory%60}{" sec"}
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
