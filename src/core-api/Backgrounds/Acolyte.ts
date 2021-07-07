import { api } from '..';
import { Background } from '../types';

export const Acolyte: Background = {
	name: 'Acolyte',
	description:
		'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power. Choose a god, a pantheon of gods, or some other quasi-divine being, and work with your DM to detail the nature of your religious service. The Gods of the Multiverse section contains a sample pantheon, from the Forgotten Realms setting. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny.',
	proficiencies: [10, 11],
	backgroundFeatures: [api.getBackgroundFeature(1)],
	languageAdditions: { choose: 2, from: api.getLanguages() },
	traitsSelection: {
		traits: {
			roll: { sides: 8, amount: 1 },
			selections: api.getPersonalCharacteristics([1, 2, 3, 4, 5, 6, 7, 8])
		},
		ideals: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([9, 10, 11, 12, 13, 14])
		},
		flaws: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([15, 16, 17, 18, 19, 20])
		},
		bonds: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([21, 22, 23, 24, 25, 26])
		}
	},
	proficencyAddition: { title: '', choose: 0, from: [] }
};
