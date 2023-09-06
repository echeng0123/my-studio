// This component renders all or filtered physical instruments in the user's studio

import { useState, useEffect } from "react";
import { fetchAllPhysInstr } from "../../fetching";
import PhysInstrButton from "./PhysInstrButton";
import SinglePhysInstr from "./SinglePhysInstr";

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

	// grabs button status from child
	function CallBack(buttonStatus) {
		setInstrId(buttonStatus);
		return instrId;
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
				<div id="all-phys-instr-gallery">
					{physInstrToDisplay.map((physInstr) => {
						const PI_id = physInstr.phys_id;
						return (
							// eslint-disable-next-line react/jsx-key
							<div id="main-phys-instr-container">
								<div>
									<div id="phys-instr-card">
										<h3 id="phys-instr-header">
											{titleCase(physInstr.instr_name)}
										</h3>
										<PhysInstrButton handleCallback={CallBack} PI_id={PI_id} />
									</div>
								</div>
								<div>
									<div id="phys-instr-card-details">
										<SinglePhysInstr physInstr={physInstr} PI_id={PI_id} />
									</div>
									{/* {instrId == PI_id ? (
										<div id="phys-instr-card-details">
											<SinglePhysInstr instrId={instrId} />
										</div>
									) : (
										<></>
									)} */}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

{
	/* <h5>Category: {physInstr.instr_category}</h5>
<h5>Family: {physInstr.instr_family}</h5>
<h5>Articulation Type: {}</h5>
<h5>VST Available?: {physInstr.vst_avail ? "Yes" : "No"}</h5>
<h5>
    Tags:{" "}
    {physInstr.tags[0]
        ? JSON.stringify(physInstr.tags)
        : "None"}
</h5> */
}