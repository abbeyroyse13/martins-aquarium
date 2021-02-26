import { Fish } from "./Fish.js";
import { getFish } from "./FishData.js";

export const FishList = () => {
    const allTheFish = getFish()

    const contentElement = document.querySelector("#fishList")

    let fishHTMLRepresentations = "";

    for (const oneThingFromTheSea of allTheFish) {
        fishHTMLRepresentations += Fish(oneThingFromTheSea);
    }
    console.log("fishHTMLRepresentations", fishHTMLRepresentations);

    contentElement.innerHTML = fishHTMLRepresentations;
}