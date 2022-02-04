import React from "react";

function Home() {
	return (
		/*This flexbox Column is the main*/
		<main className=" flex flex-col">
			<div className="flex flex-row">
				<div className="flex flex-row p-4">
					<h3>Icon 1</h3>
					<div className="box-border h-32 w-32 p-4 border-4 bg-red-200"></div>
				</div>
				<div className="flex flex-row p-4">
					<h3>Icon 2 </h3>
					<div className="box-border  w-32 p-4 border-4 bg-red-200"></div>
				</div>
				<div className="flex flex-row p-4">
					<h3>Icon 2 </h3>
					<div className="box-border h-32 w-32 p-4 border-4 bg-red-200"></div>
				</div>
			</div>

		</main>
	);
}

export default Home;
