// This component renders all or filtered physical instruments in the user's studio

import { useState, useEffect } from "react";
import { fetchAllPhysInstr } from "../../fetching";

export default function AllPhysInstr() {
	const [physInstrs, setPhysInstrs] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllPhysInstr() {
			const APIResponse = await fetchAllPhysInstr();
			console.log(APIResponse);
			if (APIResponse) {
				setPhysInstrs(APIResponse);
			} else {
				console.error("Unable to fetch all physical instruments");
			}
		}
		getAllPhysInstr();
	}, []);

	// allows for search functionality
	// users can search any of the instrument parameters AND tags
	const physInstrToDisplay = searchParam
		? physInstrs.filter(
				(physInstr) =>
					physInstr.instr_name.toLowerCase().includes(searchParam) ||
					physInstr.instr_family.toLowerCase().includes(searchParam) ||
					physInstr.instr_category.toLowerCase().includes(searchParam) ||
					physInstr.art_type.toLowerCase().includes(searchParam) ||
					JSON.stringify(physInstr.tags).toLowerCase().includes(searchParam)
		  )
		: physInstrs;

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
				<div id="all-phys-instr-header">
					<h2>ALL PHYSICAL INSTRUMENTS</h2>
				</div>
				<div id="search-phys-instr">
					<label>
						Search:{" "}
						<input
							id="search-instr-bar"
							type="text"
							placeholder="Search instrument name or any parameter"
							onChange={(event) =>
								setSearchParam(event.target.value.toLowerCase())
							}
						/>
					</label>
				</div>
				<div id="all-phys-instr-gallery">
					{physInstrToDisplay.map((physInstr) => {
						return (
							<>
								<div id="phys-instr-card">
									<h3 id="phys-instr-header">
										{titleCase(physInstr.instr_name)}
									</h3>
									<h5>Category: {physInstr.instr_category}</h5>
									<h5>Family: {physInstr.instr_family}</h5>
									<h5>Articulation Type: {physInstr.art_type}</h5>
									<h5>VST Available?: {physInstr.vst_avail ? "Yes" : "No"}</h5>
									<h5>
										Tags:{" "}
										{physInstr.tags[0]
											? JSON.stringify(physInstr.tags)
											: "None"}
									</h5>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
