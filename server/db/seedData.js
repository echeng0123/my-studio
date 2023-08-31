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
		vst_id: 42,
	},
	{
		instr_name: "piano",
		instr_family: "keys",
		instr_category: "keys",
		art_type: "pressed",
		vst_avail: true,
		tags: [],
		vst_id: 144,
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

const vst_instr = [
	{
		instr_name: "Joshua Bell Violin",
		instr_family: "strings",
		instr_category: "strings",
		engine: "Kontakt",
		brand: "Embertone",
		phys_avail: true,
		tags: [],
		phys_id: 28,
	},
	{
		instr_name: "India Library",
		instr_family: "percussion",
		instr_category: "percussion",
		engine: "Kontakt",
		brand: "Native Instruments",
		phys_avail: true,
		tags: ["south asian"],
		phys_id: 19,
	},
	{
		instr_name: "Rinascimento",
		instr_family: "lutes",
		instr_category: "folks",
		engine: "Kontakt",
		brand: "FluffyAudio",
		phys_avail: true,
		tags: ["european"],
		phys_id: 25,
	},
];

module.exports = { phys_instr, vst_instr };
