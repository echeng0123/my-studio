// this file links the API requests for the virtual instruments table

const express = require("express");
const router = express.Router();

const {
	getAllVSTInstr,
	getVSTInstrById,
	createVSTInstr,
	updateVSTInstr,
	deleteVSTInstr,
} = require("../db/helpers/VST_instr");

// GET - /api/VST_instr - get all virtual instruments
router.get("/", async (req, res, next) => {
	try {
		const VST_instr = await getAllVSTInstr();
		res.send(VST_instr);
	} catch (error) {
		console.log("error from router get", error);
		res.send([]);
		next(error);
	}
});

// GET - /api/VST_instr/:VSTInstrId - get virtual instruments by id
router.get("/:VSTInstrId", async (req, res, next) => {
	try {
		const instrument = await getVSTInstrById(req.params.VSTInstrId);
		res.send(instrument);
	} catch (error) {
		next(error);
	}
});

// POST - /api/VST_instr - create a new virtual instrument
router.post("/", async (req, res, next) => {
	try {
		const user = await createVSTInstr(req.body);
		res.send(user);
	} catch (error) {
		next(error);
	}
});

// PUT - /api/VST_instr/:VSTInstrId - update a virtual instrument
router.put("/:VSTInstrId", async (req, res, next) => {
	try {
		const VST_instr = await updateVSTInstr(req.params.VSTInstrId, req.body);
		res.send(VST_instr);
	} catch (error) {
		next(error);
	}
});

// DELETE - /api/VST_instr/:VSTInstrId - delete a VSTInstr
router.delete("/:VSTInstrId", async (req, res, next) => {
	try {
		const VSTInstr = await deleteVSTInstr(req.params.VSTInstrId);
		res.send(VSTInstr);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
