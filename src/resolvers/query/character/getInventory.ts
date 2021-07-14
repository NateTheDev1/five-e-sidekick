import { Inventory } from '../../../db/models/Inventory';

export const getInventory: Resolvers.QueryResolvers['getInventory'] = async (
	parent,
	args,
	context: Services.ServerContext
) => {
	const inventory = await Inventory.query()
		.where({
			characterId: args.characterId
		})
		.first();

	return inventory;
};
