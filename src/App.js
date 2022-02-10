import React from "react";
import Navbar from "./components/Navbar";
import Flashcard from "./components/Flashcard";
import Home from "./components/home";
import Planning from "./components/planning";
import Statistics from "./components/Statistics";
import Study from "./components/Study";
import Header from "./components/Header";
import Timer from "./components/Timer";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Settings from "./components/Settings";


/* Hann inte göra klart Router-> Fixar klart Router idag*/
function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/Flashcard" exact element={<Flashcard />} />
					<Route path="/home" exact element={<Home />} />
					<Route path="/planning" exact element={<Planning />} />
					<Route path="/statistics" exact element={<Statistics />} />
					<Route path="/study" element={<Study />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/timer" element={<Timer />} />
				</Routes>
				<Navbar />
			</div>
		</Router>
	);
}

export default App;
