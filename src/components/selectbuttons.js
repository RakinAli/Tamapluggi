import React, { useState } from "react";
import Timer from "./timer";

function SelectButtons() {
	const iconStyle = {
		width: "50px",
	};

	const buttonStyle = {
		backgroundColor: "#649552",
		borderRadius: "10px",
		padding: "10px",
		color: "#FFFFFF",
		fontWeight: "bold",
		width: "200px",
		marginBottom: "10px",
	};
	const [startBoolean, setStartBoolean] = useState(false);
	function startPressed() {
		setStartBoolean(true);
	}

	return (
		<div className="flex flex-col pt-3">
			{startBoolean ? (
				<Timer />
			) : (
				<div className="flex flex-col">
					<h1>Study</h1>
					<button variant="success" onClick={startPressed} style={buttonStyle}>
						Start
					</button>
					<button variant="success" style={buttonStyle}>
						Set schedule
					</button>
					<button variant="success" style={buttonStyle}>
						History
					</button>
				</div>
			)}
		</div>
	);
}

export default SelectButtons;
