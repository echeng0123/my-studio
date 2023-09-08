// This component handles the deleting of a virtual instrument

import { useNavigate } from "react-router-dom";
import { deleteVSTInstr } from "../../fetching";

export default function DeleteVSTInstr(VSTId) {
	const VSTIdDP = VSTId.VSTId;

	const navigate = useNavigate();

	async function handleDelete(event) {
		event.preventDefault();

		try {
			await deleteVSTInstr(VSTIdDP);
			navigate(0);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div>
			<button onClick={handleDelete} id="delete-button">
				Delete Instrument
			</button>
		</div>
	);
}
