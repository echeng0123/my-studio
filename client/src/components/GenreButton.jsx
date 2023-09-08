// This component makes all genres into a clickable list and handles the expanding of a single genre

import { useState } from "react";
import SingleGenre from "./SingleGenre";

export default function GenreButton({ genreId, genreAP }) {
	const [isOpen, setIsOpen] = useState(false);
	const GBId = genreId;
	const GenreGB = genreAP;

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
					<h3 id="phys-instr-header">{titleCase(GenreGB.genre_name)}</h3>

					{isOpen && <SingleGenre key={GBId} GBId={GBId} GenreGB={GenreGB} />}
				</div>
			</button>
		</div>
	);
}
