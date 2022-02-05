import React from "react";
import { Outlet, Link } from "react-router-dom";
import settingsIcon from "../Images/Icons/settings.svg"

/*Navigation bar */ 
function Header() {

	const iconStyle = {
		width: "50px"
	}

	return (
			<header className="flex flex-row justify-between Header">
				<h1>Tamapluggi</h1>
				<img src={settingsIcon} alt="" style={iconStyle} />
			</header>
	);
}

export default Header;
