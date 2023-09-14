// This component renders all or filtered physical instruments in the user's studio

import { useState, useEffect } from "react";
import { fetchAllVSTInstr } from "../../fetching";
import DeleteVSTInstr from "./DeleteVSTInstr";
import VSTInstrButton from "./VSTInstrButton";
import CreateVSTInstr from "./CreateVSTInstr";
import EditVSTInstr from "./EditVSTInstr";

export default function AllVSTInstr({ token }) {
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

	return (
		<div>
			<div id="all-phys-instr-header">
				<h2>ALL VIRTUAL INSTRUMENTS</h2>
			</div>
			<div>
				<h3>Please login to view virtual instruments in your studio.</h3>
			</div>
			{token ? (
				<div>
					<div id="all-phys-instr-header">
						<h2>ALL VIRTUAL INSTRUMENTS</h2>
					</div>
					<div id="search-phys-instr">
						<label>
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
							<CreateVSTInstr />
						</div>
						<div id="all-phys-instr-gallery">
							{VSTInstrToDisplay.map((VSTInstr) => {
								const VSTInstrId = VSTInstr.vst_id;
								const VSTInstrAV = VSTInstr;
								return (
									// eslint-disable-next-line react/jsx-key
									<div id="main-phys-instr-container">
										<div id="phys-instr-card">
											<VSTInstrButton
												key={VSTInstrId}
												VSTInstrAV={VSTInstrAV}
												VSTInstrId={VSTInstrId}
											/>
											<EditVSTInstr VSTInstrId={VSTInstrId} />
											<DeleteVSTInstr />
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
	);
}
