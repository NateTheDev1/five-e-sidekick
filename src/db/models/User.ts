import BaseModel from './ BaseModel';

class User extends BaseModel {
	id!: number;
	name!: string;
	email!: string;
	password!: string;
	createdAt!: string;

	static get tableName() {
		return 'users';
	}
}

export default User;
