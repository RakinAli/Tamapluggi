import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Planning(props) {
	//localStorage.setItem('toDoList', JSON.stringify([]));
	//localStorage.removeItem('toDoList');
	
	let stressFill = 100;
	if(JSON.parse(localStorage.getItem('stressFill')) != null){
		stressFill = JSON.parse(localStorage.getItem('stressFill'));
	}

	let clock;
	useEffect(() => {
		
			clock = setInterval(() => {
				
			localStorage.setItem('stressFill', JSON.stringify(Math.min(stressFill + 0.5, 100)));
			}, 1000);

			return () => clearInterval(clock);
		})
	useEffect(() => {

		props.setPlanningBool(false);

		return () => {
			props.setPlanningBool(true);
		}
	}, []);

	let storedTask = [];

	if (JSON.parse(localStorage.getItem('toDoList')) != null) {
		storedTask = JSON.parse(localStorage.getItem('toDoList'));
	}
	else {
		localStorage.setItem('toDoList', JSON.stringify([]));
	}

	const [task, setTask] = useState(storedTask);
	const [input, setInput] = useState("");
	let navigate = useNavigate();

	function handleBack() {
		navigate("/home");
	}

	function handleAdd() {
		if (input === "") {
			return;
		}
		else {
			let newTask = [...task, input];
			setTask(newTask);
			setInput("");
			localStorage.setItem('toDoList', JSON.stringify(newTask));
		}
	}

	function handleDelete(index) {
		let arrCopy = [...task];
		arrCopy.splice(index, 1);
		setTask(arrCopy);
		localStorage.setItem('toDoList', JSON.stringify(arrCopy));
	}

	const flexStyle = {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row"
	}

	return (
		<main>
			<h2>TODO-list</h2>
			<ul>
				{task.map((item, index) => {
					return (
						<li style={{ padding: "0.3rem 0rem" }}>
							<div className="nextTo">
								<p>{item}</p>
								<button onClick={() => handleDelete(index)} className="smallButton">Done</button>
							</div>
						</li>
					);
				})}
			</ul>
			<div className="nextTo" style={flexStyle, { paddingTop: "1rem" }}>
				<input
					placeholder="Enter new task..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button onClick={handleAdd} className="smallButton">Add</button>
			</div>
		</main>
	);
}

export default Planning;
