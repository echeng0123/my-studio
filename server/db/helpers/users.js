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
		const { rows } = await client.query(`
            SELECT *
            FROM users;
        `);
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

module.exports = { createUser, getAllUsers, getUserById };
