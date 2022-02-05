import React from "react";
import Statpanel from "./statpanel";
import SelectButtons from "./selectbuttons";

function StudySelect() {
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

export default StudySelect;