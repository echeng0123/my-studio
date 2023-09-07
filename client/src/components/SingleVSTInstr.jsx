// This component renders a single virtual instrument

import { useState, useEffect } from "react";
import { fetchSingleVSTInstr } from "../../fetching";

export default function SingleVSTInstr({ VSTInstrVIB, VIBid }) {
	const [VSTInstr, setVSTInstr] = useState({});
	const SVI_id = VIBid;
	const VSTInstrSVI = VSTInstrVIB;

	useEffect(() => {
		async function getSingleVSTInstr() {
			const APIResponse = await fetchSingleVSTInstr(SVI_id);
			if (APIResponse) {
				setVSTInstr(APIResponse);
			} else {
				console.error("Unable to fetch single virtual instrument");
			}
		}
		getSingleVSTInstr();
	}, []);

	return (
		<div>
			<h5>Family: {VSTInstr.instr_family}</h5>
			<h5>Category: {VSTInstr.instr_category}</h5>
			<h5>Engine: {VSTInstr.engine}</h5>
			<h5>Brand: {VSTInstr.brand}</h5>
			<h5>Physical Version Available?: {VSTInstr.phys_avail ? "Yes" : "No"}</h5>
			<h5>
				Tags: {VSTInstrSVI.tags[0] ? JSON.stringify(VSTInstrSVI.tags) : "None"}
			</h5>
		</div>
	);
}
