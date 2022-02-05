import React from "react";
import Knowledge from "../Images/Icons/knowledge.svg";
import Energy from "../Images/Icons/energy.svg";
import Nonstress from "../Images/Icons/nonstress.svg";

function Statbar(props) {
	let fill = 100;
	fill = props.fillLevel;

	const barStyle = {
		backgroundColor: "#C4C4C4",
		margin: "5px",
		width: "150px",
	};

	const fillingStyle = {
		backgroundColor: "#46892F",
		height: "100%",
		width: fill + "%",
	};

	return (
		<div style={barStyle}>
			<div style={fillingStyle}>
				<p>{props.text}</p>
			</div>
		</div>
	);
}

function Betyg() {

    let betyg = "C"

    const letterStyle = {
        fontSize: "6rem"
    }

	return (
		<p style = {letterStyle}>{betyg}</p>
	);
}

function Statpanel() {
	const iconStyle = {
		width: "50px",
	};

	return (
		<div className="flex flex-row">
			<div className="flex flex-col">
				<div className="flex flex-row p-1">
					<img src={Knowledge} alt="" style={iconStyle} />
					<Statbar fillLevel="75" />
				</div>
				<div className="flex flex-row p-1">
					<img src={Energy} alt="" style={iconStyle} />
					<Statbar fillLevel="10" />
				</div>
				<div className="flex flex-row p-1">
					<img src={Nonstress} alt="" style={iconStyle} />
					<Statbar fillLevel="50" />
				</div>
			</div>
			<Betyg />
		</div>
	);
}

export default Statpanel;
