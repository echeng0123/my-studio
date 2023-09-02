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
                SET instr_name = '${body.instr_name}', instr_family = '${body.instr_family}', instr_category = '${body.instr_category}',
                engine = '${body.engine}',
                brand = '${body.brand}',
                phys_avail = ${body.phys_avail},
                tags = '{${body.tags}}',
                image_URL = '${body.image_URL}',
                userId = '${body.userId}'
                WHERE VST_id = ${VSTInstrId}
                RETURNING *;
            `
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
