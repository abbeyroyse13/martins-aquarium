const fishCollection = [
	{
		saltWater: true,
		harvestLocation: "Pacific Ocean",
		diet: "algae",
		name: "Malcolm",
		species: "Blue Tang",
		inches: 13,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Bali",
		diet: "really small fish",
		name: "Bob",
		species: "Guppy",
		inches: 3,
		image: "pinkfish.jpg"
	},
	{ saltWater: true, harvestLocation: "Atlantic Ocean", diet: "squid", name: "BigBoss", species: "Amber Jack", inches: 60, image: "pinkfish.jpg" },
	{
		saltWater: true,
		harvestLocation: "Pacific Ocean",
		diet: "shellfish",
		name: "Jerry",
		species: "swordfish",
		inches: 80,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Gulf of Mexico",
		diet: "tiny fish",
		name: "Predator",
		species: "catfish",
		inches: 20,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Ocean",
		diet: "Herring",
		name: "Sabre",
		species: "Swordfish",
		inches: 117.6,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Amazon Basin",
		diet: "brine shrimp",
		name: "Myrti",
		image: "pinkfish.jpg",
		inches: 12,
		species: "angel fish"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Ocean",
		diet: "Plankton",
		name: "Nemo",
		species: "Clownfish",
		inches: 4,
		image: "bluefish.jpg"
	},
	{
		saltwater: false,
		harvestLocation: "Mississippi River",
		diet: "Everything",
		name: "Vacuum",
		species: "Catfish",
		inches: 24,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Bobbies Fish Emporium",
		diet: "minnows",
		name: "Ralph",
		species: "Smallmouth Bass",
		inches: 14,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Cumberland River",
		diet: "anything",
		name: "Whiskers",
		species: "Ictalurus furcatus",
		inches: 39,
		image: "bluefish.jpg"
	},
	{ saltWater: true, harvestLocation: "South Pacific", diet: "shrimp", inches: 64, species: "Tuna", name: "Bruno", image: "bluefish.jpg" },
	{ saltWater: false, harvestLocation: "Petsmart", diet: "algae", name: "Dorothy", species: "goldfish", inches: 3, image: "bluefish.jpg" },
	{
		saltWater: false,
		harvestLocation: "Lake Tahoe",
		diet: "insects",
		name: "Trent",
		species: "Rainbow Trout",
		inches: 21,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Carribean Sea",
		diet: "shrimp",
		name: "Stephen",
		species: "Angler",
		inches: 23,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Barbados",
		diet: "anchoves",
		name: "Pizza",
		species: "Tuna",
		inches: 40,
		image: "orangefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "TN River",
		diet: "Bacon",
		name: "Finn",
		species: "Bass",
		inches: 20,
		image: "bluefish.jpg",
	},
	{
		saltWater: true,
		diet: "mollusks",
		name: "Simba",
		species: "lionfish",
		harvestLocation: "Red Sea",
		Inches: 10,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "New Zealand",
		diet: "Lost Sailors",
		name: "Tiki",
		species: "Parrot Fish",
		inches: 36,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Red Sea",
		diet: "algae",
		name: "Bobo",
		species: "Clown Fish",
		inches: 5,
		image: "bluefish.jpg"
	},
	{
		saltWater: true,
		harvestLocation: "Atlantic Sea",
		name: "flipper",
		inches: 12,
		image: "orangefish.jpg",
		diet: "worms",
		species: "garibaldi"
	},
	{
		saltWater: true,
		harvestLocation: "Bikini Bottom",
		diet: "Big Ole Fish",
		name: "Pearl",
		species: "Whale",
		inches: 1000,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Port Innsmouth",
		diet: "Primeval Shadows",
		name: "Cthulhu",
		species: "Old One",
		inches: 999,
		image: "pinkfish.jpg"
	},
	{ saltWater: false, harvestLocation: "Amazon River", diet: "smaller fish", name: "Bitey", species: "Pirhana", inches: 7.5, image: "bluefish.jpg" },
	{
		saltwater: true,
		harvestLocation: "St.Croix",
		diet: "squid",
		name: "Crush",
		species: "blue ting",
		inches: 7,
		image: "bluefish.jpg"
	},
	{
		saltWater: false,
		harvestLocation: "Minnesota",
		diet: "Cherry Tomatoes",
		name: "Frank",
		species: "Piranha",
		inches: 7,
		image: "bluefish.jpg"
	},
	{ saltWater: true, harvestLocation: "Atlantic, Pacific, and southern sea", diet: "smaller fish", name: "bluefin tuna", species: "Thunnus thynnus", inches: 84, image: "bluefish.jpg" },
	{
		saltwater: true,
		harvestLocation: "Baltic Sea",
		diet: "smaller fish",
		name: "Fil",
		species: "goldFish",
		inches: 40,
		image: "bluefish.jpg"
	},

	{ 
		saltWater: true, 
		harvestLocation: "Indian Ocean", 
		diet: "invertebrates", 
		name: "Danny", 
		species: "Goat Catfish", 
		inches: 18, 
		image: "cute-fish.png" 
	}, 
	
	{ 
		saltWater: true, 
		harvestLocation: "Red Sea", 
		diet: "other fish", 
		name: "Negan", 
		species: "Swordfish", 
		inches: 69, 
		image: "scary-fish.jpg" 
	},

	{
		saltWater: false, 
		harvestLocation: "Arctic Ocean", 
		diet: "krill", 
		name: "Richie", 
		species: "Snailfish", 
		inches: 21, 
		image: "snail-fish.png" 
	}
];


export const getFish = () => {
	return fishCollection
};

export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fishObj of fishCollection) {
		if (fishObj.inches % 3 === 0) {
			holyFishArray.push(fishObj);
		};
    };
	console.log("Most Holy Fish", `${holyFishArray}`);
    return holyFishArray;
};

export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
	const soldierFishArray = []

	for (const fishObj of fishCollection) {
		if (fishObj.inches % 5 === 0) {
			soldierFishArray.push(fishObj);
		};
	};
	console.log("Solider Fish", `${soldierFishArray}`);
    return soldierFishArray;
};

export const getUnworthy = () => {
    // Any fish not a multiple of 3 or 5
	const unworthyFishArray = [];

	for (const fishObj of fishCollection) {
		if (!(fishObj.inches % 5 === 0 || fishObj.inches % 3 === 0)) {
			unworthyFishArray.push(fishObj);
		};
	};
	console.log("Unworthy Fish", `${unworthyFishArray}`);
    return unworthyFishArray;
};