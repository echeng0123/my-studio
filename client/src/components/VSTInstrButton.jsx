// This component makes all virtual instruments into a clickable list and handles the expanding of a single virtual instrument

import { useState } from "react";
import SingleVSTInstr from "./SingleVSTInstr";

export default function VSTInstrButton({ VSTInstrAV, VSTInstrId }) {
	const [isOpen, setIsOpen] = useState(false);
	const VIBid = VSTInstrId;
	const VSTInstrVIB = VSTInstrAV;

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
					<h3 id="phys-instr-header">{titleCase(VSTInstrVIB.instr_name)}</h3>
					{isOpen && (
						<SingleVSTInstr
							key={VIBid}
							VSTInstrVIB={VSTInstrVIB}
							VIBid={VIBid}
						/>
					)}
				</div>
			</button>
		</div>
	);
}
