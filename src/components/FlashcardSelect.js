import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Statpanel from "./Statpanel.js";

function FlashcardSelect(props) {
	return (
		<main>
			<Statpanel energyFill={props.energyFill} />
			<h2>Flashcards</h2>
			<div className="centerContent">
				{props.cardOrNot ? (
					<Link to="../Flashcard2">
						<button className="largeButton"> Start playing </button>
					</Link>
				) : (
					<button
						className="largeButton"
						onClick={() => alert("You need to add a flashcard first!")}
					>
						{" "}
						Start playing{" "}
					</button>
				)}

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
