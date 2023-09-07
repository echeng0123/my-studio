// This component handles the create new genre button on the homepage

import { useState } from "react";
import CreateGenre from "./CreateGenre";

export default function NewVSTButton() {
	const [isOpen, setIsOpen] = useState(false);
	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<div>
			<button id="clickable-instr-button" onClick={handleClick}>
				{" "}
				<div id="each-instrument">
					{!isOpen ? <h3>Add a New Genre</h3> : <h3>Close Genre Creation</h3>}
				</div>
			</button>
			<div>{isOpen && <CreateGenre />}</div>
		</div>
	);
}
