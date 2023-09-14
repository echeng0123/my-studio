// This component is holds the main content for the page

import { Routes, Route } from "react-router-dom";
import AllPhysInstr from "./AllPhysInstr";
import AllVSTInstr from "./AllVSTInstr";
import Genres from "./Genres";
import Home from "./Home";
import GenreJunctions from "./GenreJunctions";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";

export default function MainSection({
	token,
	setToken,
	currentUser,
	setCurrentUser,
}) {
	return (
		<div id="main-section">
			<Routes>
				<Route
					path="/home"
					element={
						<Home
							token={token}
							setToken={setToken}
							currentUser={currentUser}
							setCurrentUser={setCurrentUser}
						/>
					}
				/>
				<Route path="/physical" element={<AllPhysInstr token={token} />} />
				<Route path="/virtual" element={<AllVSTInstr token={token} />} />
				<Route path="/genres" element={<Genres token={token} />} />
				<Route
					path="/genrejunctions"
					element={<GenreJunctions token={token} />}
				/>
				<Route path="/users" element={<Register />}></Route>
				<Route
					path="/profile"
					element={
						<Profile
							token={token}
							setToken={setToken}
							currentUser={currentUser}
							setCurrentUser={setCurrentUser}
						/>
					}
				></Route>
				<Route
					path="/login"
					element={
						<Login
							token={token}
							setToken={setToken}
							currentUser={currentUser}
							setCurrentUser={setCurrentUser}
						/>
					}
				/>
				<Route
					path="/logout"
					element={<Logout token={token} setToken={setToken} />}
				/>
			</Routes>
		</div>
	);
}
