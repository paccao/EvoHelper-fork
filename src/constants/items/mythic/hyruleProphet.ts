import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const hyruleProphetItems: { [id: string]: EvoItem } = {
  'Angelic Hope': {
    id: 'Angelic Hope',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.MYTHIC,
    icon: 'AngelicHope',
    description:
      "The rise of the archangels.",
    effects: [],
    source: 'Cursed Heaven',
  },
  'Angelic Heart': {
    id: 'Angelic Heart',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.MYTHIC,
    icon: 'AngelicHeart',
    description:
      "The heart of divine.",
    effects: [],
    source: 'Cursed Heaven',
  },
  "Harbinger's Heart": {
    id: "Harbinger's Heart",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.MYTHIC,
    icon: 'HarbingersHeart',
    description:
      "The pure essence of Harbinger, his heart itself.",
    effects: [],
    source: 'Cursed Heaven',
  },
}