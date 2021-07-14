/**
 * @description Dice class that includes methods to roll different dice configurations
 */
export class Dice {
	/**
	 * @description rolls a d6 dice
	 * @returns number
	 */
	public static d6(): number {
		return Math.floor(Math.random() * 6) + 1;
	}

	/**
	 *
	 * @param sides the number of sides the dice should have
	 * @returns number
	 */
	public static dx(sides: number): number {
		return Math.floor(Math.random() * sides) + 1;
	}

	/**
	 *
	 * @param sides the number of sides the dice should have
	 * @param amount the amount of dice to roll
	 * @returns an array of the numbers rolled
	 */
	public static dxMultiple(sides: number, amount: number): number[] {
		const rolls: number[] = [];

		for (let i = 0; i < amount; i++) {
			rolls.push(this.dx(sides));
		}

		return rolls;
	}

	/**
	 * @description Rolls `4` d6 dice, adds the highest `3` and returns a stat roll
	 * @returns number
	 */
	public static rollForStat(): number {
		let diceArray = [...new Array(4)]
			.map(() => this.d6())
			.sort((a, b) => a - b)
			.reverse();
		diceArray.pop();
		return diceArray.reduce((a, b) => a + b, 0);
	}

	/**
	 * @description Rolls all `rollForStat` functions at once
	 * @returns number array with 6 elements
	 */
	public static rollAllStats(): number[] {
		const stats = [];

		for (let i = 0; i < 6; i++) {
			stats.push(this.rollForStat());
		}

		return stats;
	}
}
