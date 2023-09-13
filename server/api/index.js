// main routing service, building routes here

const express = require("express");
const router = express.Router();

// GET /api/health
router.get("/health", (req, res, next) => {
	res.send("OK");
});

// ROUTER: /api/users
router.use("/users", require("./users"));

// ROUTER: /api/phys_instr
router.use("/phys_instr", require("./phys_instr"));

// ROUTER: /api/vst_instr
router.use("/vst_instr", require("./vst_instr"));

// ROUTER: /api/genres
router.use("/genres", require("./genres"));

// ROUTER: /api/genresJunctions
router.use("/genreJunctions", require("./genreJunctions"));

// ROUTER: /api/register
router.use("/register", require("./users"));

// ROUTER: /api/login
router.use("/login", require("./users"));

// ROUTER: /api/logout
router.use("/logout", require("./users"));

module.exports = router;
