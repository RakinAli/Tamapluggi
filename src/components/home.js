import React from "react";
import Statbar from "./statbar";
import Betyg from "./betyg";
import Pluggi from "../Images/Pluggi/1yr_walking.gif"

/*Fixat upp Flex box skit inför styling */
function Home() {
	return (
		/*This flexbox Column is the main*/
		<main className=" flex flex-col">
			<div className="flex flex-row">
				<div className="flex flex-col">
					<div className="flex flex-row p-0.5">
						<h3>Icon 1</h3>
						<Statbar fillLevel = "75"/>
					</div>
					<div className="flex flex-row p-0.5">
						<h3>Icon 2 </h3>
						<Statbar fillLevel = "10"/>
					</div>
					<div className="flex flex-row p-0.5">
						<h3>Icon 3 </h3>
						<Statbar fillLevel = "50"/>
					</div>
				</div>
				<Betyg />
			</div>
			<div>
				<h1>
					<img src = {Pluggi} alt = "" />
				</h1>
			</div>
		</main>
	);
}

/*Kanske fixa någon betyg logik under?*/

/*Kanske fixa någon logik för progression bar */

export default Home;
