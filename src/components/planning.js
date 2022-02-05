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

	const inputStyle = {
		border: "solid 1px",
		borderRadius: "5px",
		paddingLeft: "10px",
		marginLeft: "10px",
		marginBottom: "10px"
	};

 	const buttonStyle = {
		backgroundColor: "#649552",
		borderRadius: "10px",
		marginLeft: "10px",
		marginBottom: "10px",
		padding: "2px 10px",
		color: "#FFFFFF",
		fontWeight: "bold"
	};

	return (
		<main>
			<h2>Planning</h2>
			<div className="nextTo">
				<p>Add a task:</p>
				<input
					placeholder="Enter task info here..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					style = {inputStyle}
				/>
				<button onClick={handleAdd} style = {buttonStyle}>+</button>
			</div>

			<section>
				<h3>TODO-list</h3>
				{task.map((item, index) => {
					return (
						<div>
							<div className="nextTo">
								<p>{item}</p>
								<button onClick={() => handleDelete(index) } style = {buttonStyle}>Done</button>
							</div>
						</div>
					);
				})}
			</section>
		</main>
	);
}

export default Planning;
