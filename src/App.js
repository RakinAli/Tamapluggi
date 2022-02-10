import React from "react";
import Navbar from "./components/Navbar";
import Flashcard from "./components/Flashcard";
import Home from "./components/Home";
import Planning from "./components/Planning";
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
					<Route path="/Home" exact element={<Home />} />
					<Route path="/Planning" exact element={<Planning />} />
					<Route path="/Statistics" exact element={<Statistics />} />
					<Route path="/Study" element={<Study />} />
					<Route path="/Settings" element={<Settings />} />
					<Route path="/Timer" element={<Timer />} />
				</Routes>
				<Navbar />
			</div>
		</Router>
	);
}

export default App;
