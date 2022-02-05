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
			<Link to="/home">
				<img
					// Tried to add hoover effect with tailwind
					className="hover:bg-slate-800"
					src={homeIcon}
					alt=""
					style={iconStyle}
				/>
			</Link>
			<Link to="/study">
				<img
					// Tried to add hoover effect with tailwind
					className="hover:bg-slate-800"
					src={studyIcon}
					alt=""
					style={iconStyle}
				/>
			</Link>
			<Link to="/Flashcard">
				<img
					// Tried to add hoover effect with tailwind
					className="hover:bg-slate-800"
					src={flashcardsIcon}
					alt=""
					style={iconStyle}
				/>
			</Link>
			<Link to="/planning">
				<img
					// Tried to add hoover effect with tailwind
					className="hover:bg-slate-800"
					src={planningIcon}
					alt=""
					style={iconStyle}
				/>
			</Link>
			<Link to="/stats">
				<img
					// Tried to add hoover effect with tailwind
					className="hover:bg-slate-800"
					src={statisticsIcon}
					alt=""
					style={iconStyle}
				/>
			</Link>
		</nav>
	);
}

export default Navbar;
