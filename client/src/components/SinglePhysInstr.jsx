// This component renders a single physical instrument

import { useState, useEffect } from "react";
import { fetchSinglePhysInstr } from "../../fetching";

export default function SinglePhysInstr({ PIBid }) {
	const [physInstr, setPhysInstr] = useState({});
	const SPI_id = PIBid;

	useEffect(() => {
		async function getSinglePhysInstr() {
			console.log("SPI Id", SPI_id);
			const APIResponse = await fetchSinglePhysInstr(SPI_id);
			console.log(APIResponse);
			if (APIResponse) {
				setPhysInstr(APIResponse);
				console.log("physInstr is ", physInstr);
				console.log("tags", JSON.stringify(physInstr.tags));
			} else {
				console.error("Unable to fetch single physical instrument");
			}
		}
		getSinglePhysInstr();
	}, []);

	return (
		<div>
			<h5>Category: {physInstr.instr_category}</h5>
			<h5>Family: {physInstr.instr_family}</h5>
			<h5>Articulation Type: {physInstr.art_type}</h5>
			<h5>VST Available?: {physInstr.vst_avail ? "Yes" : "No"}</h5>
			<h5>
				Tags: {physInstr.tags > 0 ? JSON.stringify(physInstr.tags) : "None"}
			</h5>
		</div>
	);
}
