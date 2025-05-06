// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.

interface LandmarkBase {
	type: string;
	name: string;
}

interface FortLandmark extends LandmarkBase {
	type: "fort";
}

interface LakeLandmark extends LandmarkBase {
	type: "lake";
	miles: number;
}

interface LighthouseLandmark extends LandmarkBase {
	type: "lighthouse";
	lit: number;
	height: number;
}

interface MountainLandmark extends LandmarkBase {
	type: "mountain";
	height: number;
}

interface ParkLandmark extends LandmarkBase {
	type: "park";
	acres: number;
}

interface RiverLandmark extends LandmarkBase {
	type: "river";
	length: number;
	depth: number;
}

interface WaterfallLandmark extends LandmarkBase {
	type: "waterfall";
	height: number;
}

export type Landmark =
	| FortLandmark
	| LakeLandmark
	| LighthouseLandmark
	| MountainLandmark
	| ParkLandmark
	| RiverLandmark
	| WaterfallLandmark;

export function describeLandmark(landmark: Landmark) {
	const { name, type } = landmark;
	const description = [`${name} is a ${type} in Upstate New York.`];

	switch (type) {
		case "fort":
			break;

		case "lake":
			description.push(`It covers ${landmark.miles} square miles of water.`);
			break;

		case "lighthouse":
			description.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
			);
			break;

		case "mountain":
			description.push(`Its peak is ${landmark.height} feet high.`);
			break;

		case "park":
			description.push(`It covers ${landmark.acres} square acres.`);
			break;

		case "river":
			description.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
			);
			break;

		case "waterfall":
			description.push(`It is ${landmark.height} feet high.`);
			break;

		default:
			throw new Error("Bad input.");
	}

	return description.join("\n");
}
