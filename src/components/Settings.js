import React, { useState } from "react";
import { DatePicker } from "@mantine/dates";

function Settings() {
	return (
		<main>
			<h2>Settings</h2>
			<div className="flex flex-col">
				<div className="flex ">
					<DatePicker placeholder="Pick date" label="Graduation Date" />
				</div>
				<label>Study goal for today</label>
			</div>
		</main>
	);
}

export default Settings;
