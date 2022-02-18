import React, { useState } from "react";

function Statistics(props) {
	let historyIsEmpty = true;

	if (props.studyHistory.length !== 0) {
		historyIsEmpty = false;
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
						{props.studyHistory.map((element, index) => {
							return (
								<li key={index}>
									{element.dateHistory}:{" "}
									{Math.round(element.timeHistory / 60).toFixed(2)} minutes
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
