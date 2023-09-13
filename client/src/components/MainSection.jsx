// This component is holds the main content for the page

import { Routes, Route } from "react-router-dom";
import AllPhysInstr from "./AllPhysInstr";
import AllVSTInstr from "./AllVSTInstr";
import Genres from "./Genres";
import Home from "./Home";
import GenreJunctions from "./GenreJunctions";
import Register from "./Register";
// import Login from "./Login";
// import Logout from "./Logout";

export default function MainSection() {
	return (
		<div id="main-section">
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/physical" element={<AllPhysInstr />} />
				<Route path="/virtual" element={<AllVSTInstr />} />
				<Route path="/genres" element={<Genres />} />
				<Route path="/genrejunctions" element={<GenreJunctions />} />
				<Route path="/users" element={<Register />}></Route>
				{/* <Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} /> */}
			</Routes>
		</div>
	);
}
