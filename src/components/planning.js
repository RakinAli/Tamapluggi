import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Planning() {
	const [task, setTask] = useState([]);
	const [input, setInput] = useState("");
	let navigate = useNavigate();

	function handleBack() {
		navigate("/home");
	}

	function handleAdd() {
		if(input === ""){
			return;
		}
		else{
			setTask([...task, input]);
			setInput("");
		}
		
	}

	function handleDelete(index) {
		let arrCopy = [...task];
		arrCopy.splice(index, 1);
		setTask(arrCopy);
	}

	const flexStyle = {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row"
	}

	return (
		<main>
			<h2>Planning</h2>
			<div style = {flexStyle}>
				<label>Add a task:</label>
				<input
					placeholder="Enter task info..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button onClick={handleAdd} className = "smallButton">+</button>
			</div>

			<section>
				<h3 style = {{fontWeight: "bold"}}>TODO-list</h3>
				{task.map((item, index) => {
					return (
						<div>
							<div className="nextTo">
								<p>{item}</p>
								<button onClick={() => handleDelete(index) } className = "smallButton">Done</button>
							</div>
						</div>
					);
				})}
			</section>
		</main>
	);
}

export default Planning;
