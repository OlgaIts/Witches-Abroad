import { v4 as uuidv4 } from 'uuid';

export interface ListItemI {
  id: string | number;
  text: string;
}

// Card 1 - Anti-Bore-Filtrum
export const antiBoreFiltrumIngredients = [
  { id: uuidv4(), text: '1 dried root of Not-My-Problemus' },
  { id: uuidv4(), text: '3 drops of morning patience (the rarest kind)' },
  { id: uuidv4(), text: 'A pinch of aged sarcasm (the dryer, the better)' },
  { id: uuidv4(), text: 'A crumb of conversations that went nowhere' },
  { id: uuidv4(), text: '1 mint wrapper (symbol of fake politeness)' },
  {
    id: uuidv4(),
    text: 'A half-smile stretched to one ear (optional but stylish)',
  },
];

export const antiBoreFiltrumPreparation = [
  {
    id: 1,
    text: 'Start with a loud yawn - it activates the root`s passive-aggressive oils.',
  },
  {
    id: 2,
    text: 'Boil everything in a cauldron until it gives off steam that says: "How long is this going to take?"',
  },
  { id: 3, text: 'Do NOT taste - the effect kicks in on scent alone.' },
  {
    id: 4,
    text: 'Apply gently to ears or eyes, depending on the bore`s method of attack.',
  },
];

export const antiBoreFiltrumSideEffects = [
  {
    id: uuidv4(),
    text: 'You`ll start saying "mm-hmm" so convincingly, the bore will leave believing you agreed with everything.',
  },
  {
    id: uuidv4(),
    text: 'In extreme cases, turns you completely invisible to people who say "fun fact" before every sentence.',
  },
];

// Card 2 - The Tea of Subtle Judgment
