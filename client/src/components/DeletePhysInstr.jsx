// This component handles the deleting of a physical instrument

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deletePhysInstr } from "../../fetching";

export default function DeletePhysInstr(physId) {
	const physIdDP = physId.physId;

	const navigate = useNavigate();

	async function handleDelete(event) {
		event.preventDefault();

		try {
			await deletePhysInstr(physIdDP);
			navigate(0);
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div>
			<button onClick={handleDelete}>Delete Instrument</button>
		</div>
	);
}
