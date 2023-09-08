// this component handles the editing of a genre

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editGenre } from "../../fetching";
import { TextField } from "@mui/material";

export default function EditGenre(genreId) {
	const [isOpen, setIsOpen] = useState(false);
	const [genreName, setGenreName] = useState("");
	const [bpm, setBpm] = useState("");
	const [ageTime, setAgeTime] = useState("");
	const [genreTags, setGenreTags] = useState("");

	const navigate = useNavigate();

	const genreIdEP = genreId.genreId;

	function handleClick() {
		setIsOpen(!isOpen);
	}

	async function handleEdit(event) {
		event.preventDefault();

		let genreObj = {
			genre_name: genreName,
			bpm: bpm,
			age_time: ageTime,
			tags: [genreTags],
		};

		try {
			await editGenre(genreObj, genreIdEP);
			setIsOpen(!isOpen); // close edit genre button
			navigate(0);
		} catch (err) {
			console.error("can't edit genre", err);
		}
	}

	return (
		<div>
			<button onClick={handleClick} id="edit-button">
				Edit Genre
			</button>
			{isOpen && (
				<div id="new-instrument-container">
					<h2 id="new-instr-header">Edit Genre</h2>
					<form onSubmit={handleEdit} id="new-instr-form-container">
						<TextField
							id="NP-input-box"
							label="Name"
							value={genreName}
							onChange={(e) => setGenreName(e.target.value)}
						/>
						<TextField
							id="NP-input-box"
							label="Bpm"
							value={bpm}
							onChange={(e) => setBpm(e.target.value)}
						/>
						<TextField
							id="NP-input-box"
							label="Age/Time"
							value={ageTime}
							onChange={(e) => setAgeTime(e.target.value)}
						/>

						<TextField
							id="NP-input-box"
							label="Tags"
							value={genreTags}
							onChange={(e) => setGenreTags(e.target.value)}
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
