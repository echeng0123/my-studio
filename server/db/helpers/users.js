const client = require("../client");

const createUser = async ({ username, password, name }) => {
	try {
		const {
			rows: [users],
		} = await client.query(
			`
                INSERT INTO users(username, password, name)
                VALUES($1,$2,$3)
                RETURNING *;
            `,
			[username, password, name]
		);
		return users;
	} catch (error) {
		throw error;
	}
};

const getAllUsers = async () => {
	try {
		console.log("entered getAllUsers");
		const { rows } = await client.query(`
		    SELECT * FROM users;
		`);
		console.log("made it past client query");
		return rows;
	} catch (error) {
		throw error;
	}
};

const getUserById = async (UserId) => {
	try {
		const {
			rows: [users],
		} = await client.query(
			`
                SELECT *
                FROM users
                WHERE user_id =${UserId};
            `
		);
		console.log("Users", users);
		return users;
	} catch (error) {
		throw error;
	}
};

const updateUser = async (userId, body) => {
	try {
		const { rows } = await client.query(
			`
                UPDATE users
                SET username = '${body.username}', password = '${body.password}', name = '${body.name}'
                WHERE user_id = ${userId}
                RETURNING *;
            `
		);
		return rows;
	} catch (error) {
		throw error;
	}
};

module.exports = { createUser, getAllUsers, getUserById, updateUser };
