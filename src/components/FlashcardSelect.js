import React from "react";
import { Outlet, Link } from "react-router-dom";
import Statpanel from "./Statpanel.js"


function FlashcardSelect(props) {

	return (
		<main>
            <Statpanel energyFill = {props.energyFill}/>
            <h2>Flashcards</h2>
            <div className="centerContent">
                <Link to = "../Flashcard2">
                    <button className="largeButton"> Start playing </button>
                </Link>
                <Link to = "../FlashcardSettings">
                    <button className="largeButton"> Flashcard settings </button>
                </Link>
                <button className="largeButton"> Edit flashcards </button>
            </div>
		</main>
	);
}

export default FlashcardSelect;
