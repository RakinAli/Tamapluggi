import React from "react";
import { Outlet, Link } from "react-router-dom";


function FlashcardSettings(props) {

	function showOptionsPressed(){ props.setShowOptions(true); }
	function hideOptionsPressed(){ props.setShowOptions(false); }

	return (
		<main>
            <h2>Flashcard Settings</h2>
			<h3>Show or hide options?</h3>
            {props.showOptions ? (
				<div className="flex flex-row">
					<p>Showing options</p>
					<button onClick={hideOptionsPressed} className = "smallButton">Hide</button>
				</div>
			):(
				<div className="flex flex-row">
					<p>Hiding options</p>
					<button onClick={showOptionsPressed} className = "smallButton">Show</button>
				</div>
			)}
			<Link to = "../FlashcardSelect"><button className="largeButton centerContent">Back to menu</button></Link>
		</main>
	);
}

export default FlashcardSettings;