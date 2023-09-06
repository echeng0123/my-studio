// This component makes all physical instruments into a clickable list and handles the expanding of a single physical instrument

import { useState } from "react";
import SinglePhysInstr from "./SinglePhysInstr";

export default function PhysInstrButton({ handleCallback, PI_id }) {
	const [isOpen, setIsOpen] = useState(false);
	const PIBid = PI_id;

	function handleClick() {
		setIsOpen(!isOpen);
		handleCallback(PIBid);
	}

	// const message = "test from PIB";
	return (
		<div>
			<button id="clickable-instr-button" onClick={handleClick}>
				{" "}
				<div id="each-instrument">
					<h3>name here</h3>
					{isOpen && <SinglePhysInstr />}
				</div>
			</button>
		</div>
	);
}