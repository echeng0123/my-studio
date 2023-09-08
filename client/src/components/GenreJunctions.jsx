// This component renders the genre junctions table

import { useState, useEffect } from "react";
import {
	fetchAllGenreJunc,
	fetchAllPhysInstr,
	fetchAllVSTInstr,
} from "../../fetching";

export default function GenreJunctions() {
	const [genreJuncs, setGenreJuncs] = useState([]);
	const [physInstrs, setPhysInstrs] = useState([]);
	const [VSTInstrs, setVSTInstrs] = useState([]);
	const [searchParam, setSearchParam] = useState("");
	const [searchParam2, setSearchParam2] = useState("");
	const filteredPhysJunctions = [];
	const filteredVSTJunctions = [];

	// Pull in all genre junctions
	useEffect(() => {
		async function getAllGenreJuncs() {
			const APIResponse = await fetchAllGenreJunc();
			if (APIResponse) {
				setGenreJuncs(APIResponse);
			} else {
				console.error("Unable to fetch all genre junctions");
			}
		}
		getAllGenreJuncs();
	}, []);

	// Pull in all physical instruments
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

	// Pull in all virtual instruments
	useEffect(() => {
		async function getAllVSTInstr() {
			const VSTResponse = await fetchAllVSTInstr();
			if (VSTResponse) {
				setVSTInstrs(VSTResponse);
			} else {
				console.error("Unable to fetch all virtual instruments");
			}
		}
		getAllVSTInstr();
	}, []);

	// Matching the objects in the genre junction table with the ones in the all physical instruments table

	genreJuncs.map((junc) => {
		for (let i = 0; i < physInstrs.length; i++) {
			if (physInstrs[i].phys_id == junc.physid) {
				filteredPhysJunctions.push(physInstrs[i]);
			}
		}
		return filteredPhysJunctions;
	});
	console.log("FPJ", filteredPhysJunctions);

	// Matching the objects in the genre junction table with the ones in the all virtual instruments table

	console.log("GJ", genreJuncs);
	genreJuncs.map((junc) => {
		for (let i = 0; i < VSTInstrs.length; i++) {
			if (VSTInstrs[i].VST_id == junc.vstid) {
				filteredVSTJunctions.push(VSTInstrs[i]);
			}
		}
		return filteredVSTJunctions;
	});
	console.log("FVJ", filteredVSTJunctions);

	// converts instrument name to title case/sentence case for later display in rendering
	function titleCase(str) {
		str = str.toLowerCase().split(" ");
		for (let i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(" ");
	}

	// allows for search functionality
	// users can search any of the instrument parameters AND tags in phys instr table
	const genreJuncToDisplay = searchParam
		? filteredPhysJunctions.filter(
				(filteredJunc) =>
					filteredJunc.instr_name.toLowerCase().includes(searchParam) ||
					filteredJunc.instr_family.toLowerCase().includes(searchParam) ||
					filteredJunc.instr_category.toLowerCase().includes(searchParam) ||
					filteredJunc.art_type.toLowerCase().includes(searchParam) ||
					JSON.stringify(filteredJunc.tags).toLowerCase().includes(searchParam)
		  )
		: filteredPhysJunctions;

	// users can search any of the instrument parameters AND tags
	const genreJuncToDisplay2 = searchParam
		? filteredVSTJunctions.filter(
				(filteredJunc) =>
					filteredJunc.instr_name.toLowerCase().includes(searchParam) ||
					filteredJunc.instr_family.toLowerCase().includes(searchParam) ||
					filteredJunc.instr_category.toLowerCase().includes(searchParam) ||
					filteredJunc.engine.toLowerCase().includes(searchParam) ||
					filteredJunc.brand.toLowerCase().includes(searchParam) ||
					JSON.stringify(filteredJunc.tags).toLowerCase().includes(searchParam)
		  )
		: filteredVSTJunctions;

	return (
		<div>
			<h1>Genre Junctions</h1>
			<h3>Search instruments for corresponding genres</h3>
			<div id="search-phys-instr">
				<label>
					Search Physical Instruments:{" "}
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
			<div id="search-phys-instr">
				<label>
					Search Virtual Instruments:{" "}
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
			<div id="phys-juncs-container">
				{genreJuncToDisplay.map((junc) => {
					return (
						// eslint-disable-next-line react/jsx-key
						<div id="physical-juncs">
							{/* <h3>Genre Junction id: {junc.genrejunc_id}</h3> */}

							<p>Physical Instrument(s): {titleCase(junc.instr_name)}</p>
							<img src={junc.image_url} alt="" id="genre-images" />
						</div>
					);
				})}
			</div>
			<div id="vst-juncs-container">
				{genreJuncToDisplay2.map((junc) => {
					return (
						// eslint-disable-next-line react/jsx-key
						<div id="physical-juncs">
							{/* <h3>Genre Junction id: {junc.genrejunc_id}</h3> */}

							<p>Virtual Instrument(s): {titleCase(junc.instr_name)}</p>
							<img src={junc.image_url} alt="" id="genre-images" />
						</div>
					);
				})}
			</div>
		</div>
	);
}
