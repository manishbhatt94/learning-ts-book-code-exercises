// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

interface City {
	name: string;
	coordinates: Coordinates;
	catchphrase?: string;
}

interface Coordinates {
	north: Coordinate;
	west: Coordinate;
}

type Coordinate = [number, number, number];

export function describeCity(city: City) {
	const { name, catchphrase, coordinates } = city;
	const description = [];
	description.push(`${name}, New York`);
	if (catchphrase) {
		description.push(`* "${catchphrase}"`);
	}
	const northCoord = `${formatCoordinate(coordinates.north)}N`;
	const westCoord = `${formatCoordinate(coordinates.west)}W`;
	description.push(`* Located at ${northCoord} ${westCoord}`);

	return description.join("\n");
}

function formatCoordinate(coord: Coordinate) {
	const [degrees, minutes, seconds] = coord.map((part) =>
		String(part).padStart(2, "0")
	);
	return `${degrees}°${minutes}'${seconds}"`;
}
