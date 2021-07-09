import { api } from '..';
import { Background } from '../types';

export const Noble: Background = {
	name: 'Noble',
	description:
		'You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them. Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn’t stand on its own—it’s connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you.Is your family old and established, or was your title only recently bestowed? How much influence do they wield, and over what area? What kind of reputation does your family have among the other aristocrats of the region? How do the common people regard them? What’s your position in the family? Are you the heir to the head of the family? Have you already inherited the title? How do you feel about that responsibility? Or are you so far down the line of inheritance that no one cares what you do, as long as you don’t embarrass the family? How does the head of your family feel about your adventuring career? Are you in your family’s good graces, or shunned by the rest of your family? Does your family have a coat of arms? An insignia you might wear on a signet ring? Particular colors you wear all the time? An animal you regard as a symbol of your line or even a spiritual member of the family',
	proficiencies: [38, 39],
	backgroundFeatures: [api.getBackgroundFeature(4)],
	languageAdditions: { choose: 1, from: api.getLanguages() },
	traitsSelection: {
		traits: {
			roll: { sides: 8, amount: 1 },
			selections: api.getPersonalCharacteristics([
				79, 81, 82, 83, 84, 85, 86
			])
		},
		ideals: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([87, 88, 89, 90, 91, 92])
		},
		flaws: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([93, 94, 95, 96, 97, 98])
		},
		bonds: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([
				99, 100, 101, 102, 103, 104
			])
		}
	},
	proficencyAddition: {
		title: 'Choose an gaming set',
		choose: 1,
		from: api.getProficiencies([15, 16, 17, 18])
	}
};
