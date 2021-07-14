import BaseModel from './ BaseModel';

export class Inventory extends BaseModel {
	id!: number;
	characterId!: number;
	equipmentId!: number;
	quantity!: number;

	static get tableName() {
		return 'character_inventory_item';
	}
}
