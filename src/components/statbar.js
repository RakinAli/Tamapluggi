import React from "react";

function Statbar(props) {

    let fill = 100;
    fill = props.fillLevel;

    const barStyle = {
        backgroundColor: "#C4C4C4",
        margin: "10px",
        width: "150px"
    }

    const fillingStyle = {
        backgroundColor: "#46892F",
        height: "24px",
        width: fill + "%"
    }

	return (
		<main>
			<div style={barStyle}>
  				<div style={fillingStyle}>
                      <p>{props.text}</p>
				</div>
			</div>
		</main>
	);
}

export default Statbar;