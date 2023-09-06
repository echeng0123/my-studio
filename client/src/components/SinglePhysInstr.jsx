// This component renders a single physical instrument

import { useState, useEffect } from "react";
import { fetchSinglePhysInstr } from "../../fetching";

export default function SinglePhysInstr({ physInstr, instrId }) {
	// const [physInstrA, setPhysInstrA] = useState({});
	const SPI_id = instrId;

	// useEffect(() => {
	// 	async function getSinglePhysInstr() {
	// 		const APIResponse = await fetchSinglePhysInstr(SPI_id);
	// 		console.log(APIResponse);
	// 		if (APIResponse) {
	// 			setPhysInstr(APIResponse);
	// 			console.log("physInstr is ", physInstr);
	// 		} else {
	// 			console.error("Unable to fetch single physical instrument");
	// 		}
	// 	}
	// 	getSinglePhysInstr();
	// }, []);

	return (
		<div>
			<h5>Category: {physInstr.instr_category}</h5>
			<h5>Family: {physInstr.instr_family}</h5>
			<h5>Articulation Type: {physInstr.art_type}</h5>
			<h5>VST Available?: {physInstr.vst_avail ? "Yes" : "No"}</h5>
			{/* <h5>
				Tags: {physInstr.tags[0] ? JSON.stringify(physInstr.tags) : "None"}
			</h5> */}
		</div>
	);
}
