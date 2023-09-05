// this file links the API requests for the genres table

const express = require("express");
const router = express.Router();

const {
	getAllGenreJunctions,
	getGenreJuncById,
} = require("../db/helpers/genreJunc");

// GET - /api/genrejunctions - get all info from genre junction table
router.get("/", async (req, res, next) => {
	try {
		const genres = await getAllGenreJunctions();
		res.send(genres);
	} catch (error) {
		console.log("error from router get", error);
		res.send([]);
		next(error);
	}
});

// GET - /api/genres/:GenreJuncId - get genres by id
router.get("/:GenreJuncId", async (req, res, next) => {
	try {
		const genreJunc = await getGenreJuncById(req.params.GenreJuncId);
		res.send(genreJunc);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
