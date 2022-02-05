import React from "react";

function SelectButtons() {
	const iconStyle = {
		width: "50px",
	};

	return (
        <div className="flex flex-col pt-3">
            <button variant="success">Start</button>
            <button variant="success">Set schedule</button>
            <button variant="success">History</button>
        </div>
	);
}

export default SelectButtons;