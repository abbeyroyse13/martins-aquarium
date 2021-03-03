import { Fish } from "./Fish.js";
import { getFish, getMostHolyFish, getSoldierFish, getUnworthy } from "./FishData.js";


/** Define the steps that need to be taken
 1. Get the array of Fish
 2. Get a reference to the location on the DOM where you want to display the list of fish
 3. Declare a variable to hold on to fish HTML representations
 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
 4. Finally set the dom equal to the variable containing the fish html representations
 **/

/** export const FishList = () => {
	const allFishes = getFish();
	const DOMLocation = document.querySelector("#fishList");
	let fishHTMLRepresentations = "";

	for (const oneFish of allFishes) {
		fishHTMLRepresentations += Fish(oneFish);
		console.log("fishHTMLRepresentations", fishHTMLRepresentations);
	}

	DOMLocation.innerHTML = fishHTMLRepresentations;
	
} **/

export const FishList = () => {

	const holyFish = getMostHolyFish();
	const soldierFish = getSoldierFish();
	const unworthyFish = getUnworthy();

	const allFishes = getMostHolyFish().concat(getSoldierFish(), getUnworthy());
	console.log(typeof allFishes);
	const DOMLocation = document.querySelector("#fishList");
	let fishHTMLRepresentations = "";

	for (const oneFish of allFishes) {
		fishHTMLRepresentations += Fish(oneFish);
		console.log("fishHTMLRepresentations", fishHTMLRepresentations);
	}

	DOMLocation.innerHTML = `${fishHTMLRepresentations}`;
	
}