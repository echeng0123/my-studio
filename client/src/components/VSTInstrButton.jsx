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

	return (
		<div>
			<button id="clickable-instr-button" onClick={handleClick}>
				{" "}
				<div id="each-instrument">
					<h3>name here</h3>
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
