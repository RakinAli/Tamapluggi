import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Statpanel from "./Statpanel.js";

function FlashcardSelect(props) {
	return (
		<main>
			<Statpanel
				energyFill={props.energyFill}
				gradeFillSelect={props.gradeFill}
			/>
			<h2>Flashcards</h2>
			<div className="centerContent">
				<Link to="../Flashcard2">
					<button
						className="largeButton"
						onClick={() => props.setFlashcardBool(false)}
					>
						{" "}
						Start playing{" "}
					</button>
				</Link>
				<Link to="../FlashcardSettings">
					<button className="largeButton"> Flashcard settings </button>
				</Link>
				<Link to="../FlashcardEdit">
					<button className="largeButton"> Add flashcards </button>
				</Link>
			</div>
		</main>
	);
}

export default FlashcardSelect;
