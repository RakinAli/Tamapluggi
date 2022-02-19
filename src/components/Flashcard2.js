import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Statpanel from "./Statpanel.js";
import "../App.css";

function Flashcard2(props) {
	let flashcardList = JSON.parse(localStorage.getItem("flashcardList"));

	let showOptions = true;
	if (JSON.parse(localStorage.getItem("showOptions")) !== null) {
		showOptions = JSON.parse(localStorage.getItem("showOptions"));
	}

	let noCards = false;
	if (flashcardList === null) {
		noCards = true;
		flashcardList = [
			{
				question: "",
				answer: "",
				options: "",
			},
		];
	}

	const [currentCard, setCurrentCard] = useState(0);
	const [flip, setFlip] = useState(false);
	const [showFinishedPage, setShowFinishedPage] = useState(noCards);
	const [correctCounter, setCorrectCounter] = useState(0);
	const [incorrectCounter, setIncorrectCounter] = useState(0);

	const [answeredCorrectly, setAnsweredCorrectly] = useState(
		new Array(flashcardList.length).fill(0)
	);

	/*Logik bakom rutorna ovanför flashcards*/
	const answeredList = answeredCorrectly.map((answerStatus, index) => (
		<div>
			{index === currentCard ? (
				<div>
					{answerStatus === 0 ? (
						<button className="smallButton neutral focus"> X </button>
					) : (
						<div>
							{answerStatus === 1 ? (
								<button className="smallButton green focus">V</button>
							) : (
								<button className="smallButton red focus">X</button>
							)}
						</div>
					)}
				</div>
			) : (
				<div>
					{answerStatus === 0 ? (
						<button className="smallButton neutral"> X </button>
					) : (
						<div>
							{answerStatus === 1 ? (
								<button className="smallButton green">V</button>
							) : (
								<button className="smallButton red">X</button>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	));

	function backPressed() {
		if (currentCard > 0) {
			setCurrentCard(currentCard - 1);
			setFlip(false);
		}
	}
	function forwardPressed() {
		if (currentCard < flashcardList.length - 1) {
			setCurrentCard(currentCard + 1);
			setFlip(false);
		} else {
			setShowFinishedPage(true);
			setFlip(false);
		}
	}
	function restart() {
		setCurrentCard(0);
		setShowFinishedPage(false);
	}
	// Om man trycker på den gröna knappen
	function correctPressed() {
		let newAnsweredCorrectly = answeredCorrectly;
		newAnsweredCorrectly[currentCard] = 1;
		setAnsweredCorrectly(newAnsweredCorrectly);
		setCorrectCounter(correctCounter + 1);
	}
	// Om man trycker på den röda knappen
	function incorrectPressed() {
		let newAnsweredCorrectly = answeredCorrectly;
		newAnsweredCorrectly[currentCard] = -1;
		setAnsweredCorrectly(newAnsweredCorrectly);
		setIncorrectCounter(incorrectCounter + 1);
	}
	let clock;
	useEffect(() => {
		clock = setInterval(() => {
			props.setGradeFill(props.gradeFill + 0.4);
		}, 1000);

		return () => 
			
			clearInterval(clock);
		
	});
		useEffect(() => {
			

			return () => props.setFlashcardBool(true);
		},[]);

	return (
		<main>
			<Statpanel gradeFill={props.gradeFill} energyFill={props.energyFill} />
			<h2 style={{ paddingTop: "10px" }}>Playing flashcards</h2>
			{showFinishedPage ? (
				<div className="centerContent">
					<h3>Congratulations! You finished the deck :)</h3>
					{noCards ? (
						<button className="largeButton inactive">Restart</button>
					) : (
						<button onClick={restart} className="largeButton">
							Restart
						</button>
					)}
					<Link to="../FlashcardSelect">
						<button className="largeButton">Back to menu</button>
					</Link>
				</div>
			) : (
				<div>
					<div className="flex flex-row">{answeredList}</div>
					{flip ? (
						<div className="flashcard flip" onClick={() => setFlip(!flip)}>
							<p className="back">Svar:</p>
							<p className="back">{flashcardList[currentCard].answer}</p>
						</div>
					) : (
						<div className="flashcard" onClick={() => setFlip(!flip)}>
							<p>Fråga:</p>
							<p>{flashcardList[currentCard].question}</p>
						</div>
					)}
					<p style={{ textAlign: "center" }}>
						{currentCard + 1} of {flashcardList.length}
					</p>
					<div className="flex flex-row justify-between pt-5">
						{currentCard === 0 ? (
							<Link to="../FlashcardSelect">
								<button className="smallButton">Back</button>
							</Link>
						) : (
							<button onClick={backPressed} className="smallButton">
								Back
							</button>
						)}
						<div className="flex flex-row">
							<button
								onClick={incorrectPressed}
								className="smallButton red round"
							>
								{" "}
								X{" "}
							</button>
							<button
								onClick={correctPressed}
								className="smallButton green round"
							>
								{" "}
								V{" "}
							</button>
						</div>
						<button onClick={forwardPressed} className="smallButton">
							Next
						</button>
					</div>
					{showOptions ? (
						<div>
							<h3>Options:</h3>
							<ul>
								{flashcardList[currentCard].options.map((option) => (
									<li>{option}</li>
								))}
							</ul>
						</div>
					) : (
						<div></div>
					)}
				</div>
			)}
		</main>
	);
}

export default Flashcard2;
