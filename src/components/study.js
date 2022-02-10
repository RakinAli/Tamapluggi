import React from "react";
import Statpanel from "./Statpanel";
import SelectButtons from "./Selectbuttons";

function Study() {
	const iconStyle = {
		width: "50px",
	};

	return (
		<main className="flex flex-col pt-3 ">
			<Statpanel />
			<SelectButtons />
		</main>
	);
}

export default Study;
