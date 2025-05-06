// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.

interface Restaurant {
	name: string;
	city: string;
}

interface RestaurantsByCity {
	[city: string]: string[];
}

export function groupRestaurants(restaurants: Restaurant[]): RestaurantsByCity {
	const cityWiseRestaurants: RestaurantsByCity = {};
	for (const { city, name } of restaurants) {
		cityWiseRestaurants[city] ??= [];
		cityWiseRestaurants[city].push(name);
	}
	return cityWiseRestaurants;
}
