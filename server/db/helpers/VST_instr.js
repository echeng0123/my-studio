const client = require("../client");

const createVSTInstr = async ({
	instr_name,
	instr_family,
	instr_category,
	engine,
	brand,
	phys_avail,
	tags,
	image_URL,
	userId,
}) => {
	try {
		const {
			rows: [VST_instr],
		} = await client.query(
			`
                INSERT INTO VST_instr(instr_name,
                    instr_family,
                    instr_category,
                    engine,
                    brand,
                    phys_avail,
                    tags, image_URL, userId)
                VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
                RETURNING *;
            `,
			[
				instr_name,
				instr_family,
				instr_category,
				engine,
				brand,
				phys_avail,
				tags,
				image_URL,
				userId,
			]
		);
		return VST_instr;
	} catch (error) {
		throw error;
	}
};

const getAllVSTInstr = async () => {
	try {
		const { rows } = await client.query(`
            SELECT *
            FROM VST_instr;
        `);
		return rows;
	} catch (error) {
		throw error;
	}
};

const getVSTInstrById = async (VSTInstrId) => {
	try {
		const {
			rows: [VST_instr],
		} = await client.query(
			`
                SELECT *
                FROM VST_instr
                WHERE VST_id =${VSTInstrId};
            `
		);
		console.log("VST_instr is: ", VST_instr);
		return VST_instr;
	} catch (error) {
		throw error;
	}
};

const updateVSTInstr = async (VSTInstrId, body) => {
	try {
		const { rows } = await client.query(
			`
                UPDATE VST_instr
                SET instr_name = $1, instr_family = $2, instr_category = $3,engine = $4, brand = $5, phys_avail = $6, tags = $7, image_URL = $8
                WHERE VST_id = ${VSTInstrId}
                RETURNING *;
            `,
			[
				body.instr_name,
				body.instr_family,
				body.instr_category,
				body.engine,
				body.brand,
				body.phys_avail,
				body.tags,
				body.image_URL,
			]
		);
		console.log("rows", rows);
		return rows;
	} catch (error) {
		throw error;
	}
};

const deleteVSTInstr = async (VSTInstrId) => {
	try {
		const { rows } = await client.query(
			`
            DELETE FROM VST_instr
            WHERE VST_id = ${VSTInstrId}
            RETURNING *;
            `
		);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	createVSTInstr,
	getAllVSTInstr,
	getVSTInstrById,
	updateVSTInstr,
	deleteVSTInstr,
};
