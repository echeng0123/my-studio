const client = require("../client");

const createVSTInstr = async ({
	instr_name,
	instr_family,
	instr_category,
	engine,
	brand,
	phys_avail,
	tags,
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
                    tags)
                VALUES($1,$2,$3,$4,$5,$6,$7)
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

module.exports = { createVSTInstr, getAllVSTInstr, getVSTInstrById };
