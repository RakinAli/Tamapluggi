import React from "react";
import Statpanel from "./Statpanel";
import SelectButtons from "./Selectbuttons";

function Study(props) {
	return (
		<main className="flex flex-col pt-3 ">
			<Statpanel energyFillStudy={props.energyFill} />
			<SelectButtons energyFill={props.energyFill} 
			setEnergyFill = {props.setEnergyFill}
			/>
		</main>
	);
}

export default Study;
