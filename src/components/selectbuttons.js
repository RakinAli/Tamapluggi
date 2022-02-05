import React from "react";

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
        marginBottom: "10px"
	};

	return (
        <div className="flex flex-col pt-3">
            <button variant="success" style = {buttonStyle}>Start</button>
            <button variant="success" style = {buttonStyle}>Set schedule</button>
            <button variant="success" style = {buttonStyle}>History</button>
        </div>
	);
}

export default SelectButtons;