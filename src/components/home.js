import React from "react";
import Statbar from "./statbar";
import Betyg from "./betyg";
import Knowledge from "../Images/Icons/knowledge.svg"
import Energy from "../Images/Icons/energy.svg"
import Nonstress from "../Images/Icons/nonstress.svg"
import Pluggi from "../Images/Pluggi/1yr_walking.gif"

/*Fixat upp Flex box skit inför styling */
function Home() {

	const iconStyle = {
		width: "50px"
	}

	return (
		/*This flexbox Column is the main*/
		<main className=" flex flex-col pt-3">
			<div className="flex flex-row">
				<div className="flex flex-col">
					<div className="flex flex-row p-1">
						<img src = {Knowledge} alt = "" style = {iconStyle}/>
						<Statbar fillLevel = "75"/>
					</div>
					<div className="flex flex-row p-1">
						<img src = {Energy} alt = "" style = {iconStyle}/>
						<Statbar fillLevel = "10"/>
					</div>
					<div className="flex flex-row p-1">
						<img src = {Nonstress} alt = "" style = {iconStyle}/>
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
