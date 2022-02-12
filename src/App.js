import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Flashcard from "./components/Flashcard";
import Home from "./components/Home";
import Planning from "./components/Planning";
import Statistics from "./components/Statistics";
import Study from "./components/Study";
import Header from "./components/Header";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Settings from "./components/Settings";


/* Hann inte göra klart Router-> Fixar klart Router idag*/
function App() {
   const [energyFill, setEnergyFill] = useState(50);
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/Flashcard" exact element={<Flashcard />} />
					<Route path="/Home" exact element={<Home energyFill = {energyFill}/>} />
					<Route path="/Planning" exact element={<Planning />} />
					<Route path="/Statistics" exact element={<Statistics />} />
					<Route path="/Study" element={<Study energyFill = {energyFill}
					 setEnergyFill = {setEnergyFill} />}/>
				   <Route path="/Settings" element={<Settings />} />
				</Routes>
				<Navbar />
			</div>
		</Router>
	);
}

export default App;
