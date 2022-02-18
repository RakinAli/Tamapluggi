import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";


function FlashcardSettings() {
	let show = true;
	if(JSON.parse(localStorage.getItem('showOptions')) !== null){
		show = JSON.parse(localStorage.getItem('showOptions'));
	}

	const [showOptions, setShowOptions] = useState(show);

	function showOptionsPressed(){ 
		setShowOptions(true);
		localStorage.setItem('showOptions', JSON.stringify(true)); 
	}
	function hideOptionsPressed(){ 
		setShowOptions(false);
		localStorage.setItem('showOptions', JSON.stringify(false)); 
	}

	return (
		<main>
            <h2>Flashcard Settings</h2>
			<h3>Show or hide options?</h3>
            {showOptions ? (
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