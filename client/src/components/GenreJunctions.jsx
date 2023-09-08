// This component renders the genre junctions table

import { useState, useEffect } from "react";
import { fetchAllGenreJunc } from "../../fetching";
import { fetchAllPhysInstr } from "../../fetching";

export default function GenreJunctions() {
	const [genreJuncs, setGenreJuncs] = useState([]);
	const [physInstrs, setPhysInstrs] = useState([]);
	const filteredJunctions = [];

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

	// Matching the objects in the genre junction table with the ones in the all physical instruments table

	genreJuncs.map((junc) => {
		for (let i = 0; i < physInstrs.length; i++) {
			if (physInstrs[i].phys_id == junc.physid) {
				filteredJunctions.push(physInstrs[i]);
			}
		}
		return filteredJunctions;
	});
	console.log("filteredJunctions", filteredJunctions);

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
			<h1>Genre Junctions</h1>
			<div>
				{genreJuncs.map((junc) => {
					return (
						// eslint-disable-next-line react/jsx-key
						<div>
							<h3>Genre Junction id: {junc.genrejunc_id}</h3>

							{filteredJunctions.length > 0 ? (
								<p>
									Physical Instrument(s):{" "}
									{titleCase(
										filteredJunctions.filter(
											(filterJunc) => filterJunc.phys_id == junc.physid
										)[0].instr_name
									)}
								</p>
							) : (
								<></>
							)}

							<img
								src={
									filteredJunctions.length > 0
										? filteredJunctions.filter(
												(filterJunc) => filterJunc.phys_id == junc.physid
										  )[0].image_url
										: ""
								}
								alt=""
								id="genre-images"
							/>

							{filteredJunctions.length > 0 ? (
								<p>
									Virtual Instrument(s):{" "}
									{titleCase(
										filteredJunctions.filter(
											(filterJunc) => filterJunc.VST_id == junc.VSTid
										)[0].instr_name
									)}
								</p>
							) : (
								<></>
							)}

							<img
								src={
									filteredJunctions.length > 0
										? filteredJunctions.filter(
												(filterJunc) => filterJunc.VST_id == junc.VSTid
										  )[0].image_url
										: ""
								}
								alt=""
								id="genre-images"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
