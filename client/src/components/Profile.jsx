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
	const [isOpenPhys, setIsOpenPhys] = useState(false);

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

	// converts string to title case/sentence case for later display in rendering
	function titleCase(str) {
		str = str.toLowerCase().split(" ");
		for (let i = 0; i < str.length; i++) {
			str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
		}
		return str.join(" ");
	}

	async function arrayNamesPhys(physInstrList) {
		console.log("instrList at array Names", physInstrList);

		setPhysInstrListNames2([]);

		try {
			for (let i = 0; i < physInstrList.length; i++) {
				physInstrListNames2.push(physInstrList[i].instr_name);
			}
			console.log("physInstrListNames", physInstrListNames2);
			setPhysInstrListNames(physInstrListNames2);
			return physInstrListNames;
		} catch (error) {
			console.error("No physical instruments grabbed.");
		}
		return physInstrListNames;
	}

	async function arrayNamesVST(VSTList) {
		console.log("List at array Names", VSTList);

		setVSTListNames2([]);

		try {
			for (let i = 0; i < VSTList.length; i++) {
				VSTListNames2.push(VSTList[i]._name);
			}
			console.log("VSTListNames", VSTListNames2);
			setVSTListNames(VSTListNames2);
			return VSTListNames;
		} catch (error) {
			console.error("No virtual uments grabbed.");
		}
		return VSTListNames;
	}

	function handleClickPhys() {
		setIsOpenPhys(!isOpenPhys);
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
					</div>
					<div id="phys-instr-panel">
						<h3>
							You have {genresList.length} genre{genresList > 1 ? "s" : <></>}{" "}
							associated with your studio.
						</h3>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
