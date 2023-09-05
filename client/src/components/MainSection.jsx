// This component is holds the main content for the page

import { Routes, Route } from "react-router-dom";
import AllPhysInstr from "./AllPhysInstr";
import AllVSTInstr from "./AllVSTInstr";
import Genres from "./Genres";
// import Home from "./Home";
// import Login from "./Login";
// import Logout from "./Logout";

export default function MainSection() {
	return (
		<div id="main-section">
			<h1>MAIN CONTENT SECTION HERE</h1>
			<Routes>
				{/* <Route path="/home" element={<Home />} /> */}
				<Route path="/physical" element={<AllPhysInstr />} />
				<Route path="/virtual" element={<AllVSTInstr />} />
				<Route path="/genres" element={<Genres />} />
				{/* <Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} /> */}
			</Routes>
		</div>
	);
}
