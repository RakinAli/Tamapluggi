import React from "react";
import Fcard from "./Fcard";

export default function FlashcardList({ flashcards }) {
	return (
		<div className="card-grid">
			{flashcards.map(flashcard => {
				return <Fcard flashcard={flashcard} key={flashcard.id} />;
			})}
		</div>
	)
}
