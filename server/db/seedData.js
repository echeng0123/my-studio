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
		image_URL:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1RLaQJpXXXXbnXpXXq6xXFXXXh%2FCello-4-4-New-Electric-Acoustic-Cello-Nice-Sound-Solid-wood-4-string-206-you-can.jpg&f=1&nofb=1&ipt=02189113a6547f659137cd19477365514f06e4900653dd033bc931307ddcbefa&ipo=images",
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
		image_URL:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fusa.yamaha.com%2Ffiles%2F2C2993765A484549AB0F07F20F76A1E7_12073_2611x2853_a07622e3ec76be9b3b0c4bf7cfa9eaa1.jpg&f=1&nofb=1&ipt=90f45261103cd0231bb8c62e9056c643eed9c948a56f77929883058e72521b1c&ipo=images",
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
		image_URL:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F6WLec4dctcDhreKtKBfgW6.jpg&f=1&nofb=1&ipt=752d100636fc5bdd2e48868700427569381833e3e82150ed24ff0170d8f4e3a7&ipo=images",
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
		image_URL: "",
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
		image_URL:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jBFbyW6QtOjZRXbQsLw8egHaGu%26pid%3DApi&f=1&ipt=ab9808a71f79979c75837251dd849f9c3781f38ec5da57b0175fe946ee86278e&ipo=images",
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
		image_URL: "",
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
	{ username: "gisula", password: "gisulaplays" },
	{ username: "crab", password: "crab" },
];

// export all
module.exports = { phys_instr, VST_instr, genres, genreJunctions, users };
