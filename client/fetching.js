// This file handles all API calls for the app

const API_URL = `http://localhost:8080/api`;

// -----USER API CALLS-------//

// FETCH ALL USERS
export const fetchAllUsers = async () => {
	try {
		const response = await fetch(`${API_URL}/users`);
		// console.log("response in fetchallusers", response);
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

export const createNewPhysInstr = async (instrData) => {
	try {
		const response = await fetch(`${API_URL}/phys_instr`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(instrData),
		});
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

// EDIT PHYSICAL INSTRUMENT

export async function editPhysInstr(instrData, PhysInstrIdEP) {
	try {
		const response = await fetch(`${API_URL}/phys_instr/${PhysInstrIdEP}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(instrData),
		});
		const result = await response.json();
		alert("Successfully edited PhysInstr.");
		return result;
	} catch (error) {
		alert("Can't edit PhysInstr");
		console.error(error);
	}
}

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

// FETCH SINGLE VIRTUAL INSTRUMENT
export const fetchSingleVSTInstr = async (VSTInstrId) => {
	try {
		const response = await fetch(`${API_URL}/VST_instr/${VSTInstrId}`);
		const VSTInstr = await response.json();
		return VSTInstr;
	} catch (error) {
		console.error("Unable to fetch single virtual instrument from API", error);
	}
};

// CREATE NEW VIRTUAL INSTRUMENT

export const createNewVSTInstr = async (instrData) => {
	try {
		const response = await fetch(`${API_URL}/VST_instr`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(instrData),
		});
		const result = await response.json();
		console.log("result from NPF: ", result);
		fetchAllVSTInstr();
	} catch (err) {
		console.error(
			"Oops, something went wrong with adding that instrument!",
			err
		);
	}
};

// DELETE VIRTUAL INSTRUMENT

export const deleteVSTInstr = async (physId) => {
	try {
		const response = await fetch(`${API_URL}/VST_instr/${physId}`, {
			method: "DELETE",
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Can't delete instrument ", error);
	}
};

// EDIT VIRTUAL INSTRUMENT

export async function editVSTInstr(instrData, VSTInstrIdEP) {
	try {
		const response = await fetch(`${API_URL}/VST_instr/${VSTInstrIdEP}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(instrData),
		});
		const result = await response.json();
		alert("Successfully edited VSTInstr.");
		return result;
	} catch (error) {
		alert("Can't edit VSTInstr");
		console.error(error);
	}
}

// -----GENRE API CALLS-------//

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

// FETCH SINGLE GENRE
export const fetchSingleGenre = async (GenreId) => {
	try {
		const response = await fetch(`${API_URL}/genres/${GenreId}`);
		const Genre = await response.json();
		return Genre;
	} catch (error) {
		console.error("Unable to fetch single virtual instrument from API", error);
	}
};

// CREATE NEW GENRE

export const createNewGenre = async (genreData) => {
	try {
		const response = await fetch(`${API_URL}/genres`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(genreData),
		});
		const result = await response.json();
		console.log("result from NPF: ", result);
		fetchAllGenres();
	} catch (err) {
		console.error("Oops, something went wrong with adding that genre!", err);
	}
};

// DELETE GENRE

export const deleteGenre = async (genreId) => {
	try {
		const response = await fetch(`${API_URL}/genres/${genreId}`, {
			method: "DELETE",
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Can't delete genre ", error);
	}
};

// EDIT GENRE

export async function editGenre(genreObj, genreIdEP) {
	try {
		const response = await fetch(`${API_URL}/genres/${genreIdEP}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(genreObj),
		});
		const result = await response.json();
		alert("Successfully edited genre.");
		return result;
	} catch (error) {
		alert("Can't edit genre");
		console.error(error);
	}
}

// -----GENRE JUNCTION API CALLS-------//

// FETCH ALL GENRE JUNCTIONS
export const fetchAllGenreJunc = async () => {
	try {
		const response = await fetch(`${API_URL}/genrejunctions`);
		const GenreJunc = await response.json();
		console.log("GenreJunc fetched", GenreJunc);
		return GenreJunc;
	} catch (error) {
		console.error("Unable to fetch all genre junctions", error);
	}
};

// FETCH SINGLE GENRE JUNC
export const fetchSingleGenreJunc = async (genreJuncId) => {
	try {
		const response = await fetch(`${API_URL}/genrejunctions/${genreJuncId}`);
		const user = await response.json();
		return user;
	} catch (error) {
		console.error("Unable to fetch genre junction", error);
	}
};
