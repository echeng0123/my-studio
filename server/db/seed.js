// pull in connection to local database

const client = require("./client");

const {
	createPhysInstr,
	getAllPhysInstr,
	getPhysInstrById,
} = require("./helpers/phys_instr");

const { phys_instr, VST_instr } = require("./seedData");

//Drop Tables for cleanliness
const dropTables = async () => {
	try {
		console.log("Starting to drop tables");
		await client.query(`
        DROP TABLE IF EXISTS phys_instr;
        DROP TABLE IF EXISTS VST_instr;
        `);
		console.log("Tables dropped!");
	} catch (error) {
		console.log("Error dropping tables");
		throw error;
	}
};

//Create Tables because we need a place for the data to live
const createTables = async () => {
	console.log("Building tables...");
	await client.query(`
        CREATE TABLE phys_instr (
            phys_id SERIAL PRIMARY KEY,
            instr_name varchar(255) NOT NULL,
            instr_family varchar(255) NOT NULL,
            instr_category varchar(255) NOT NULL,
            art_type varchar(255) NOT NULL,
            VST_avail BOOLEAN NOT NULL,
            tags TEXT[],
            VST_id INTEGER REFERENCES VST_instr(VST_id)
        );
        CREATE TABLE VST_instr (
            VST_id SERIAL PRIMARY KEY,
            instr_name varchar(255) NOT NULL,
            instr_family varchar(255) NOT NULL,
            instr_category varchar(255) NOT NULL,
            engine varchar(255) NOT NULL,
            brand varchar(255) NOT NULL,
            phys_avail BOOLEAN NOT NULL,
            tags TEXT[],
            phys_id INTEGER REFERENCES phys_instr(phys_id)
        );
    `);
	console.log("Tables built!");
};

//Insert mock data from seedData.js
// Create physical instrument table
const createInitialPhysInstr = async () => {
	try {
		//Looping through the "phys_instr" array from seedData
		for (const instr of phys_instr) {
			//Insert each instrument into the table
			await createPhysInstr(instr);
		}
		console.log("created phys_instr table");
	} catch (error) {
		throw error;
	}
};

// Create virtual instrument table
const createInitialVSTInstr = async () => {
	try {
		//Looping through the "VST_instr" array from seedData
		for (const instr of VST_instr) {
			//Insert each instrument into the table
			await createVSTInstr(instr);
		}
		console.log("created VST_instr table");
	} catch (error) {
		throw error;
	}
};

//Call all my functions and 'BUILD' my database
const rebuildDb = async () => {
	try {
		//ACTUALLY connect to my local database
		client.connect();
		//Run our functions
		await dropTables();
		await createTables();

		//Generating starting data
		console.log("starting to seed...");
		await createInitialPhysInstr();
		await createInitialVSTInstr();
	} catch (error) {
		console.error(error);
	} finally {
		//close our connection
		client.end();
	}
};

rebuildDb();
