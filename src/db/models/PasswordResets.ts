import BaseModel from './ BaseModel';

export class PasswordResets extends BaseModel {
	id!: number;
	forEmail!: string;
	code!: string;

	static get tableName() {
		return 'user_password_resets';
	}
}
