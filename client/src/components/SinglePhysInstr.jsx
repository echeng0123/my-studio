// This component renders a single physical instrument

import { useState, useEffect } from "react";
import { fetchSinglePhysInstr } from "../../fetching";

export default function SinglePhysInstr({ physInstrPIB, PIBid }) {
	const [physInstr, setPhysInstr] = useState({});
	const SPI_id = PIBid;
	const physInstrSPI = physInstrPIB;
	const noImageString =
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F14%2FNo_Image_Available.jpg%3F20200913095930&f=1&nofb=1&ipt=e72482b3479441692391e6c82472341ed8951b0ac682b03a5b17762a465b1d0d&ipo=images";
	const cryingCat =
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0e%2Ffd%2Fc3%2F0efdc3f87bb83cf7bcb7d7e9de67c359.jpg&f=1&nofb=1&ipt=472ba29f7ada52b4bf57b85dfe595a7ef880731b1cb63103265161745a4c2132&ipo=images";

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
			{physInstrSPI.image_url != null ? (
				<img
					src={
						physInstrSPI.image_url.includes("http")
							? physInstrSPI.image_url
							: cryingCat // render the crying cat image if the inputted URL isn't a real URL
					}
					alt=""
					id="genre-images"
				/>
			) : (
				<></>
			)}
			{physInstrSPI.image_url == null ? (
				<img src={noImageString} alt="" id="genre-images" />
			) : (
				<></>
			)}
		</div>
	);
}
