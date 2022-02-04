import React from "react";

function Statbar(props) {

    const barStyle = {
        backgroundColor: "#C4C4C4",
        margin: "10px",
        width: "200px"
    }

    const fillingStyle = {
        backgroundColor: "#46892F",
        height: "24px",
        width: "50%",
    }

	return (
		<main>
			<div style={barStyle}>
  				<div style={fillingStyle}>
				</div>
			</div>
		</main>
	);
}

export default Statbar;