const client = require("../client");

const createUser = async ({ username, password }) => {
	try {
		const {
			rows: [users],
		} = await client.query(
			`
                INSERT INTO users(username, password)
                VALUES($1,$2)
                RETURNING *;
            `,
			[username, password]
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

const getUserByUsername = async (username) => {
	const {
		rows: [user],
	} = await client.query(
		`
      SELECT * FROM users
      WHERE users.username = '${username}'
      `
	);
	return user;
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
	getUserByUsername,
	updateUser,
	deleteUser,
};
