import React from "react";
import { Outlet, Link } from "react-router-dom";
import settingsIcon from "../Images/Icons/settings.svg"


/*Navigation bar */ 
function Header() {

	const iconStyle = {
		width: "40px"
	}

	return (
		<header>
			<h1>Tamapluggi</h1>
			<Link to = "settings"><img src={settingsIcon} alt="" style={iconStyle} /></Link>
		</header>
	);
}

export default Header;
