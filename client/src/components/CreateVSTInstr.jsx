// Create new virtual instrument and add to database

import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewVSTInstr } from "../../fetching";

export default function CreateNewVSTInstr() {
	const cryingCat =
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F0e%2Ffd%2Fc3%2F0efdc3f87bb83cf7bcb7d7e9de67c359.jpg&f=1&nofb=1&ipt=472ba29f7ada52b4bf57b85dfe595a7ef880731b1cb63103265161745a4c2132&ipo=images";

	const [instrName, setInstrName] = useState("");
	const [instrFamily, setInstrFamily] = useState("");
	const [instrCategory, setInstrCategory] = useState("");
	const [engine, setEngine] = useState("");
	const [brand, setBrand] = useState("");
	const [physAvail, setphysAvail] = useState(false);
	const [instrTags, setInstrTags] = useState([]);
	const [imageURL, setImageURL] = useState("");
	const [userId, setUserId] = useState(1);

	const navigate = useNavigate();

	const handleChange = (event) => {
		setphysAvail(event.target.value);
	};

	async function handleSubmit(event) {
		event.preventDefault();

		let instrData = {
			instr_name: instrName,
			instr_family: instrFamily,
			instr_category: instrCategory,
			engine: engine,
			brand: brand,
			phys_avail: physAvail,
			tags: [instrTags],
			image_URL: imageURL,
			userId: userId,
		};

		try {
			await createNewVSTInstr(instrData);
			navigate(0);
		} catch (error) {
			console.error("Can't create new virtual instrument!", error);
		}
	}

	return (
		<div id="new-instrument-container">
			<h2 id="new-instr-header">Add a New Virtual Instrument</h2>
			<form onSubmit={handleSubmit} id="new-instr-form-container">
				<TextField
					id="NP-input-box"
					label="Name"
					value={instrName}
					onChange={(e) => setInstrName(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="Family"
					value={instrFamily}
					onChange={(e) => setInstrFamily(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="Engine"
					value={engine}
					onChange={(e) => setEngine(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="Category"
					value={instrCategory}
					onChange={(e) => setInstrCategory(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="Brand"
					value={brand}
					onChange={(e) => setBrand(e.target.value)}
				/>
				<InputLabel id="NP-phys-label">phys Available?</InputLabel>
				<Select
					labelId="simple-select-label"
					id="NP-input-box"
					value={physAvail}
					label="phys Avail"
					onChange={handleChange}
				>
					<MenuItem value={false}>No</MenuItem>
					<MenuItem value={true}>Yes</MenuItem>
				</Select>
				<TextField
					id="NP-input-box"
					label="Tags"
					value={instrTags}
					onChange={(e) => setInstrTags(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="Image URL"
					value={imageURL}
					onChange={(e) => setImageURL(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="UserId"
					value={userId}
					onChange={(e) => setUserId(e.target.value)}
				/>
				<button type="submit" id="np-button">
					Submit
				</button>
			</form>
		</div>
	);
}
