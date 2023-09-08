// This component handles the homepage
import NewPhysButton from "./NewPhysButton";
import NewVSTButton from "./NewVSTButton";
import NewGenreButton from "./NewGenreButton";
import { useState, useEffect } from "react";
import { fetchAllPhysInstr } from "../../fetching";
import { fetchAllVSTInstr } from "../../fetching";

export default function Home() {
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
			<div id="home-header">
				<h1>Welcome, Emily</h1>
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
	);
}
