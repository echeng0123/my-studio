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
		    SELECT * FROM users;
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

const deleteUser = async (userId) => {
	try {
		const { rows } = await client.query(
			`
            DELETE FROM users
            WHERE user_id = ${userId}
            RETURNING *;
            `
		);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	createUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
};
