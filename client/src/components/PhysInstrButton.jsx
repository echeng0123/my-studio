// This component makes all physical instruments into a clickable list and handles the expanding of a single physical instrument

import { useState } from "react";
import SinglePhysInstr from "./SinglePhysInstr";

export default function PhysInstrButton({ physInstrAP, PI_id }) {
	const [isOpen, setIsOpen] = useState(false);
	const PIBid = PI_id;
	const physInstrPIB = physInstrAP;

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<div>
			<button id="clickable-instr-button" onClick={handleClick}>
				{" "}
				<div id="each-instrument">
					<h3>name here</h3>
					{isOpen && (
						<SinglePhysInstr
							key={PIBid}
							PIBid={PIBid}
							physInstrPIB={physInstrPIB}
						/>
					)}
				</div>
			</button>
		</div>
	);
}
