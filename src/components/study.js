import React, { useState } from "react";
import Statpanel from "./statpanel";
import SelectButtons from "./selectbuttons";
import TablePicture from "../Images/study_enter.png";

function Study() {
	const iconStyle = {
		width: "50px",
	};

	const [bool, setBool] = useState(false);

	function handleBoolean() {
		setBool(true);
	}

	return (
		<main className="flex flex-col pt-3 ">
			<Statpanel />
			<div>
			
				{bool ? (
					
					
					<SelectButtons />
					
				) : (
					<img src={TablePicture} onClick={handleBoolean} />
				)}
			</div>
		</main>
	);
}

export default Study;
