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
		setTask([...task, input]);
	}

	function handleDelete(index) {
		let arrCopy = [...task];
		arrCopy.splice(index, 1);
		setTask(arrCopy);
	}

	const inputStyle = {

	};

 	const buttonStyle = {
		backgroundColor: "#649552"
	};

	return (
		<main>
			<h2>Planning</h2>
			<div className="nextTo">
				<input
					placeholder="Add a task"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button onClick={handleAdd}>+</button>
			</div>

			<section>
				<h1>List of todos (we can change the name later)</h1>
				{task.map((item, index) => {
					return (
						<div>
							<div className="nextTo">
								<p>{item}</p>
								<button onClick={() => handleDelete(index) } style = {buttonStyle}>Remove</button>
							</div>
						</div>
					);
				})}
			</section>
		</main>
	);
}

export default Planning;
