// This component renders all or filtered genres

import { useState, useEffect } from "react";
import { fetchAllGenres } from "../../fetching";

export default function AllGenres() {
	const [genres, setGenres] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllGenres() {
			const APIResponse = await fetchAllGenres();
			console.log(APIResponse);
			if (APIResponse) {
				setGenres(APIResponse);
			} else {
				console.error("Unable to fetch all virtual instruments");
			}
		}
		getAllGenres();
	}, []);

	// allows for search functionality
	// users can search any of the instrument parameters AND tags
	const genresToDisplay = searchParam
		? genres.filter(
				(genres) =>
					genres.genre_name.toLowerCase().includes(searchParam) ||
					JSON.stringify(genres.tags).toLowerCase().includes(searchParam)
		  )
		: genres;

	// converts instrument name to title case/sentence case for later display in rendering
	function titleCase(str) {
		str = str.toLowerCase().split(" ");
		for (let i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(" ");
	}

	return (
		<div>
			<div>
				<div id="all-genre-header">
					<h2>ALL GENRES</h2>
				</div>
				<div id="search-genre">
					<label>
						Search:{" "}
						<input
							id="search-instr-bar"
							type="text"
							placeholder="Search genre name or tag"
							onChange={(event) =>
								setSearchParam(event.target.value.toLowerCase())
							}
						/>
					</label>
				</div>
				<div id="all-genre-instr-gallery">
					{genresToDisplay.map((genres) => {
						return (
							<>
								<div id="genre-instr-card">
									<h3 id="genre-instr-header">
										{titleCase(genres.genre_name)}
									</h3>
									<h5>Age/Time: {genres.age_time}</h5>
									<h5>BPM: {genres.bpm}</h5>
									<h5>
										Tags:{" "}
										{genres.tags[0] ? JSON.stringify(genres.tags) : "None"}
									</h5>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
