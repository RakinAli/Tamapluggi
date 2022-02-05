import React from "react";
import {Link } from "react-router-dom";
import homeIcon from "../Images/Icons/home.svg"
import studyIcon from "../Images/Icons/study.svg"
import flashcardsIcon from "../Images/Icons/flashcards.svg"
import planningIcon from "../Images/Icons/planning.svg"
import statisticsIcon from "../Images/Icons/statistics.svg"

/*Navigation bar */ 
function Navbar() {

	const iconStyle = {
		width: "50px"
	}

	return (
		<nav className="Navbar">
			<Link to="/home"><img src = {homeIcon} alt = "" style = {iconStyle}/></Link>
			<Link to="/study"><img src = {studyIcon} alt = "" style = {iconStyle}/></Link>
			<Link to="/flashcards"><img src = {flashcardsIcon} alt = "" style = {iconStyle}/></Link>
			<Link to="/planning"><img src = {planningIcon} alt = "" style = {iconStyle}/></Link>
			<Link to="/stats"><img src = {statisticsIcon} alt = "" style = {iconStyle}/></Link>		
		</nav>
	);
}

export default Navbar;
