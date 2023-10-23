import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../item';

export const angelSunItems: { [id: string]: EvoItem } = {
  'Legend of Freya': {
    id: 'Legend of Freya',
    restriction: EvoItemRestictions.HIGH_TEMPLAR,
    rarity: EvoRarity.FORGED,
    icon: 'LegendOfFreya',
    description:
      'Written by Freya of the High Templar Council, this sacred scripture unveils the mysterious nights.',
    effects: [
      '+1200 Intelligence',
      '+10% Cooldown Reduction',
      'Active: Reset all basic abilities cooldowns',
    ],
    crafting: ["Atlantean's Tome", 'Mystery', 'Draconic Trinity'],
    source: 'Angel of Sun',
  },
  'Book of Hylia': {
    id: 'Book of Hylia',
    restriction: EvoItemRestictions.AC_CA_FA,
    rarity: EvoRarity.FORGED,
    icon: 'BookOfHylia',
    description:
      'The book of the Goddess Hylia herself that contains all the secrets and mysteries of all Gods and Goddesses alike.',
    effects: [
      '+900 Intelligence',
      '5000 Mana',
      '+10% Cooldown Reduction',
      '+5% Heal Power',
      'Active: Heals the target for [10 000 + 50% Int + 25% missing HP] and grants 400 Armor for 2.5 seconds. Cooldown 30s.',
    ],
    crafting: [
      "Atlantean's Tome",
      'Ocean Fragment',
      'Sapphire',
      'Mantle of Darkness',
      'Mythical Handle Piece',
      'Draconic Trinity',
    ],
    source: 'Angel of Sun',
  },
  Soulshot: {
    id: 'Soulshot',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.FORGED,
    icon: 'Soulshot',
    description:
      'The arrow of the fabled Angel Slayer. Its power comes from the pure corruption found in the essence of the legendary Lord of Darkness.',
    effects: [
      '+4000 Damage',
      '+20% Attack speed',
      '+20% Bonus damage',
      'Passive: Third basic attack deals [7000 + 35% Agi] Pure Damage in an AOE and reduces armor by 15 for 1.5 seconds. Deals 250% against non-bosses.',
    ],
    crafting: [
      'Faith',
      'Lavender Fragment',
      'Amethyst',
      'Sealed Demise',
      'Mythical Weapon Piece',
      'Draconic Trinity',
    ],
    source: 'Angel of Sun',
  },
  'Legendary Dragon Orb': {
    id: 'Legendary Dragon Orb',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'LegendaryDragonOrb',
    description:
      'Infused with the powers of the four elemental dragons, this orb is regarded as the origin of all elements.',
    effects: ['+450 All stats', '+15% Cooldown reduction'],
    crafting: [
      'Glow Orb',
      'Ocean Fragment',
      'Blood Fragment',
      'Sealed Demise',
      "Harbinger's Essence",
      'Draconic Trinity',
    ],
    source: 'Angel of Sun',
  },
  'Cruel Blade': {
    id: 'Cruel Blade',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.FORGED,
    icon: 'CruelBlade',
    description:
      'Revered as the blade of the tyrant, wielding it grants insurmountable power.',
    effects: ['+5200 Damage', 'Passive: 75% chance to deal 3x Physical Damage'],
    crafting: [
      'The Patriarch',
      'Lavender Fragment',
      'Amethyst',
      'Mythical Weapon Piece',
      'Mythical Handle Piece',
      'Draconic Trinity',
    ],
    source: 'Angel of Sun',
  },
  'Cursed Blade': {
    id: 'Cursed Blade',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.FORGED,
    icon: 'CursedBlade',
    description:
      'The fabled Dragon Slayer blade that is tainted with the pure energy of darkness that curses whoever touches it, granting unmatched insanity.',
    effects: [
      '+3600 Damage',
      '+600 Agility',
      'Passive: Increase Physical Damage up to 12% based on Current MP',
    ],
    crafting: [
      'Moonfang',
      'Cursed Artifact',
      'Sealed Demise',
      'Mythical Weapon Piece',
      'Mythical Handle Piece',
      'Draconic Trinity',
    ],
    source: 'Angel of Sun',
  },
  'Starlight Crystal': {
    id: 'Starlight Crystal',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: 'StarlightCrystal',
    description:
      'By synthesizing the power of the elements to the Corrupted Crystal, it envelops the wielder with great regenerative energies.',
    effects: [
      '+17 500 Health',
      '+0.25% Health Regeneration',
      '+35% Spell Resistance',
    ],
    crafting: [
      'Corrupted Crystal',
      'Golden Fragment',
      'Diamond',
      'Mythical Armor Piece',
      'Draconic Trinity',
    ],
    source: 'Angel of Sun',
  },
  'Blinding Light of Destiny': {
    id: 'Blinding Light of Destiny',
    restriction: EvoItemRestictions.TANK,
    rarity: EvoRarity.FORGED,
    icon: 'BlindingLightOfDestiny',
    description:
      'The axe of the legendary Undead Slayer, Artix. Purified with thousands of spirit orbs and the enchanted with the spirit of the light, only the most tenacious of heroes can wield this axe.',
    effects: [
      '+2000 Damage',
      '+250 Armor',
      'Active: Blinds all nearby enemies for 2.5 seconds. Cooldown 55s.',
    ],
    crafting: [
      'The Grandfather',
      'Diamond',
      'Mythical Weapon Piece',
      'Mythical Handle Piece',
      'Mythical Armor Piece',
      'Draconic Trinity',
    ],
    source: 'Angel of Sun',
  },
  'Dragonforge Plate': {
    id: 'Dragonforge Plate',
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.FORGED,
    icon: 'DragonforgePlate',
    description:
      'Fortified with the scales of the dragon, the plate protects the wearer and strengthens combat endurance.',
    effects: [
      '+350 Armor',
      'Passive: Reduces Damage Taken from Attacks by 12.5%.',
    ],
    crafting: [
      'Darkforge Plate',
      'Diamond',
      'Sealed Demise',
      'Mythical Armor Piece',
      'Draconic Trinity',
    ],
    source: 'Angel of Sun',
  },
};
