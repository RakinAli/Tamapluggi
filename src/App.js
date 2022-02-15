import React,{useState} from "react";
import Navbar from "./components/Navbar";
import FlashcardSelect from "./components/FlashcardSelect";
import Home from "./components/Home";
import Planning from "./components/Planning";
import Statistics from "./components/Statistics";
import Study from "./components/Study";
import Header from "./components/Header";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Settings from "./components/Settings";
import Flashcard2 from "./components/Flashcard2";
import FlashcardSettings from "./components/FlashcardSettings";


/* Hann inte göra klart Router-> Fixar klart Router idag*/
function App() {
   	const [energyFill, setEnergyFill] = useState(50);
   	const [task, setTask] = useState([]);
   	const [minute, setMinute] = useState(25);
	const [second, setSecond] = useState(0);
	const [shortBreak, setShortBreak] = useState(5);
	const [longBreak, setLongBreak] = useState(30);
	const [showOptions, setShowOptions] = useState(false);

	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" exact element={<Home energyFill = {energyFill}/>} />
					<Route path="/Planning" exact element={<Planning  task = {task}
						setTask = {setTask}
					/>} />
					<Route path="/Statistics" exact element={<Statistics />} />
					<Route path="/Study" element={<Study energyFill = {energyFill}
						setEnergyFill = {setEnergyFill} 
						minute = {minute}
						setMinute= {setMinute}
						second = {second}
						setSecond = {setSecond}
						shortBreak = {shortBreak}
						setShortBreak = {setShortBreak}
						longBreak = {longBreak}
						setLongBreak = {setLongBreak}
					 />}/>
				   <Route path="/Settings" exact element={<Settings />} />
				   <Route path="/FlashcardSelect" exact element={<FlashcardSelect 
						showOptions = {showOptions}
						setShowOptions = {setShowOptions}
					/>} />
				   <Route path="/Flashcard2" exact element={<Flashcard2 
						showOptions = {showOptions}
						setShowOptions = {setShowOptions}
				   />} />
				   	<Route path="/FlashcardSettings" exact element={<FlashcardSettings 
						showOptions = {showOptions}
						setShowOptions = {setShowOptions}
				   />} />
				</Routes>
				<Navbar />
			</div>
		</Router>
	);
}

export default App;
