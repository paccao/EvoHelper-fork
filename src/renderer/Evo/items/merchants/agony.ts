import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const agonyItems: { [id: string]: EvoItem } = {
  "Agony": {
    id: "Agony",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'BTNGreenHydra',
    description: 'The head of the Leviathan.',
    effects: [],
    source: 'Agony merchant',
  },
  "Blessing of Agony": {
    id: "Blessing of Agony",
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.FORGED,
    icon: 'BTNGreenHydra',
    description: 'The head of the Leviathan.',
    effects: [],
    crafting: [
      'Essence of Nightmare',
      'Essence of Hell',
      'Fire Rising',
      'Agony',
    ],
    source: 'Agony merchant',
  },
}