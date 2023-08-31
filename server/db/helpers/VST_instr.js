const client = require("../client");

const createVSTInstr = async ({
	instr_name,
	instr_family,
	instr_category,
	engine,
	brand,
	phys_avail,
	tags,
	phys_id,
}) => {
	try {
		console.log("entering createPhysInstr");
		const {
			rows: [phys_instr],
		} = await client.query(
			`
                INSERT INTO phys_instr(instr_name,
                    instr_family,
                    instr_category,
                    engine,
                    brand,
                    phys_avail,
                    tags,
                    phys_id)
                VALUES($1,$2,$3,$4,$5,$6,$7,$8)
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
				phys_id ? phys_id : 999,
			]
		);
		return phys_instr;
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
                WHERE VST_instr_id =${VSTInstrId};
            `
		);
		console.log("VST_instr is: ", VST_instr);
		return VST_instr;
	} catch (error) {
		throw error;
	}
};

module.exports = { createVSTInstr, getAllVSTInstr, getVSTInstrById };
