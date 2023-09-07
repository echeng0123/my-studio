// This component handles the create new virtual instrument button on the homepage

import { useState } from "react";
import CreateVSTInstr from "./CreateVSTInstr";

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
					{!isOpen ? (
						<h3>Add a New Virtual Instrument</h3>
					) : (
						<h3>Close VST Creation</h3>
					)}
				</div>
			</button>
			<div>{isOpen && <CreateVSTInstr />}</div>
		</div>
	);
}
