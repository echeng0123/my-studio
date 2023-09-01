// Create arrays of objects based on the schema design created

// physical instruments

const phys_instr = [
	{
		instr_name: "acoustic cello",
		instr_family: "strings",
		instr_category: "strings",
		art_type: "bowed",
		vst_avail: true,
		tags: [],
		VST_id: 42,
		userId: 1,
	},
	{
		instr_name: "piano",
		instr_family: "keys",
		instr_category: "keys",
		art_type: "pressed",
		vst_avail: true,
		tags: [],
		VST_id: 144,
		userId: 1,
	},
	{
		instr_name: "electric guitar",
		instr_family: "fretted",
		instr_category: "strings",
		art_type: "plucked",
		vst_avail: true,
		tags: [],
		userId: 1,
	},
];

// virtual instruments

const VST_instr = [
	{
		instr_name: "Joshua Bell Violin",
		instr_family: "strings",
		instr_category: "strings",
		engine: "Kontakt",
		brand: "Embertone",
		phys_avail: true,
		tags: [],
		userId: 1,
	},
	{
		instr_name: "India Library",
		instr_family: "percussion",
		instr_category: "percussion",
		engine: "Kontakt",
		brand: "Native Instruments",
		phys_avail: true,
		tags: ["south asian"],
		userId: 1,
	},
	{
		instr_name: "Rinascimento",
		instr_family: "lutes",
		instr_category: "folks",
		engine: "Kontakt",
		brand: "FluffyAudio",
		phys_avail: true,
		tags: ["european"],
		userId: 1,
	},
];

// genres

const genres = [
	{
		genre_name: "Medieval Europe",
		bpm: 110,
		age_time: 1300,
		tags: ["medieval", "european"],
	},
];

// genre junction table for querying later
const genreJunctions = [
	{ physId: 1, vstId: 3 },
	{ physId: 2, vstId: 3 },
];

// users
const users = [
	{ username: "gisula", password: "gisulaplays", name: "Gisula" },
	{ username: "crab", password: "crab", name: "Crab" },
];

// export all
module.exports = { phys_instr, VST_instr, genres, genreJunctions, users };
