import React from "react";
import {Link } from "react-router-dom";
import HomeIcon from '../Images/Icons/home.svg';

/*Navigation bar */ 
function Navbar() {
	return (
		<nav className="Navbar">
			<Link to="/home"><img src={HomeIcon} alt="" /></Link>
			<Link to="/study">Study</Link>
			<Link to="/flashcards">Flashcards</Link>
			<Link to="/planning">Planning</Link>
			<Link to="/stats">Stats</Link>		
		</nav>
	);
}

export default Navbar;
