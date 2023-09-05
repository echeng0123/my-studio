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
