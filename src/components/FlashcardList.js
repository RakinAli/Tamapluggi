import React from "react";
import Flashcards from "./Flashcards";

export default function FlashcardsList({ flashcards }) {
	return (
		<div className="card-grid">
			{flashcards.map((flashcards) => {
				return <Flashcards flashcards={flashcards} key={flashcards.id} />;
			})}
		</div>
	);
}
