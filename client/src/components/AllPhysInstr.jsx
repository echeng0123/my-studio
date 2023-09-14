// This component renders all or filtered physical instruments in the user's studio

import { useState, useEffect } from "react";
import { fetchAllPhysInstr } from "../../fetching";
import PhysInstrButton from "./PhysInstrButton";
import CreateNewPhysInstr from "./CreateNewPhysInstr";
import DeletePhysInstr from "./DeletePhysInstr";
import EditPhysInstr from "./EditPhysInstr";

export default function AllPhysInstr({ token }) {
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

	return (
		<div>
			<div>
				<div id="all-phys-instr-header">
					<h2>ALL PHYSICAL INSTRUMENTS</h2>
				</div>
				<div>
					<h3>Please login to view physical instruments in your studio.</h3>
				</div>

				{/* Only render the instruments table & create new instruments panel if user is logged in */}
				{token ? (
					<div>
						<div id="search-phys-instr">
							<label id="search-label">
								Search:{" "}
								<input
									autoFocus
									id="search-instr-bar"
									type="text"
									placeholder="Search instrument name, parameter, or tag"
									onChange={(event) =>
										setSearchParam(event.target.value.toLowerCase())
									}
								/>
							</label>
						</div>
						<div id="api-container">
							<div id="create-new-instr-container">
								<CreateNewPhysInstr token={token} />
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
													<PhysInstrButton
														key={PI_id}
														PI_id={PI_id}
														physInstrAP={physInstrAP}
														token={token}
													/>
													<EditPhysInstr PI_id={PI_id} />
													<DeletePhysInstr physId={PI_id} />
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
