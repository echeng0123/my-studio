const client = require("../client");

const createGenreJunc = async ({ physId, vstId }) => {
	try {
		const {
			rows: [genreJunctions],
		} = await client.query(
			`
                INSERT INTO genreJunctions(
                    physId,
                    vstId)
                VALUES($1,$2)
                RETURNING *;
            `,
			[physId, vstId]
		);
		return genreJunctions;
	} catch (error) {
		throw error;
	}
};

const getAllGenreJunctions = async () => {
	try {
		const { rows } = await client.query(`
            SELECT *
            FROM genreJunctions;
        `);
		return rows;
	} catch (error) {
		throw error;
	}
};

const getGenreJuncById = async (GenreJuncId) => {
	try {
		const {
			rows: [genreJunctions],
		} = await client.query(
			`
                SELECT *
                FROM genreJunctions
                WHERE genreJunc_id =${GenreJuncId};
            `
		);
		return genreJunctions;
	} catch (error) {
		throw error;
	}
};

module.exports = { createGenreJunc, getAllGenreJunctions, getGenreJuncById };
