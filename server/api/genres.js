// this file links the API requests for the genres table

const express = require("express");
const router = express.Router();

const {
	getAllGenres,
	getGenreById,
	createGenre,
	updateGenre,
	deleteGenre,
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

// POST - /api/genres - create a new genre
router.post("/", async (req, res, next) => {
	try {
		const user = await createGenre(req.body);
		res.send(user);
	} catch (error) {
		next(error);
	}
});

// PUT - /api/genres/:GenreId - update a genre
router.put("/:GenreId", async (req, res, next) => {
	try {
		const genre = await updateGenre(req.params.GenreId, req.body);
		res.send(genre);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
