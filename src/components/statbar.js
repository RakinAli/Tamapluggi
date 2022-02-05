import autoprefixer from "autoprefixer";
import React from "react";

function Statbar(props) {

    let fill = 100;
    fill = props.fillLevel;

    const barStyle = {
        backgroundColor: "#C4C4C4",
        margin: "5px",
        width: "150px"
    }

    const fillingStyle = {
        backgroundColor: "#46892F",
        height: "100%",
        width: fill + "%"
    }

	return (
        <div style={barStyle}>
            <div style={fillingStyle}>
                    <p>{props.text}</p>
            </div>
        </div>
	);
}

export default Statbar;