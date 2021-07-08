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
			selections: api.getPersonalCharacteristics([])
		},
		ideals: {
			roll: { sides: 6, amount: 1 },
			selections: api.getPersonalCharacteristics([])
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
		title: 'Choose an gaming set',
		choose: 1,
		from: api.getProficiencies([15, 16, 17, 18])
	}
};

// 		this.traitsSelection = {
// 			roll: {
// 				amount: 1,
// 				sides: 8
// 			},
// 			selections: [
// 				{
// 					id: 0,
// 					text: 'My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.'
// 				},
// 				{
// 					id: 1,
// 					text: 'The common folk love me for my kindness and generosity.'
// 				},
// 				{
// 					id: 2,
// 					text: 'No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.'
// 				},
// 				{
// 					id: 3,
// 					text: 'I take great pains to always look my best and follow the latest fashions.'
// 				},
// 				{
// 					id: 4,
// 					text: "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations."
// 				},
// 				{
// 					id: 5,
// 					text: 'Despite my birth, I do not place myself above other folk. We all have the same blood.'
// 				},
// 				{ id: 6, text: 'My favor, once lost, is lost forever.' },
// 				{
// 					id: 7,
// 					text: 'If you do me an injury, I will crush you, ruin your name, and salt your fields.'
// 				}
// 			]
// 		};
// 		this.idealsSelection = {
// 			roll: {
// 				amount: 1,
// 				sides: 6
// 			},
// 			selections: [
// 				{
// 					id: 0,
// 					text: 'Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)'
// 				},
// 				{
// 					id: 1,
// 					text: 'Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)'
// 				},
// 				{
// 					id: 2,
// 					text: 'Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)'
// 				},
// 				{
// 					id: 3,
// 					text: 'Power. If I can attain more power, no one will tell me what to do. (Evil)'
// 				},
// 				{ id: 4, text: 'Family. Blood runs thicker than water. (Any)' },
// 				{
// 					id: 5,
// 					text: 'Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)'
// 				}
// 			]
// 		};

// 		this.bondsSelection = {
// 			roll: {
// 				amount: 1,
// 				sides: 6
// 			},
// 			selections: [
// 				{
// 					id: 0,
// 					text: 'I will face any challenge to win the approval of my family.'
// 				},
// 				{
// 					id: 1,
// 					text: "My house's alliance with another noble family must be sustained at all costs."
// 				},
// 				{
// 					id: 2,
// 					text: 'Nothing is more important that the other members of my family.'
// 				},
// 				{
// 					id: 3,
// 					text: 'I am in love with the heir of a family that my family despises.'
// 				},
// 				{ id: 4, text: 'My loyalty to my sovereign is unwavering.' },
// 				{
// 					id: 5,
// 					text: 'The common folk must see me as a hero of the people.'
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
// 					text: 'I secretly believe that everyone is beneath me.'
// 				},
// 				{
// 					id: 1,
// 					text: 'I hide a truly scandalous secret that could ruin my family forever.'
// 				},
// 				{
// 					id: 2,
// 					text: "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger."
// 				},
// 				{
// 					id: 3,
// 					text: 'I have an insatiable desire for carnal pleasures.'
// 				},
// 				{ id: 4, text: 'In fact, the world does revolve around me.' },
// 				{
// 					id: 5,
// 					text: 'By my words and actions, I often bring shame to my family.'
// 				}
// 			]
// 		};
// 	}
// }
