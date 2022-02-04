import React from "react";
import { Outlet, Link } from "react-router-dom";

/*Navigation bar */ 
function Navbar() {
	return (
		<nav className="Navbar">
			<Link to="/home">Home</Link>
			<Link to="/study">Study</Link>
			<Link to="/flashcards">Flashcards</Link>
			<Link to="/planning">Planning</Link>
			<Link to="/stats">Stats</Link>		
		</nav>
	);
}

/*
function Navbar() {
	return (
		<nav className="Navbar">
			<ul className = "nav-link">
				<li><Link to="/home">Home</Link></li>
				<li><Link to="/study">Study</Link></li>
				<li><Link to="/flashcards">Flashcards</Link></li>
				<li><Link to="/planning">Planning</Link></li>
				<li><Link to="/stats">Stats</Link></li>
			</ul>
			
		</nav>
	);
}
*/
export default Navbar;
