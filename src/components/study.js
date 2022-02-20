import React, { useState } from "react";
import { Link } from "react-router-dom";
import Statpanel from "./Statpanel";

function Study(props) {
	return (
		<main>
			<Statpanel
				energyFillStudy={props.energyFill}
				gradeFillStudy={props.gradeFill}
			/>
			<h2>Study</h2>
			<div className="centerContent">
				<Link to="../Timer">
					<button className="largeButton" onClick={() => props.setFlashcardBool(false)}>Start</button>{" "}
				</Link>
				<Link to="../SetSchedule">
					<button className="largeButton">Set study timer</button>{" "}
				</Link>
			</div>
		</main>
	);
}

export default Study;
