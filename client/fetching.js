// This file handles all API calls for the app

const API_URL = `http://localhost:8080/api`;

// -----USER API CALLS-------//

// FETCH ALL USERS
export const fetchAllUsers = async () => {
	try {
		const response = await fetch(`${API_URL}/users`);
		const users = await response.json();
		console.log("users fetched", users);
		return users;
	} catch (error) {
		console.error("Unable to fetch all users", error);
	}
};

// FETCH SINGLE USER PROFILE
export const fetchUserProfile = async (userId) => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}`);
		const user = await response.json();
		return user;
	} catch (error) {
		console.error("Unable to fetch user profile", error);
	}
};

// -----PHYSICAL INSTRUMENT API CALLS-------//

// FETCH ALL PHYSICAL INSTRUMENTS
export const fetchAllPhysInstr = async () => {
	try {
		const response = await fetch(`${API_URL}/phys_instr`);
		const PhysInstr = await response.json();
		return PhysInstr;
	} catch (error) {
		console.error("Unable to fetch all physical instruments", error);
	}
};

// FETCH SINGLE PHYSICAL INSTRUMENT
export const fetchSinglePhysInstr = async (physInstrId) => {
	try {
		const response = await fetch(`${API_URL}/phys_instr/${physInstrId}`);
		const physInstr = await response.json();
		return physInstr;
	} catch (error) {
		console.error("Unable to fetch single physical instrument", error);
	}
};

// CREATE NEW PHYSICAL INSTRUMENT

export const createNewPhysInstr = async (stringData) => {
	try {
		console.log("instr data in CNPI", stringData);
		const response = await fetch(`${API_URL}/phys_instr`, {
			method: "POST",
			body: stringData,
		});
		console.log("response from NPF: ", response);
		const result = await response.json();
		console.log("result from NPF: ", result);
		fetchAllPhysInstr();
	} catch (err) {
		console.error(
			"Oops, something went wrong with adding that instrument!",
			err
		);
	}
};

// DELETE PHYSICAL INSTRUMENT

export const deletePhysInstr = async (physId) => {
	try {
		const response = await fetch(`${API_URL}/phys_instr/${physId}`, {
			method: "DELETE",
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Can't delete instrument ", error);
	}
};

// -----VIRTUAL INSTRUMENT API CALLS-------//

// FETCH ALL VIRTUAL INSTRUMENTS
export const fetchAllVSTInstr = async () => {
	try {
		const response = await fetch(`${API_URL}/VST_instr`);
		const VSTInstr = await response.json();
		return VSTInstr;
	} catch (error) {
		console.error("Unable to fetch all virtual instruments", error);
	}
};

// -----VIRTUAL INSTRUMENT API CALLS-------//

// FETCH ALL GENRES
export const fetchAllGenres = async () => {
	try {
		const response = await fetch(`${API_URL}/genres`);
		const Genres = await response.json();
		return Genres;
	} catch (error) {
		console.error("Unable to fetch all genres", error);
	}
};
