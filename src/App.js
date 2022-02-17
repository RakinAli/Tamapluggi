import React, { useState } from "react";
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

import Settings from "./components/Settings";
import Planning from "./components/Planning";
import Statistics from "./components/Statistics";

import Flashcard from "./components/Flashcard"; /*Old flashcard page*/
import FlashcardEdit from "./components/FlashcardEdit";

/* Hann inte göra klart Router-> Fixar klart Router idag*/
function App() {
	//Statpanel
	const [energyFill, setEnergyFill] = useState(50);
	
	//Study
	const [minute, setMinute] = useState(25);
	const [second, setSecond] = useState(0);
	const [shortBreak, setShortBreak] = useState(5);
	const [longBreak, setLongBreak] = useState(30);
	const [breakTime, setBreakTime] = useState(5);
	const [flashcardList, setFlashcardList] = useState([]); 
	//Flashcards
	const [showOptions, setShowOptions] = useState(false);

	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" exact element={<Home energyFill={energyFill} />} />
					<Route
						path="/Flashcard"
						exact
						element={<Flashcard energyFill={energyFill} />}
					/>
					<Route
						path="/Planning"
						exact
						element={<Planning/>}
					/>
					<Route path="/Statistics" exact element={<Statistics />} />
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
						element={<Break energyFill={energyFill} breakTime={breakTime} />}
					/>
					<Route path="/Settings" exact element={<Settings />} />
					<Route
						path="/FlashcardSelect"
						exact
						element={
							<FlashcardSelect
								showOptions={showOptions}
								setShowOptions={setShowOptions}
								energyFill={energyFill}
								setEnergyFill={setEnergyFill}
							/>
						}
					/>
					<Route
						path="/Flashcard2"
						exact
						element={
							<Flashcard2
								showOptions={showOptions}
								setShowOptions={setShowOptions}
								energyFill={energyFill}
								setEnergyFill={setEnergyFill}
								flashcardList = {flashcardList}
							/>
						}
					/>
					<Route
						path="/FlashcardSettings"
						exact
						element={
							<FlashcardSettings
								showOptions={showOptions}
								setShowOptions={setShowOptions}
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
								setFlashcardList = {setFlashcardList}
								flashcardList = {flashcardList}
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
