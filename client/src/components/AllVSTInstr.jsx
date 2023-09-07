// This component renders all or filtered physical instruments in the user's studio

import { useState, useEffect } from "react";
import { fetchAllVSTInstr } from "../../fetching";
import DeleteVSTInstr from "./DeleteVSTInstr";
import VSTInstrButton from "./VSTInstrButton";

export default function AllVSTInstr() {
	const [VSTInstrs, setVSTInstrs] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllVSTInstr() {
			const APIResponse = await fetchAllVSTInstr();
			if (APIResponse) {
				setVSTInstrs(APIResponse);
			} else {
				console.error("Unable to fetch all virtual instruments");
			}
		}
		getAllVSTInstr();
	}, []);

	// allows for search functionality
	// users can search any of the instrument parameters AND tags
	const VSTInstrToDisplay = searchParam
		? VSTInstrs.filter(
				(VSTInstr) =>
					VSTInstr.instr_name.toLowerCase().includes(searchParam) ||
					VSTInstr.instr_family.toLowerCase().includes(searchParam) ||
					VSTInstr.instr_category.toLowerCase().includes(searchParam) ||
					VSTInstr.brand.toLowerCase().includes(searchParam) ||
					VSTInstr.engine.toLowerCase().includes(searchParam) ||
					JSON.stringify(VSTInstr.tags).toLowerCase().includes(searchParam)
		  )
		: VSTInstrs;

	// converts instrument name to title case/sentence case for later display in rendering
	function titleCase(str) {
		str = str.toLowerCase().split(" ");
		for (let i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(" ");
	}

	return (
		<div>
			<div>
				<div id="all-VST-instr-header">
					<h2>ALL VIRTUAL INSTRUMENTS</h2>
				</div>
				<div id="search-VST-instr">
					<label>
						Search:{" "}
						<input
							id="search-instr-bar"
							type="text"
							placeholder="Search instrument name, parameter, or tag"
							onChange={(event) =>
								setSearchParam(event.target.value.toLowerCase())
							}
						/>
					</label>
				</div>
				<div id="all-phys-instr-gallery">
					{VSTInstrToDisplay.map((VSTInstr) => {
						const VSTInstrId = VSTInstr.vst_id;
						const VSTInstrAV = VSTInstr;
						return (
							<>
								<div id="VST-instr-card">
									<h3 id="VST-instr-header">
										{titleCase(VSTInstr.instr_name)}
									</h3>
									<h5>Category: {VSTInstr.instr_category}</h5>
									<h5>Family: {VSTInstr.instr_family}</h5>
									<h5>Brand: {VSTInstr.brand}</h5>
									<h5>Engine: {VSTInstr.engine}</h5>
									<h5>
										Physical Option Available?:{" "}
										{VSTInstr.phys_avail ? "Yes" : "No"}
									</h5>
									<h5>
										Tags:{" "}
										{VSTInstr.tags[0] ? JSON.stringify(VSTInstr.tags) : "None"}
									</h5>
									<VSTInstrButton
										key={VSTInstrId}
										VSTInstrAV={VSTInstrAV}
										VSTInstrId={VSTInstrId}
									/>
									<DeleteVSTInstr />
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
