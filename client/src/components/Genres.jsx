// This component renders all or filtered genres

import { useState, useEffect } from "react";
import { fetchAllGenres } from "../../fetching";
import GenreButton from "./GenreButton";
import CreateGenre from "./CreateGenre";
import DeleteGenre from "./DeleteGenre";
import EditGenre from "./EditGenre";

export default function AllGenres({ token }) {
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
			<div id="all-phys-instr-header">
				<h2>ALL GENRES</h2>
			</div>
			<div>
				<h3>Please login to view genres associated with your studio.</h3>
			</div>
			{token ? (
				<div>
					<div id="search-phys-instr">
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
					<div id="api-container">
						<div id="create-new-instr-container">
							<CreateGenre />
						</div>
						<div id="all-phys-instr-gallery">
							{genresToDisplay.map((genres) => {
								const genreId = genres.genre_id;
								const genreAP = genres;
								return (
									<>
										<div id="phys-instr-card">
											<GenreButton genreId={genreId} genreAP={genreAP} />
											<EditGenre genreId={genreId} genreAP={genreAP} />
											<DeleteGenre genreId={genreId} />
										</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
