import React from "react";
import Statbar from "./statbar";
import Betyg from "./betyg";
import Knowledge from "../Images/Icons/knowledge.svg";
import Energy from "../Images/Icons/energy.svg";
import Nonstress from "../Images/Icons/nonstress.svg";
import Pluggi from "../Images/Pluggi/1yr_walking.gif";

function Study() {
	const iconStyle = {
		width: "50px",
	};

	return (
		<main className="flex flex-col pt-3 ">
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
			<div>
				<h1 onClick={()=>{return (
					<div className="flex flex-col pt-3">
						<button variant="success">Start</button>
						<button variant="success">Set schedule</button>
						<button variant="success">History</button>
					</div>
				);}}>
				[insert table pic here]</h1>
				<h1>[Insert picture of the small guy here]</h1>
			</div>
		</main>
	);
}

export default Study;
