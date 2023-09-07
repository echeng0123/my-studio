// Create new physical instrument and add to database

import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { createNewPhysInstr } from "../../fetching";

export default function CreateNewPhysInstr() {
	const [instrName, setinstrName] = useState("");
	const [instrFamily, setinstrFamily] = useState("");
	const [instrType, setinstrType] = useState("");
	const [instrCategory, setinstrCategory] = useState("");
	const [vstAvail, setVSTAvail] = useState(false);
	const [instrTags, setinstrTags] = useState([]);
	const [imageURL, setImageURL] = useState("");
	const [userId, setUserId] = useState(null);

	// const navigate = useNavigate();

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
			userId: 1,
		};
		console.log("instrData from handle submit", instrData);
		console.log("instrData string", JSON.stringify(instrData));
		let stringData = JSON.stringify(instrData);

		createNewPhysInstr(stringData);
		// navigate("/profile");
	}

	return (
		<div id="new-instrument-container">
			<h2 id="new-instr-header">Create a New Instrument</h2>
			<form onSubmit={handleSubmit} id="new-instr-form-container">
				<TextField
					id="NP-input-box"
					label="Name"
					value={instrName}
					onChange={(e) => setinstrName(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="Family"
					value={instrFamily}
					onChange={(e) => setinstrFamily(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="Type"
					value={instrType}
					onChange={(e) => setinstrType(e.target.value)}
				/>
				<TextField
					id="NP-input-box"
					label="Category"
					value={instrCategory}
					onChange={(e) => setinstrCategory(e.target.value)}
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
					onChange={(e) => setinstrTags(e.target.value)}
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
