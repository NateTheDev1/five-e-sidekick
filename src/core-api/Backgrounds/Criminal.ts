import { api } from '..';
import { Background } from '../types';

export const Criminal: Background = {
	name: 'Criminal',
	description:
		'You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.',
	proficiencies: [12, 13, 14],
	backgroundFeatures: [api.getBackgroundFeature(2)],
	languageAdditions: { choose: 0, from: [] },
	traitsSelection: {
		traits: {
			roll: { sides: 8, amount: 1 },
			selections: api.getPersonalCharacteristics([
				27, 28, 29, 30, 31, 32, 33, 34
			])
		},
		ideals: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([35, 36, 37, 38, 39, 40])
		},
		flaws: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([])
		},
		bonds: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([])
		}
	},
	proficencyAddition: {
		title: 'Choose a gaming set',
		choose: 1,
		from: api.getProficiencies([15, 16, 17, 18])
	}
};

// 		this.bondsSelection = {
// 			roll: {
// 				amount: 1,
// 				sides: 6
// 			},
// 			selections: [
// 				{
// 					id: 0,
// 					text: "I'm trying to pay off an old debt I owe to a generous benefactor."
// 				},
// 				{ id: 1, text: 'My ill-gotten gains go to support my family.' },
// 				{
// 					id: 2,
// 					text: 'Something important was taken from me, and I aim to steal it back.'
// 				},
// 				{
// 					id: 3,
// 					text: 'I will become the greatest thief that ever lived.'
// 				},
// 				{
// 					id: 4,
// 					text: "I'm guilty of a terrible crime. I hope I can redeem myself for it."
// 				},
// 				{
// 					id: 5,
// 					text: 'Someone I loved died because of a mistake I made. That will never happen again.'
// 				}
// 			]
// 		};
// 		this.flawsSelection = {
// 			roll: {
// 				amount: 1,
// 				sides: 6
// 			},
// 			selections: [
// 				{
// 					id: 0,
// 					text: "When I see something valuable, I can't think about anything but how to steal it."
// 				},
// 				{
// 					id: 1,
// 					text: 'When faced with a choice between money and my friends, I usually choose the money.'
// 				},
// 				{
// 					id: 2,
// 					text: "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it."
// 				},
// 				{ id: 3, text: "I have a 'tell' that reveals when I'm lying." },
// 				{ id: 4, text: 'I turn tail and run when things go bad.' },
// 				{
// 					id: 5,
// 					text: "An innocent person is in prison for a crime that I committed. I'm okay with that."
// 				}
// 			]
// 		};
// 	}
// }
