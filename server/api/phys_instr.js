// this file links the API requests for the physical instruments table

const express = require("express");
const router = express.Router();

const {
	getAllPhysInstr,
	getPhysInstrById,
	createPhysInstr,
	updatePhysInstr,
	deletePhysInstr,
} = require("../db/helpers/phys_instr");

// GET - /api/phys_instr - get all physical instruments
router.get("/", async (req, res, next) => {
	try {
		const phys_instr = await getAllPhysInstr();
		res.send(phys_instr);
	} catch (error) {
		console.log("error from router get", error);
		res.send([]);
		next(error);
	}
});

// GET - /api/phys_instr/:PhysInstrId - get physical instruments by id
router.get("/:PhysInstrId", async (req, res, next) => {
	try {
		const instrument = await getPhysInstrById(req.params.PhysInstrId);
		res.send(instrument);
	} catch (error) {
		next(error);
	}
});

// POST - /api/phys_instr - create a new physical instrument
router.post("/", async (req, res, next) => {
	try {
		const user = await createPhysInstr(req.body);
		res.send(user);
	} catch (error) {
		next(error);
	}
});

// PUT - /api/phys_instr/:PhysInstrId - update a physical instrument
router.put("/:PhysInstrId", async (req, res, next) => {
	try {
		const phys_instr = await updatePhysInstr(req.params.PhysInstrId, req.body);
		res.send(phys_instr);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
