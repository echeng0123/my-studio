const client = require("../client");

const createPhysInstr = async ({
	instr_name,
	instr_family,
	instr_category,
	art_type,
	vst_avail,
	tags,
	vst_id,
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
                    art_type,
                    vst_avail,
                    tags,
                    vst_id)
                VALUES($1,$2,$3,$4,$5,$6,$7)
                RETURNING *;
            `,
			[
				instr_name,
				instr_family,
				instr_category,
				art_type,
				vst_avail,
				tags,
				vst_id ? vst_id : 999,
			]
		);
		return phys_instr;
	} catch (error) {
		throw error;
	}
};

const getAllPhysInstr = async () => {
	try {
		const { rows } = await client.query(`
            SELECT *
            FROM phys_instr;
        `);
		return rows;
	} catch (error) {
		throw error;
	}
};

const getPhysInstrById = async (PhysInstrId) => {
	try {
		const {
			rows: [phys_instr],
		} = await client.query(
			`
                SELECT *
                FROM phys_instr
                WHERE phys_instr_id =${PhysInstrId};
            `
		);
		console.log("phys_instr is: ", phys_instr);
		return phys_instr;
	} catch (error) {
		throw error;
	}
};

module.exports = { createPhysInstr, getAllPhysInstr, getPhysInstrById };
