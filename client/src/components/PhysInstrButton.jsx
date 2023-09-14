// This component makes all physical instruments into a clickable list and handles the expanding of a single physical instrument

import { useState } from "react";
import SinglePhysInstr from "./SinglePhysInstr";

export default function PhysInstrButton({ physInstrAP, PI_id, token }) {
	const [isOpen, setIsOpen] = useState(false);
	const PIBid = PI_id;
	const physInstrPIB = physInstrAP;

	function handleClick() {
		setIsOpen(!isOpen);
	}

	// converts instrument name to title case/sentence case for later display in rendering
	function titleCase(str) {
		str = str.toLowerCase().split(" ");
		for (let i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(" ");
	}

	return (
		<div>
			<button id="clickable-instr-button" onClick={handleClick}>
				{" "}
				<div id="each-instrument">
					<h3 id="phys-instr-header">{titleCase(physInstrPIB.instr_name)}</h3>
					{isOpen && (
						<SinglePhysInstr
							key={PIBid}
							PIBid={PIBid}
							physInstrPIB={physInstrPIB}
							token={token}
						/>
					)}
				</div>
			</button>
		</div>
	);
}
