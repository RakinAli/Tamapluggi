import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import '../App.css'
export default function Flashcard() {
	const [flashcards, setFlashcards] = useState(TEST_FLASHCARD);
	return (<FlashcardList flashcards={flashcards} />);
}

const TEST_FLASHCARD = [
	{
		id: 1,
		question: "Vilken skola är bättre?",
		answer: "KTH",
		options: ["KTH", "Chalmers"],
	},
	{
		id: 2,
		question: "Vilken kurs är den jobbigaste?",
		answer: "Flervari....Logic för dataloger.",
		options: [
			"Logic för dataloger",
			"Logic för dataloger",
			"Logic för dataloger",
		],
	},
];

