// This component renders all or filtered physical instruments in the user's studio

import { useState, useEffect } from "react";
import { fetchAllPhysInstr } from "../../fetching";
import PhysInstrButton from "./PhysInstrButton";
import CreateNewPhysInstr from "./CreateNewPhysInstr";
import DeletePhysInstr from "./DeletePhysInstr";

export default function AllPhysInstr() {
	const [physInstrs, setPhysInstrs] = useState([]);
	const [searchParam, setSearchParam] = useState("");
	const [instrId, setInstrId] = useState(null);

	useEffect(() => {
		async function getAllPhysInstr() {
			const APIResponse = await fetchAllPhysInstr();
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
							placeholder="Search instrument name, parameter, or tag"
							onChange={(event) =>
								setSearchParam(event.target.value.toLowerCase())
							}
						/>
					</label>
				</div>
				<div id="create-new-instr-container">
					<CreateNewPhysInstr />
				</div>
				<div id="all-phys-instr-gallery">
					{physInstrToDisplay.map((physInstr) => {
						const PI_id = physInstr.phys_id;
						const physInstrAP = physInstr;
						return (
							// eslint-disable-next-line react/jsx-key
							<div id="main-phys-instr-container">
								<div>
									<div id="phys-instr-card">
										<h3 id="phys-instr-header">
											{titleCase(physInstr.instr_name)}
										</h3>
										<PhysInstrButton
											key={PI_id}
											PI_id={PI_id}
											physInstrAP={physInstrAP}
										/>
										<DeletePhysInstr physId={PI_id} />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
