import React from "react";
import Statpanel from "./Statpanel";
import Pluggi from "../Images/Pluggi/1yr_walking.gif"

/*Fixat upp Flex box skit inför styling */
function Home(props) {

	return (
		/*This flexbox Column is the main*/
		<main className="flex flex-col pt-3">
			<Statpanel energyFill = {props.energyFill} gradeFillHome = {props.gradeFill}/>
			
			<div>
				<h2>Home</h2>
				<img src = {Pluggi} alt = ""/>
			</div>
		</main>
	);
}

/*Kanske fixa någon betyg logik under?*/

/*Kanske fixa någon logik för progression bar */

export default Home;
