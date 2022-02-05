import React from "react";
import Statpanel from "./statpanel";
import Pluggi from "../Images/Pluggi/1yr_walking.gif"

/*Fixat upp Flex box skit inför styling */
function Home() {

	const pluggiStyle = {
		maxWidth: "450px"
	}

	return (
		/*This flexbox Column is the main*/
		<main className="flex flex-col pt-3 ">
			<Statpanel />
			<div>
				<h1>
					<img src = {Pluggi} alt = "" style = {pluggiStyle}/>
				</h1>
			</div>
		</main>
	);
}

/*Kanske fixa någon betyg logik under?*/

/*Kanske fixa någon logik för progression bar */

export default Home;
