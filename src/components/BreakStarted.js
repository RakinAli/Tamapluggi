import React, { useState } from "react";
import { Link } from "react-router-dom";
import Break from "./Break";
import Timer from "./Timer";

function BreakStarted(props) {
	const [breakTime, setBreakTime] = useState(0);
	const [breakBool, setBreakBool] = useState(false);
	const [studyBool, setStudyBool] = useState(false);

	function breakFunction(time) {
		setBreakTime(time);
		setBreakBool(true);
	}

	return (
		<div>
			{studyBool ? (
				<Timer studyTime={5} />
			) : (
				<div>
					{breakBool ? (
						<Break
							breakTime={breakTime}
							energyFill={props.energyFill}
							setEnergyFill={props.setEnergyFill}
						/>
					) : (
						<div className="popUpWindow">
							<h3>Time for a break?</h3>
							<button
								variant="success"
								className="largeButton"
								onClick={() => breakFunction(5)}
							>
								Short break
							</button>
							<button
								variant="success"
								className="largeButton"
								onClick={() => breakFunction(30)}
							>
								Long break
							</button>
							<button
								variant="success"
								className="largeButton"
								onClick={() => setStudyBool(true)}
							>
								Study for a few more minutes
							</button>
							<Link to="/Home">
								<button variant="success" className="largeButton">
									Done for today
								</button>
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default BreakStarted;
