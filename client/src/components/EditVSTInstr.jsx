// this component handles the editing of a virtual instrument

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editVSTInstr } from "../../fetching";
import { TextField, InputLabel, Select, MenuItem } from "@mui/material";

export default function EditVSTInstr(VSTInstrId) {
	const [isOpen, setIsOpen] = useState(false);
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

	const VSTInstrIdEP = VSTInstrId.VSTInstrId;

	function handleClick() {
		setIsOpen(!isOpen);
	}

	async function handleEdit(event) {
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
		};

		try {
			await editVSTInstr(instrData, VSTInstrIdEP);
			setIsOpen(!isOpen); // close edit button
			navigate(0);
		} catch (err) {
			console.error("can't edit virtual instrument", err);
		}
	}

	return (
		<div>
			<button onClick={handleClick} id="buttons-self">
				Edit Virtual Instrument
			</button>
			{isOpen && (
				<div id="new-instrument-container">
					<h2 id="new-instr-header">Edit virtual Instrument</h2>
					<form onSubmit={handleEdit} id="new-instr-form-container">
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
