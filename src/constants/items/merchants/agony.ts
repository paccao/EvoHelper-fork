import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const agonyItems: { [id: string]: EvoItem } = {
  "Agony": {
    id: "Agony",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: 'Agony',
    description: 'The head of the Leviathan.',
    effects: [],
    source: 'Agony merchant',
    sourceShort: '2M gold, 2k shards'
  },
  "Blessing of Agony": {
    id: "Blessing of Agony",
    restriction: EvoItemRestictions.ULTIMATE_FORGE,
    rarity: EvoRarity.FORGED,
    icon: 'BlessingOfAgony',
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