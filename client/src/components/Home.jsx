// This component handles the homepage
import NewPhysButton from "./NewPhysButton";
import NewVSTButton from "./NewVSTButton";
import NewGenreButton from "./NewGenreButton";
import { useState, useEffect } from "react";
import { fetchAllPhysInstr } from "../../fetching";
import { fetchAllVSTInstr } from "../../fetching";
import Register from "./Register";
import Login from "./Login";

export default function Home({ token, setToken, currentUser, setCurrentUser }) {
	const [numPhys, setNumPhys] = useState("");
	const [numVST, setNumVST] = useState("");

	// Grab the number of total physical instruments in studio currently
	useEffect(() => {
		async function countAllPhysInstr() {
			const APIResponse = await fetchAllPhysInstr();
			if (APIResponse) {
				setNumPhys(APIResponse.length);
			} else {
				console.error("Unable to fetch all physical instruments");
			}
		}
		countAllPhysInstr();
	}, []);

	// Grab the number of total virtual instruments in studio currently
	useEffect(() => {
		async function countAllVSTInstr() {
			const APIResponse = await fetchAllVSTInstr();
			if (APIResponse) {
				setNumVST(APIResponse.length);
			} else {
				console.error("Unable to fetch all virtual instruments");
			}
		}
		countAllVSTInstr();
	}, []);

	return (
		<div id="home-container">
			{!localStorage.getItem("token") ? (
				<div id="home-content">
					<h1>WELCOME TO THE STUDIO</h1>
					<div id="home-box">
						<div>
							<Register />
						</div>
						<div>
							<Login
								token={token}
								setToken={setToken}
								currentUser={currentUser}
								setCurrentUser={setCurrentUser}
							/>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			{localStorage.getItem("token") ? (
				<div>
					<div id="home-header">
						<h1>Welcome!</h1>
						<h3>
							You have {numPhys} physical instruments and {numVST} VSTs in your
							studio.
						</h3>
					</div>
					<div id="add-buttons-container">
						<NewPhysButton />
						<NewVSTButton />
						<NewGenreButton />
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
