// Write your class and functions here! ✨
// You'll need to export the class and functions so the tests can run it.

interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

interface HorrorConfig {
	name: string;
	isEvil: () => boolean;
	getPowerFrom: (consumed: Consumed) => number;
}

export class Horror {
	#name: string;
	readonly isEvil: () => boolean;
	readonly #getPowerFrom: (opponent: Consumed) => number;
	#consumed: Consumed[] = [];

	constructor(config: HorrorConfig) {
		this.#name = config.name;
		this.isEvil = config.isEvil;
		this.#getPowerFrom = config.getPowerFrom;
	}

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.#name,
			power: opponent.getPower(),
		});
	}

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consume(opponent);
		}
	}

	getPower(): number {
		let power = 0;
		for (const opponent of this.#consumed) {
			power += this.#getPowerFrom(opponent);
		}
		power += this.#consumed.length;
		return power;
	}
}

export function createDemon(): Horror {
	return new Horror({
		name: "Demon",
		isEvil: () => true,
		getPowerFrom: (opponent: Consumed): number => {
			if (opponent.evil) {
				return opponent.power / 2;
			} else {
				return opponent.power * 2;
			}
		},
	});
}

export function createSorcerer(name: string, evil: boolean) {
	return new Horror({
		name,
		isEvil: () => evil,
		getPowerFrom: (opponent: Consumed): number => {
			if (opponent.evil === evil) {
				return opponent.power * 2;
			} else {
				return opponent.power;
			}
		},
	});
}
