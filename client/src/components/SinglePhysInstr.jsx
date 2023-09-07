// This component renders a single physical instrument

import { useState, useEffect } from "react";
import { fetchSinglePhysInstr } from "../../fetching";

export default function SinglePhysInstr({ physInstrPIB, PIBid }) {
	const [physInstr, setPhysInstr] = useState({});
	const SPI_id = PIBid;
	const physInstrSPI = physInstrPIB;

	console.log("PISPI", physInstrSPI);

	useEffect(() => {
		async function getSinglePhysInstr() {
			const APIResponse = await fetchSinglePhysInstr(SPI_id);
			if (APIResponse) {
				setPhysInstr(APIResponse);
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
				Tags:{" "}
				{physInstrSPI.tags[0] ? JSON.stringify(physInstrSPI.tags) : "None"}
			</h5>
		</div>
	);
}
