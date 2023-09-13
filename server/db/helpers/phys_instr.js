const client = require("../client");

const createPhysInstr = async ({
	instr_name,
	instr_family,
	instr_category,
	art_type,
	vst_avail,
	tags,
	image_URL,
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
                    image_URL,
                    VST_id, userId)
                VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
                RETURNING *;
            `,
			[
				instr_name,
				instr_family,
				instr_category,
				art_type,
				vst_avail,
				tags,
				image_URL,
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
		console.log("rows", rows);
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
                SET instr_name = $1, instr_family = $2, instr_category = $3, art_type = $4, VST_avail = $5, tags = $6, image_URL = $7
                WHERE phys_id = ${PhysInstrId}
                RETURNING *;
            `,
			[
				body.instr_name,
				body.instr_family,
				body.instr_category,
				body.art_type,
				body.VST_avail,
				body.tags,
				body.image_URL,
			]
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
