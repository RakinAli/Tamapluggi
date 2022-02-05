import React from "react";
import { Outlet, Link } from "react-router-dom";

/*Navigation bar */ 
function Header() {
	return (
			<header className="flex flex-row justify-between Header">
				<h1>Tamapluggi</h1>
				<h3>Infoga settings bilden. När man tycker på denna så bör man komma till Settings.js. Jag hade problem med detta</h3>
			</header>
	);
}

export default Header;
