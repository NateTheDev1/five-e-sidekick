import { api } from '..';
import { Background } from '../types';

export const Soldier: Background = {
	name: 'Soldier',
	description:
		'War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war. When you choose this background, work with your DM to determine which military organization you were a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble’s or merchant’s private army, or a mercenary company.',
	proficiencies: [8, 42, 21],
	backgroundFeatures: [api.getBackgroundFeature(7)],
	languageAdditions: { choose: 0, from: [] },
	traitsSelection: {
		traits: {
			roll: { sides: 8, amount: 1 },
			selections: api.getPersonalCharacteristics([
				157, 158, 159, 160, 161, 162, 163, 164
			])
		},
		ideals: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				165, 166, 167, 168, 169, 170
			])
		},
		flaws: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				171, 172, 173, 174, 175, 176
			])
		},
		bonds: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				177, 178, 179, 180, 181, 182
			])
		}
	},
	proficencyAddition: {
		title: 'Choose a gaming set',
		choose: 1,
		from: api.getProficiencies([15, 16, 17, 18])
	}
};
