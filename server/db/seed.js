// pull in connection to local database

const client = require("./client");

const {
	createPhysInstr,
	getAllPhysInstr,
	getPhysInstrById,
} = require("./helpers/phys_instr");

const {
	createVSTInstr,
	getAllVSTInstr,
	getVSTInstrById,
} = require("./helpers/VST_instr");

const { createGenre, getAllGenre, getGenreById } = require("./helpers/genre");

const {
	createGenreJunc,
	getAllGenreJunctions,
	getGenreJuncById,
} = require("./helpers/genreJunc");

const { createUser, getAllUsers, getUserById } = require("./helpers/users");

const {
	phys_instr,
	VST_instr,
	genres,
	genreJunctions,
	users,
} = require("./seedData");

//Drop Tables for cleanliness
const dropTables = async () => {
	try {
		console.log("Starting to drop tables");
		await client.query(`
        DROP TABLE IF EXISTS phys_instr cascade;
        DROP TABLE IF EXISTS VST_instr cascade;
        DROP TABLE IF EXISTS genres cascade;
        DROP TABLE IF EXISTS genreJunctions cascade;
        DROP TABLE IF EXISTS users cascade;
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
            VST_id INTEGER NOT NULL
        );
        CREATE TABLE VST_instr (
            VST_id SERIAL PRIMARY KEY,
            instr_name varchar(255) NOT NULL,
            instr_family varchar(255) NOT NULL,
            instr_category varchar(255) NOT NULL,
            engine varchar(255) NOT NULL,
            brand varchar(255) NOT NULL,
            phys_avail BOOLEAN NOT NULL,
            tags TEXT[]
        );
        CREATE TABLE genres (
            genre_id SERIAL PRIMARY KEY,
            genre_name varchar(255) NOT NULL,
            bpm integer NOT NULL,
            age_time integer NOT NULL,
            tags TEXT[],
            physId INTEGER REFERENCES phys_instr(phys_id),
            vstId INTEGER REFERENCES VST_instr(VST_id)
        );
        CREATE TABLE genreJunctions (
            genreJunc_id SERIAL PRIMARY KEY,
            physId INTEGER REFERENCES phys_instr(phys_id) NOT NULL, 
            vstId INTEGER REFERENCES VST_instr(VST_id) NOT NULL
        );
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            username varchar(30) UNIQUE NOT NULL,
            password varchar(30) NOT NULL,
            name varchar(255) NOT NULL
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
		console.log(phys_instr);
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
		console.log(VST_instr);
		console.log("created VST_instr table");
	} catch (error) {
		throw error;
	}
};

// Create genre table
const createInitialGenre = async () => {
	try {
		//Looping through the "genres" array from seedData
		for (const genre of genres) {
			//Insert each genre into the table
			await createGenre(genre);
		}
		console.log(genres);
		console.log("created genres table");
	} catch (error) {
		throw error;
	}
};

// Create genre junction table
const createInitialGenreJunc = async () => {
	try {
		//Looping through the "genres" array from seedData
		for (const genreJunc of genreJunctions) {
			//Insert each genre into the table
			await createGenreJunc(genreJunc);
		}
		console.log(genreJunctions);
		console.log("created genre junction table");
	} catch (error) {
		throw error;
	}
};

// Create user table
const createInitialUser = async () => {
	try {
		//Looping through the "genres" array from seedData
		for (const user of users) {
			//Insert each genre into the table
			await createUser(user);
		}
		console.log("users", users);
		console.log("created user table");
	} catch (error) {
		throw error;
	}
};

//Call all my functions and 'BUILD' my database
const rebuildDb = async () => {
	try {
		//ACTUALLY connect to my local database
		console.log("entering rebuildDB function");
		client.connect();
		//Run our functions
		await dropTables();
		await createTables();

		//Generating starting data
		console.log("starting to seed...");
		await createInitialPhysInstr();
		await createInitialVSTInstr();
		await createInitialGenre();
		await createInitialGenreJunc();
		await createInitialUser();
	} catch (error) {
		console.error(error);
	} finally {
		//close our connection
		client.end();
	}
};

rebuildDb();
