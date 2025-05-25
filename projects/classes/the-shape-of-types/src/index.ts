// Write your classes here! ✨
// You'll need to export them so the tests can run them.

interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	#consumed: Consumed[] = [];

	protected abstract readonly name: string;

	protected abstract getPowerFrom(opponent: Consumed): number;

	protected abstract isEvil(): boolean;

	doBattle(opponent: Horror) {
		if (this.getPower() >= opponent.getPower()) {
			this.#consumed.push({
				evil: opponent.isEvil(),
				name: opponent.name,
				power: opponent.getPower(),
			});
		}
	}

	getPower(): number {
		let power = 0;
		for (const opponent of this.#consumed) {
			power += this.getPowerFrom(opponent);
		}
		power += this.#consumed.length;
		return power;
	}
}

export class Demon extends Horror {
	protected readonly name: string = "Demon";

	protected isEvil(): boolean {
		return true;
	}

	protected getPowerFrom(opponent: Consumed): number {
		if (opponent.evil) {
			return opponent.power / 2;
		} else {
			return opponent.power * 2;
		}
	}
}

export class Sorcerer extends Horror {
	#evil: boolean;

	constructor(protected readonly name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}

	protected isEvil(): boolean {
		return this.#evil;
	}

	protected getPowerFrom(opponent: Consumed): number {
		if (opponent.evil === this.#evil) {
			return opponent.power * 2;
		} else {
			return opponent.power;
		}
	}
}
