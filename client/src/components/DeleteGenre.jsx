// This component handles the deleting of a genre

import { useNavigate } from "react-router-dom";
import { deleteGenre } from "../../fetching";

export default function DeleteGenre(genreId) {
	const genreIdDG = genreId.genreId;

	const navigate = useNavigate();

	async function handleDelete(event) {
		event.preventDefault();

		try {
			await deleteGenre(genreIdDG);
			navigate(0);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div>
			<button onClick={handleDelete} id="delete-button">
				Delete Genre
			</button>
		</div>
	);
}
