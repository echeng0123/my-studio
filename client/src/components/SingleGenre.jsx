// This component renders a single genre

import { useState, useEffect } from "react";
import { fetchSingleGenre } from "../../fetching";

export default function SingleGenre({ GenreGB, GBId }) {
	const [Genre, setGenre] = useState({});
	const SG_id = GBId;
	const GenreSG = GenreGB;

	useEffect(() => {
		async function getSingleGenre() {
			const APIResponse = await fetchSingleGenre(SG_id);
			if (APIResponse) {
				setGenre(APIResponse);
			} else {
				console.error("Unable to fetch single physical instrument");
			}
		}
		getSingleGenre();
	}, []);

	return (
		<div>
			<h5>Common BPM Range: {Genre.bpm}</h5>
			<h5>General Age/Time: {Genre.age_time}</h5>
			<h5>Tags: {GenreSG.tags[0] ? JSON.stringify(GenreSG.tags) : "None"}</h5>
		</div>
	);
}
