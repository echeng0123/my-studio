// Create new genre and add to database

import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewGenre } from "../../fetching";

export default function CreateGenre() {
	const [genreName, setGenreName] = useState("");
	const [bpm, setBpm] = useState("");
	const [ageTime, setAgeTime] = useState("");
	const [genreTags, setGenreTags] = useState("");

	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();
		let genreData = {
			genre_name: genreName,
			bpm: bpm,
			age_time: ageTime,
			tags: [genreTags],
		};
		try {
			await createNewGenre(genreData);
			navigate(0);
		} catch (error) {
			console.error("Can't create genre!", error);
		}
	}

	return (
		<div id="new-instrument-container">
			<h2 id="new-instr-header">Create a New Genre</h2>
			<form onSubmit={handleSubmit} id="new-instr-form-container">
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
	);
}
