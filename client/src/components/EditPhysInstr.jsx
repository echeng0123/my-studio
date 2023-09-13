// this component handles the editing of a physical instrument

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editPhysInstr } from "../../fetching";
import { TextField, InputLabel, Select, MenuItem } from "@mui/material";

export default function EditPhysInstr(PI_id) {
	const [isOpen, setIsOpen] = useState(false);
	const [instrName, setInstrName] = useState("");
	const [instrFamily, setInstrFamily] = useState("");
	const [instrType, setInstrType] = useState("");
	const [instrCategory, setInstrCategory] = useState("");
	const [vstAvail, setVSTAvail] = useState(false);
	const [instrTags, setInstrTags] = useState([]);
	const [imageURL, setImageURL] = useState("");
	const [userId, setUserId] = useState(1);

	const navigate = useNavigate();

	const PhysInstrIdEP = PI_id.PI_id;

	function handleClick() {
		setIsOpen(!isOpen);
	}

	async function handleEdit(event) {
		event.preventDefault();

		let instrData = {
			instr_name: instrName,
			instr_family: instrFamily,
			instr_category: instrCategory,
			art_type: instrType,
			VST_avail: vstAvail,
			tags: [instrTags],
			image_URL: imageURL,
		};

		try {
			await editPhysInstr(instrData, PhysInstrIdEP);
			setIsOpen(!isOpen); // close edit button
			navigate("/phys_instr");
		} catch (err) {
			console.error("can't edit physical instrument", err);
		}
	}

	return (
		<div>
			<button onClick={handleClick} id="edit-button">
				Edit Physical Instrument
			</button>
			{isOpen && (
				<div id="new-instrument-container">
					<h2 id="new-instr-header">Edit Physical Instrument</h2>
					<form onSubmit={handleEdit} id="new-instr-form-container">
						<TextField
							autoFocus
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
							onChange={handleEdit}
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
			)}
		</div>
	);
}
