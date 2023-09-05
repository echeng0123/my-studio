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
			rows: [genre],
		} = await client.query(
			`
                SELECT *
                FROM genres
                WHERE genre_id =${GenreId};
            `
		);
		console.log("genres", genre);
		return genre;
	} catch (error) {
		throw error;
	}
};

const updateGenre = async (GenreId, body) => {
	try {
		const { rows } = await client.query(
			`
                UPDATE genres
                SET genre_name = '${body.genre_name}', 
                bpm = ${body.bpm}, 
                age_time = ${body.age_time},
                tags = '{${body.tags}}',
                physId = '${body.phys_id}',
                vstId = '${body.VST_id}'
                WHERE genre_id = ${GenreId}
                RETURNING *;
            `
		);
		return rows;
	} catch (error) {
		throw error;
	}
};

const deleteGenre = async (genreId) => {
	try {
		const { rows } = await client.query(
			`
            DELETE FROM genres
            WHERE Genre_id = ${genreId}
            RETURNING *;
            `
		);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	createGenre,
	getAllGenres,
	getGenreById,
	updateGenre,
	deleteGenre,
};
