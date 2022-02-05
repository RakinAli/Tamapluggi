import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Planning() {
	const [task, setTask] = useState([]);
	const [input, setInput] = useState("");
	const [bool, setBool] = useState(false);
   let navigate = useNavigate();
	
	function handleClick() {
		navigate("/home");
	}
	function handleBoolean() {
		setBool(true);
    }
	function handleAdd(){

	}

	return (
		<div>
			<h1>Planning</h1>

			{bool ? (
				<div>
					<input
						placeholder="Add a task"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button onClick = {handleAdd()}>+</button>
					<button>-</button>
				</div>
			) : (
				""
			)}

			<div>
				<button onClick={handleBoolean()}>Add</button>
				<button onClick={handleClick()}>Back</button>
			</div>
		</div>
	);
}
 
export default Planning;
