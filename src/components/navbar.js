import React from "react";
import {Link } from "react-router-dom";
/*import HomeIcon from "../Images/Icons/HomeIcon.js"*/
import homeIcon from "../Images/Icons/home.svg"
import studyIcon from "../Images/Icons/study.svg"
import flashcardsIcon from "../Images/Icons/flashcards.svg"
import planningIcon from "../Images/Icons/planning.svg"
import statisticsIcon from "../Images/Icons/statistics.svg"

/*Navigation bar*/ 
function Navbar() {

	/*<Link to="/Home"><HomeIcon/></Link>*/
	return (
		<nav>
			<Link to="/"><img src={homeIcon} className="navIcon"/></Link>
			<Link to="/Study"><img src={studyIcon} className="navIcon"/></Link>
			<Link to="/FlashcardSelect"><img src={flashcardsIcon} className="navIcon"/></Link>
			<Link to="/Planning"><img src={planningIcon} className="navIcon"/></Link>
			<Link to="/Statistics"><img src={statisticsIcon} className="navIcon"/></Link>
		</nav>
	);
}

export default Navbar;
