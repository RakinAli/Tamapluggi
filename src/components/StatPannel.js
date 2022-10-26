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
		marginLeft: "20px",
		marginRight: "20px",
	};

	const fillingStyle = {
		backgroundColor: "#46892F",
		height: "100%",
		width: fill + "%",
	};

	return (
		<div style={barStyle}>
			<div style={fillingStyle}></div>
		</div>
	);
}

function Betyg() {
	let betyg = "C";

	const letterStyle = {
		fontSize: "4rem",
		fontWeight: "bold",
	};

	return <p style={letterStyle}>{betyg}</p>;
}

function Statpanel(props) {
	const iconStyle = {
		width: "30px",
	};
	let fillLevel;
	let gradeLevel;
	let stressLevel;
	stressLevel = localStorage.getItem('stressFill');
	stressLevel = JSON.parse(stressLevel);
	
	if (props.energyFill === undefined) {
		fillLevel = props.energyFillStudy;
	}
	if (props.energyFillStudy === undefined) {
		fillLevel = props.energyFill;
	}

	if (props.gradeFillStudy === undefined && props.gradeFillHome === undefined && props.gradeFillSelect === undefined && props.gradeFilltimer === undefined && props.gradeFillBreak === undefined) {
		gradeLevel = props.gradeFill;
	}
	if (props.gradeFillHome === undefined && props.gradeFill === undefined && props.gradeFillSelect === undefined && props.gradeFilltimer === undefined && props.gradeFillBreak === undefined) {
		gradeLevel = props.gradeFillStudy;
	}
	if (props.gradeFillStudy === undefined && props.gradeFill === undefined && props.gradeFillHome === undefined && props.gradeFilltimer === undefined && props.gradeFillBreak === undefined) {
		gradeLevel = props.gradeFillSelect;
	}
	if (props.gradeFill === undefined && props.gradeFillStudy === undefined && props.gradeFillSelect === undefined && props.gradeFilltimer === undefined && props.gradeFillBreak === undefined) {
		gradeLevel = props.gradeFillHome;
	}
	if (props.gradeFill === undefined && props.gradeFillStudy === undefined && props.gradeFillSelect === undefined && props.gradeFillHome === undefined && props.gradeFillBreak === undefined) {
		gradeLevel = props.gradeFillTimer;
	}
	if (props.gradeFill === undefined && props.gradeFillStudy === undefined && props.gradeFillSelect === undefined && props.gradeFillHome === undefined && props.gradeFillTimer === undefined) {
		gradeLevel = props.gradeFillBreak;
	}

	
	return (
		<div className="statPanel">
			<div className="flex flex-col">
				<div className="flex flex-row p-0.25">
					<img src={Knowledge} alt="" style={iconStyle} />
					<Statbar fillLevel={gradeLevel} />
				</div>
				<div className="flex flex-row p-0.25">
					<img src={Energy} alt="" style={iconStyle} />
					<Statbar fillLevel={fillLevel} />
				</div>
				<div className="flex flex-row p-0.25">
					<img src={Nonstress} alt="" style={iconStyle} />
					<Statbar fillLevel={stressLevel} />
				</div>
			</div>
			<Betyg />
		</div>
	);
}

export default Statpanel;
