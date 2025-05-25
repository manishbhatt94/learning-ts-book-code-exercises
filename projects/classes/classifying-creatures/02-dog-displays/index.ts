// Write your class and interface here! ✨
// You'll need to export it so the tests can run it.

export interface PuppyInTheWindow {
	readonly colors: string[];
	readonly furriness: number;
	readonly owner: string | undefined;
}

export class Puppy implements PuppyInTheWindow {
	owner: string | undefined;

	constructor(public colors: string[], public furriness: number) {}

	adopt(owner: string) {
		this.owner = owner;
	}
}
