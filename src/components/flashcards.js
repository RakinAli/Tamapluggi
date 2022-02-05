import React, { useState } from "react";
import FlashcardList from "./FlashcardList";

function Flashcards() {
	const [flashcards, setFlashcards] = useState(TEST_FLASHCARD);
	return (<FlashcardList flashcards={flashcards} />);
}

const TEST_FLASHCARD = [
	{
		id: 1,
		question: "Vilken skola är bättre?",
		answer: "2",
		options: ["KTH", "Chalmers"],
	},
	{
		id: 2,
		question: "Vilken kurs är den jobbigaste?",
		answer: "3",
		options: [
			"Logic för dataloger",
			"Logic för dataloger",
			"Logic för dataloger",
		],
	},
];

export default Flashcards;
