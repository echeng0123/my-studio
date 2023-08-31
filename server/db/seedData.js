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
	},
	{
		instr_name: "piano",
		instr_family: "keys",
		instr_category: "keys",
		art_type: "pressed",
		vst_avail: true,
		tags: [],
		VST_id: 144,
	},
	{
		instr_name: "electric guitar",
		instr_family: "fretted",
		instr_category: "strings",
		art_type: "plucked",
		vst_avail: true,
		tags: [],
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
	},
	{
		instr_name: "India Library",
		instr_family: "percussion",
		instr_category: "percussion",
		engine: "Kontakt",
		brand: "Native Instruments",
		phys_avail: true,
		tags: ["south asian"],
	},
	{
		instr_name: "Rinascimento",
		instr_family: "lutes",
		instr_category: "folks",
		engine: "Kontakt",
		brand: "FluffyAudio",
		phys_avail: true,
		tags: ["european"],
	},
];

// genres

const genres = [
	{
		genre_name: "Medieval Europe",
		bpm: 110,
		age_time: 1300,
		tags: ["medieval", "european"],
		physId: 1,
		vstId: 3,
	},
];

const genre = (module.exports = { phys_instr, VST_instr, genres });
