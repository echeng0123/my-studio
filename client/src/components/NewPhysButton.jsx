// This component handles the create new physical instrument button on the homepage

import { useState } from "react";
import CreateNewPhysInstr from "./CreateNewPhysInstr";

export default function NewPhysButton() {
	const [isOpen, setIsOpen] = useState(false);
	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<div>
			<button id="clickable-instr-button" onClick={handleClick}>
				{" "}
				<div id="each-instrument">
					{!isOpen ? (
						<h3>Add a New Physical Instrument</h3>
					) : (
						<h3>Close Physical Instrument Creation</h3>
					)}
				</div>
			</button>
			<div>{isOpen && <CreateNewPhysInstr />}</div>
		</div>
	);
}
