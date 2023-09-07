// Create new virtual instrument and add to database

import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewPhysInstr } from "../../fetching";

export default function CreateNewPhysInstr() {
	const [instrName, setInstrName] = useState("");
	const [instrFamily, setInstrFamily] = useState("");
	const [instrType, setInstrType] = useState("");
	const [instrCategory, setInstrCategory] = useState("");
	const [vstAvail, setVSTAvail] = useState(false);
	const [instrTags, setInstrTags] = useState([]);
	const [imageURL, setImageURL] = useState("");
	const [userId, setUserId] = useState(1);

	const navigate = useNavigate();

	const handleChange = (event) => {
		setVSTAvail(event.target.value);
	};

	async function handleSubmit(event) {
		event.preventDefault();
		let instrData = {
			instr_name: instrName,
			instr_family: instrFamily,
			instr_category: instrCategory,
			art_type: instrType,
			vst_avail: vstAvail,
			tags: [instrTags],
			image_URL: imageURL,
			userId: userId,
		};
		createNewPhysInstr(instrData);
		// navigate(0);
	}

	return (
		<div id="new-instrument-container">
			<h2 id="new-instr-header">Create a New Instrument</h2>
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
					label="Type"
					value={instrType}
					onChange={(e) => setInstrType(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="Category"
					value={instrCategory}
					onChange={(e) => setInstrCategory(e.target.value)}
				/>
				<InputLabel id="NP-VST-label">VST Available?</InputLabel>
				<Select
					labelId="simple-select-label"
					id="NP-input-box"
					value={vstAvail}
					label="VST Avail"
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
