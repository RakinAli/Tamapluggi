import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar";
import Flashcards from "./components/flashcards";
import Home from "./components/home";
import Planning from "./components/planning";
import Stats from "./components/stats";
import Study from "./components/study";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


/* Hann inte göra klart Router-> Fixar klart Router idag*/
function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/flashcards" exact element={<Flashcards/>} />
					<Route path="/home" exact element={<Home/>} />
					<Route path="/planning" exact element={<Planning/>} />
					<Route path="/stats" exact element={<Stats/>}/>
					<Route path="/study" element={<Study/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
