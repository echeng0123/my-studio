// this file aggregates all the API requests for the users table

const express = require("express");
const router = express.Router();

const {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
} = require("../db/helpers/users");

// GET - /api/users - get all users
router.get("/", async (req, res, next) => {
	try {
		const users = await getAllUsers();
		res.send(users);
	} catch (error) {
		console.log("error from router get", error);
		res.send([]);
		next(error);
	}
});

// GET - /api/users/:userId - get user by id
router.get("/:userId", async (req, res, next) => {
	try {
		const user = await getUserById(req.params.userId);
		res.send(user);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
