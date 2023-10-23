import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const forgottenCryptItems: { [id: string]: EvoItem } = {
  // Forgotten Crypt
  'Psi Blade': {
    id: 'Psi Blade',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.UNCOMMON,
    icon: 'BTNImprovedStrengthOfTheMoon',
    description:
      'This Psi Blade is filled with a great energy, increasing its damage.',
    effects: ['+45 Damage'],
    source: 'Forgotten Crypt',
  },
  'Reinforced Armor': {
    id: 'Reinforced Armor',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.UNCOMMON,
    icon: 'BTNLeatherUpgradeTwo',
    description:
      'This armor is reinforced to the point of degree that its protection potential is maximised.',
    effects: ['+18 Armor'],
    source: 'Forgotten Crypt',
  },
  "Stitches' Dagger": {
    id: "Stitches' Dagger",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.UNCOMMON,
    icon: 'BTNDaggerOfEscape',
    description:
      'This is one of the many remains left behind by Stitches, probably from some other traveler who met his dismal end facing this monstrous beast.',
    effects: ['+35 Damage'],
    source: 'Forgotten Crypt',
  },
  "Stitches' Totem": {
    id: "Stitches' Totem",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.UNCOMMON,
    icon: 'BTNAbomination',
    description:
      'This totem is actually Stitches head. It is ridiculously heavy, but spellcasters can use magic to resize it. Also, the protection it grants is pretty solid.',
    effects: ['+23 Armor'],
    source: 'Forgotten Crypt',
  },
  "Aiur's Legacy": {
    id: "Aiur's Legacy",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.RARE,
    icon: 'BTNAdvancedStrengthOfTheMoon',
    description:
      "Something about this blade tells its wielder that it comes from a different world, and it also tells of experiences gained over there, increasing the wielder's proficency in combat.",
    effects: ['+23 Armor'],
    source: 'Forgotten Crypt',
  },
  'Black Grave Wand': {
    id: 'Black Grave Wand',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: 'BTNRodOfNecromancy',
    description:
      'This wand was made from BlackGrave magic, and contains superior amounts of magic hidden within it.',
    effects: ['+45 Intelligence'],
    source: 'Forgotten Crypt',
  },
  'Skull Staff': {
    id: 'Skull Staff',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: 'BTNWitchDoctorMaster',
    description:
      'The skull etched at the top of the staff glimmers with an inner fire. It represents power and superiority in magic, and is often held by immensely powerful rogue mages.',
    effects: [' - Mana regen go brrrrrrrrrr'],
    source: 'Forgotten Crypt',
  },
  "Stitches' Legacy": {
    id: "Stitches' Legacy",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.RARE,
    icon: 'BTNSkeletalLongevity',
    description:
      'This wand was made from BlackGrave magic, and contains superior amounts of magic hidden within it.',
    effects: ['+50 Damage', '+10 Armor'],
    source: 'Forgotten Crypt',
  },
};
