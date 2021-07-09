import { logger } from '../../utils/logger';

/**
 * @description Primary function is to add ids to object arrays
 */
export class AddID {
	private max = 0;
	private count: number = 0;
	private next: number = 1;

	public addIdToObjects(objs: any[]) {
		this.max = objs.length;

		let newArr: any[] = [];
		for (let i = 0; i < this.max; i++) {
			const newObj = { id: this.next, ...objs[i] };
			this.next++;
			this.count++;
			newArr.push(newObj);
			logger.info(this.getPercentage(this.count, this.max));
		}

		console.log(newArr);
	}

	/**
	 *
	 * @param num Current number
	 * @param target Target to get to
	 * @returns string representing percent done
	 */
	public getPercentage(num: number, target: number): string {
		return ((100 * num) / target).toFixed() + '%';
	}
}

export const addID = new AddID();

addID.addIdToObjects([]);
