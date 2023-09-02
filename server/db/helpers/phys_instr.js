const client = require("../client");

const createPhysInstr = async ({
	instr_name,
	instr_family,
	instr_category,
	art_type,
	vst_avail,
	tags,
	VST_id,
	userId,
}) => {
	try {
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
                    VST_id, userId)
                VALUES($1,$2,$3,$4,$5,$6,$7,$8)
                RETURNING *;
            `,
			[
				instr_name,
				instr_family,
				instr_category,
				art_type,
				vst_avail,
				tags,
				VST_id ? VST_id : 999,
				userId,
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
                WHERE phys_id =${PhysInstrId};
            `
		);
		console.log("phys_instr is: ", phys_instr);
		return phys_instr;
	} catch (error) {
		throw error;
	}
};

const updatePhysInstr = async (PhysInstrId, body) => {
	try {
		const { rows } = await client.query(
			`
                UPDATE phys_instr
                SET instr_name = '${body.instr_name}', instr_family = '${body.instr_family}', instr_category = '${body.instr_category}',
                art_type = '${body.art_type}',
                VST_avail = ${body.VST_avail},
                tags = '{${body.tags}}',
                VST_id = '${body.VST_id}',
                userId = '${body.userId}'
                WHERE phys_id = ${PhysInstrId}
                RETURNING *;
            `
		);
		return rows;
	} catch (error) {
		throw error;
	}
};

const deletePhysInstr = async (PhysInstrId) => {
	try {
		const { rows } = await client.query(
			`
            DELETE FROM phys_instr
            WHERE phys_id = ${PhysInstrId}
            RETURNING *;
            `
		);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	createPhysInstr,
	getAllPhysInstr,
	getPhysInstrById,
	updatePhysInstr,
	deletePhysInstr,
};
