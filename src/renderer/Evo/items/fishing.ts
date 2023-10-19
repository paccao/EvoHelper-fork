import { EvoItem } from './item';
import { EvoItemRestictions } from '../restrictions';
import { EvoRarity } from '../rarity';

export const fishingItems: { [id: string]: EvoItem } = {
  'Basic Fishing Rod': {
    id: 'Basic Fishing Rod',
    restriction: EvoItemRestictions.PROFESSION,
    rarity: EvoRarity.COMMON,
    icon: 'BasicFishingRod',
    description:
      'A very basic fishing rod used to catch small fishes. Usable only in the lowest level fishing area.',
    effects: [],
    source: 'Fishing',
  },
  'Good Fishing Rod': {
    id: 'Good Fishing Rod',
    restriction: EvoItemRestictions.PROFESSION,
    rarity: EvoRarity.UNCOMMON,
    icon: 'GoodFishingRod',
    description:
      'A good fishing rod designed for catching average sized fishes. Although sturdy, it lacks the strength to withstand extremely strong fish tugs. Usable in the second lowest and lowest fishing spots.',
    effects: [],
    source: 'Fishing',
  },
  'Silver Fishing Rod': {
    id: 'Basic Fishing Rod',
    restriction: EvoItemRestictions.PROFESSION,
    rarity: EvoRarity.RARE,
    icon: 'SilverFishingRod',
    description:
      'A silver fishing rod made to withstand the sheer force of fish bites and tugs. Usable in all fishing from spots from mid level to the lowest level.',
    effects: [],
    source: 'Fishing',
  },
  'Mystic Fishing Rod': {
    id: 'Mystic Fishing Rod',
    restriction: EvoItemRestictions.PROFESSION,
    rarity: EvoRarity.EPIC,
    icon: 'MysticFishingRod',
    description:
      'A powerful mystical fishing rod designed and enchanted primarily to catch monster fishes. Although it does not guarantee a catch, it is still a very powerful tool. Usable in all fishing spots except the highest level.',
    effects: [],
    source: 'Fishing',
  },
  'Mastercraft Fishing Rod': {
    id: 'Mastercraft Fishing Rod',
    restriction: EvoItemRestictions.PROFESSION,
    rarity: EvoRarity.LEGENDARY,
    icon: 'MastercraftFishingRod',
    description:
      'A fishing rod designed by the famous Fisherman Frank himself, who single handedly caught 3 Flying Wish Fishes in one perfect swoop. Its grip and balance is so perfect it can prove to be a "Fisherman\'s friend" in the right hands. Usable in ALL fishing spots.',
    effects: [],
    source: 'Fishing',
  },
};
