// This component renders a single virtual instrument

import { useState, useEffect } from "react";
import { fetchSingleVSTInstr } from "../../fetching";

export default function SingleVSTInstr({ VSTInstrVIB, VIBid }) {
	const [VSTInstr, setVSTInstr] = useState({});
	const SVI_id = VIBid;
	const VSTInstrSVI = VSTInstrVIB;
	const noImageString =
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F14%2FNo_Image_Available.jpg%3F20200913095930&f=1&nofb=1&ipt=e72482b3479441692391e6c82472341ed8951b0ac682b03a5b17762a465b1d0d&ipo=images";
	const cryingCat =
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0e%2Ffd%2Fc3%2F0efdc3f87bb83cf7bcb7d7e9de67c359.jpg&f=1&nofb=1&ipt=472ba29f7ada52b4bf57b85dfe595a7ef880731b1cb63103265161745a4c2132&ipo=images";

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
		<div id="card-info">
			<h5>Family: {VSTInstr.instr_family}</h5>
			<h5>Category: {VSTInstr.instr_category}</h5>
			<h5>Engine: {VSTInstr.engine}</h5>
			<h5>Brand: {VSTInstr.brand}</h5>
			<h5>Physical Version Available?: {VSTInstr.phys_avail ? "Yes" : "No"}</h5>
			<h5>
				Tags: {VSTInstrSVI.tags[0] ? JSON.stringify(VSTInstrSVI.tags) : "None"}
			</h5>
			{VSTInstrSVI.image_url != null ? (
				<img
					src={
						VSTInstrSVI.image_url.includes("http")
							? VSTInstrSVI.image_url
							: cryingCat // render the crying cat image if the inputted URL isn't a real URL
					}
					alt=""
					id="genre-images"
				/>
			) : (
				<></>
			)}
			{VSTInstrSVI.image_url == null ? (
				<img src={noImageString} alt="" id="genre-images" />
			) : (
				<></>
			)}
		</div>
	);
}
