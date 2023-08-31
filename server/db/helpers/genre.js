const client = require("../client");

const createGenre = async ({ genre_name, bpm, age_time, tags }) => {
	try {
		const {
			rows: [genres],
		} = await client.query(
			`
                INSERT INTO genres(genre_name,
                    bpm,
                    age_time,
                    tags)
                VALUES($1,$2,$3,$4)
                RETURNING *;
            `,
			[genre_name, bpm, age_time, tags]
		);
		return genres;
	} catch (error) {
		throw error;
	}
};

const getAllGenres = async () => {
	try {
		const { rows } = await client.query(`
            SELECT *
            FROM genres;
        `);
		return rows;
	} catch (error) {
		throw error;
	}
};

const getGenreById = async (GenreId) => {
	try {
		const {
			rows: [genres],
		} = await client.query(
			`
                SELECT *
                FROM genres
                WHERE genre_id =${GenreId};
            `
		);
		console.log("genres", genres);
		return genre_instr;
	} catch (error) {
		throw error;
	}
};

module.exports = { createGenre, getAllGenres, getGenreById };
