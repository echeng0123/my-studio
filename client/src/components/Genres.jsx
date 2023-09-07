// This component renders all or filtered genres

import { useState, useEffect } from "react";
import { fetchAllGenres } from "../../fetching";
import GenreButton from "./GenreButton";
import CreateGenre from "./CreateGenre";
import DeleteGenre from "./DeleteGenre";

export default function AllGenres() {
	const [genres, setGenres] = useState([]);
	const [searchParam, setSearchParam] = useState("");

	useEffect(() => {
		async function getAllGenres() {
			const APIResponse = await fetchAllGenres();
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
				<div id="new-genre-post-container">
					<CreateGenre />
				</div>
				<div id="all-genre-instr-gallery">
					{genresToDisplay.map((genres) => {
						const genreId = genres.genre_id;
						const genreAP = genres;
						return (
							<>
								<div id="genre-instr-card">
									<GenreButton genreId={genreId} genreAP={genreAP} />
									<DeleteGenre genreId={genreId} />
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
