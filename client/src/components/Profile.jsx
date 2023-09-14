/* eslint-disable react/prop-types */
// This component renders the user profile

import { useEffect, useState } from "react";
import {
	fetchAllPhysInstr,
	fetchAllVSTInstr,
	fetchAllGenres,
} from "../../fetching";

export default function Profile({
	token,
	setToken,
	currentUser,
	setCurrentUser,
}) {
	const [userId, setUserId] = useState(null);
	const [username, setUsername] = useState("");
	const [physInstrList, setPhysInstrList] = useState([]);
	const [VSTList, setVSTList] = useState([]);
	const [genresList, setGenresList] = useState([]);
	const [physInstrListNames, setPhysInstrListNames] = useState([]);
	const [physInstrListNames2, setPhysInstrListNames2] = useState([]);
	const [VSTListNames, setVSTListNames] = useState([]);
	const [VSTListNames2, setVSTListNames2] = useState([]);
	const [genreListNames, setGenreListNames] = useState([]);
	const [genreListNames2, setGenreListNames2] = useState([]);

	// Button state handling
	const [isOpenPhys, setIsOpenPhys] = useState(false);
	const [isOpenVST, setIsOpenVST] = useState(false);
	const [isOpenGenre, setIsOpenGenre] = useState(false);

	// console.log("currentUser in Profile ", currentUser);

	// grab user info
	useEffect(() => {
		async function getUserProfile() {
			setUserId(currentUser.user_id);
			setUsername(currentUser.username);
		}
		getUserProfile();
	}, []);

	// grabs physical instruments list
	useEffect(() => {
		async function getAllPhysInstr() {
			const APIResponsePhys = await fetchAllPhysInstr();
			console.log("APIResponsePhys", APIResponsePhys);
			if (APIResponsePhys) {
				setPhysInstrList(APIResponsePhys);
			} else {
				console.error("Unable to fetch all physical instruments");
			}
		}
		getAllPhysInstr();
	}, []);

	// grabs virtual instruments list
	useEffect(() => {
		async function getAllVSTInstr() {
			const APIResponseVST = await fetchAllVSTInstr();
			console.log("APIResponseVST", APIResponseVST);
			if (APIResponseVST) {
				setVSTList(APIResponseVST);
			} else {
				console.error("Unable to fetch all physical instruments");
			}
		}
		getAllVSTInstr();
	}, []);

	// grabs genres list
	useEffect(() => {
		async function getAllGenres() {
			const APIResponseGenres = await fetchAllGenres();
			console.log("APIResponseGenres", APIResponseGenres);
			if (APIResponseGenres) {
				setGenresList(APIResponseGenres);
			} else {
				console.error("Unable to fetch all physical instruments");
			}
		}
		getAllGenres();
	}, []);

	// grabs phys instr names
	useEffect(() => {
		async function getAllArrayNames() {
			await arrayNamesPhys(physInstrList);
		}
		getAllArrayNames();
	}, [physInstrList]);

	// grabs VST instr names
	useEffect(() => {
		async function getAllArrayNames() {
			await arrayNamesVST(VSTList);
		}
		getAllArrayNames();
	}, [VSTList]);

	// grabs genre names
	useEffect(() => {
		async function getAllArrayNames() {
			await arrayNamesGenre(genresList);
		}
		getAllArrayNames();
	}, [genresList]);

	// converts string to title case/sentence case for later display in rendering
	function titleCase(str) {
		str = str.toLowerCase().split(" ");
		for (let i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(" ");
	}

	// pushes physical instrument names to array
	async function arrayNamesPhys(physInstrList) {
		setPhysInstrListNames2([]);

		try {
			for (let i = 0; i < physInstrList.length; i++) {
				physInstrListNames2.push(physInstrList[i].instr_name);
			}
			setPhysInstrListNames(physInstrListNames2);
			return physInstrListNames;
		} catch (error) {
			console.error("No physical instruments grabbed.");
		}
		return physInstrListNames;
	}

	// pushes virtual instrument names to array
	async function arrayNamesVST(VSTList) {
		setVSTListNames2([]);

		try {
			for (let i = 0; i < VSTList.length; i++) {
				VSTListNames2.push(VSTList[i].instr_name);
			}
			setVSTListNames(VSTListNames2);
			return VSTListNames;
		} catch (error) {
			console.error("No virtual instruments grabbed.");
		}
		return VSTListNames;
	}

	// pushes genre names to array
	async function arrayNamesGenre(GenreList) {
		setGenreListNames2([]);

		try {
			for (let i = 0; i < GenreList.length; i++) {
				genreListNames2.push(GenreList[i].genre_name);
			}
			setGenreListNames(genreListNames2);
			return genreListNames;
		} catch (error) {
			console.error("No virtual instruments grabbed.");
		}
		return genreListNames;
	}

	// handling button behavior allowing for different buttons to be open at different times
	function handleClickPhys() {
		setIsOpenPhys(!isOpenPhys);
	}
	function handleClickVST() {
		setIsOpenVST(!isOpenVST);
	}
	function handleClickGenre() {
		setIsOpenGenre(!isOpenGenre);
	}

	return (
		<div>
			{token ? (
				<div>
					<h1>Welcome, {titleCase(username)}</h1>
					<h3>Your user id is: {userId}</h3>
					<div id="phys-instr-panel">
						<h3>
							You have {physInstrList.length} physical instruments in your
							studio.
						</h3>
						<button onClick={handleClickPhys}>
							Expand physical instruments list
						</button>
						{isOpenPhys && (
							<div>
								{physInstrListNames.map((physName) => {
									return (
										// eslint-disable-next-line react/jsx-key
										<div>
											<p>{physName}</p>
										</div>
									);
								})}
							</div>
						)}
					</div>
					<div id="phys-instr-panel">
						<h3>
							You have {VSTList.length} virtual instruments in your studio.
						</h3>
						<button onClick={handleClickVST}>
							Expand virtual instruments list
						</button>
						{isOpenVST && (
							<div>
								{VSTListNames.map((VSTName) => {
									return (
										// eslint-disable-next-line react/jsx-key
										<div>
											<p>{VSTName}</p>
										</div>
									);
								})}
							</div>
						)}
					</div>
					<div id="phys-instr-panel">
						<h3>
							You have {genresList.length} genre{genresList > 1 ? "s" : <></>}{" "}
							associated with your studio.
						</h3>
						<button onClick={handleClickGenre}>
							Expand virtual instruments list
						</button>
						{isOpenGenre && (
							<div>
								{genreListNames.map((GenreName) => {
									return (
										// eslint-disable-next-line react/jsx-key
										<div>
											<p>{GenreName}</p>
										</div>
									);
								})}
							</div>
						)}
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
