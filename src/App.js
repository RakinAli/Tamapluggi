import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";

import Study from "./components/Study"; /*Select page for study*/
import Timer from "./components/Timer"; /*Study timer page*/
import Break from "./components/Break"; /*Break timer page*/
import SetSchedule from "./components/SetSchedule"; /*Settings page for study*/

import FlashcardSelect from "./components/FlashcardSelect"; /*Select page for flashcards*/
import Flashcard2 from "./components/Flashcard2"; /*Playing flashcards page*/
import FlashcardSettings from "./components/FlashcardSettings"; /*Settings page for flashcards*/
import FlashcardEdit from "./components/FlashcardEdit"; /* Page for adding flashcards*/

import Settings from "./components/Settings";
import Planning from "./components/Planning";
import Statistics from "./components/Statistics";

import Flashcard from "./components/Flashcard"; /*Old flashcard page*/

/* Hann inte göra klart Router-> Fixar klart Router idag*/
function App() {

	let stress = 20;
	if(localStorage.getItem('stressFill') !== null){
		stress = JSON.parse(localStorage.getItem('stressFill'));
	}

	//Statpanel
	const [energyFill, setEnergyFill] = useState(20);
	const [gradeFill, setGradeFill] = useState(20);
	const [flashcardBool, setFlashcardBool] = useState(true);
	const [planningBool, setPlanningBool] = useState(true);

	//Study
	const [minute, setMinute] = useState(25);
	const [second, setSecond] = useState(0);
	const [shortBreak, setShortBreak] = useState(5);
	const [longBreak, setLongBreak] = useState(30);
	const [breakTime, setBreakTime] = useState(5);

	let clock;
	useEffect(() => {
		if (flashcardBool) {
			clock = setInterval(() => {
				setGradeFill(gradeFill - 0.5);
			}, 1000);
		} else {
			return;
		}
		return () => clearInterval(clock);
	});
	let clockPlanning;
	useEffect(() => {
		if (planningBool) {
			clockPlanning = setInterval(() => {
				localStorage.setItem('stressFill', JSON.stringify(Math.max(stress - 0.5, 0)));
			}, 1000);
		} else {
			return;
		}
		return () => clearInterval(clockPlanning);
	});

	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route
						path="/"
						exact
						element={<Home energyFill={energyFill} gradeFill={gradeFill} />}
					/>
					<Route
						path="/Flashcard"
						exact
						element={<Flashcard energyFill={energyFill} />}
					/>
					<Route path="/Planning" exact element={<Planning 
						setPlanningBool={setPlanningBool}
					/>} />
					<Route
						path="/Statistics"
						exact
						element={
							<Statistics/>
						}
					/>
					<Route
						path="/Study"
						element={
							<Study
								energyFill={energyFill}
								setEnergyFill={setEnergyFill}
								minute={minute}
								setMinute={setMinute}
								second={second}
								setSecond={setSecond}
								shortBreak={shortBreak}
								setShortBreak={setShortBreak}
								longBreak={longBreak}
								setLongBreak={setLongBreak}
								gradeFill={gradeFill}
								setFlashcardBool={setFlashcardBool}
							/>
						}
					/>
					<Route
						path="/Timer"
						exact
						element={
							<Timer
								energyFill={energyFill}
								setEnergyFill={setEnergyFill}
								minute={minute}
								setMinute={setMinute}
								second={second}
								setSecond={setSecond}
								shortBreak={shortBreak}
								setShortBreak={setShortBreak}
								longBreak={longBreak}
								setLongBreak={setLongBreak}
								breakTime={breakTime}
								setBreakTime={setBreakTime}
								gradeFill = {gradeFill}
								setFlashcardBool={setFlashcardBool}
								gradeFill = {gradeFill}
								setGradeFill = {setGradeFill}
 							/>
						}
					/>
					<Route
						path="/SetSchedule"
						exact
						element={
							<SetSchedule
								energyFill={energyFill}
								setEnergyFill={setEnergyFill}
								minute={minute}
								setMinute={setMinute}
								second={second}
								setSecond={setSecond}
								shortBreak={shortBreak}
								setShortBreak={setShortBreak}
								longBreak={longBreak}
								setLongBreak={setLongBreak}
							/>
						}
					/>
					<Route
						path="/Break"
						exact
						element={
							<Break
								energyFill={energyFill}
								breakTime={breakTime}
								setEnergyFill={setEnergyFill}
								gradeFill={gradeFill}
							/>
						}
					/>
					<Route path="/Settings" exact element={<Settings />} />
					<Route
						path="/FlashcardSelect"
						exact
						element={
							<FlashcardSelect
								energyFill={energyFill}
								setEnergyFill={setEnergyFill}
								gradeFill={gradeFill}
								flashcardBool={flashcardBool}
								setFlashcardBool={setFlashcardBool}
							/>
						}
					/>
					<Route
						path="/Flashcard2"
						exact
						element={
							<Flashcard2
								gradeFill={gradeFill}
								energyFill={energyFill}
								setGradeFill={setGradeFill}
								flashcardBool={flashcardBool}
								setFlashcardBool={setFlashcardBool}
							/>
						}
					/>
					<Route
						path="/FlashcardSettings"
						exact
						element={
							<FlashcardSettings
								energyFill={energyFill}
								setEnergyFill={setEnergyFill}
							/>
						}
					/>
					<Route
						path="/FlashcardEdit"
						exact
						element={
							<FlashcardEdit
								energyFill={energyFill}
								setEnergyFill={setEnergyFill}
							/>
						}
					/>
				</Routes>
				<Navbar />
			</div>
		</Router>
	);
}

export default App;
