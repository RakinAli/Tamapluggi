import React, { useState } from "react";
import Statpanel from "./statpanel";
import SelectButtons from "./selectbuttons";

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
					<h1 onClick={handleBoolean}>[insert table pic here]</h1>
				)}

				<h1>[Insert picture of the small guy here]</h1>
			</div>
		</main>
	);
}

export default Study;
