// this file links the API requests for the genres table

const express = require("express");
const router = express.Router();

const {
	getAllGenres,
	getGenreById,
	createGenres,
	updateGenres,
	deleteGenres,
} = require("../db/helpers/genre");

// GET - /api/genres - get all genres
router.get("/", async (req, res, next) => {
	try {
		const genres = await getAllGenres();
		res.send(genres);
	} catch (error) {
		console.log("error from router get", error);
		res.send([]);
		next(error);
	}
});

// GET - /api/genres/:GenreId - get genres by id
router.get("/:GenreId", async (req, res, next) => {
	try {
		const genre = await getGenreById(req.params.GenreId);
		res.send(genre);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
