import { Location } from "./Location.js";
import { getLocations } from "./LocationData.js";


/** Define the steps that need to be taken
 1. Get the array of Fish
 2. Get a reference to the location on the DOM where you want to display the list of fish
 3. Declare a variable to hold on to fish HTML representations
 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
 4. Finally set the dom equal to the variable containing the fish html representations
 **/

export const LocationList = () => {
	const allLocations = getLocations();
	const DOMLocation = document.querySelector("#locationList");
	let fishLocationsHTMLRep = "";

	for (const oneLocation of allLocations) {
		fishLocationsHTMLRep += Location(oneLocation);
		console.log("fishLocationsHTMLRep", fishLocationsHTMLRep);
	}

	DOMLocation.innerHTML = fishLocationsHTMLRep;
	
}