import { EvoItem } from '../item';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const banditLordItems: { [id: string]: EvoItem } = {
  'Flag of Triumph': {
    id: 'Flag of Triumph',
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.UNCOMMON,
    icon: 'FlagOfTriumph',
    description: 'The flag of victorious human empire.',
    effects: ['+2500 Health'],
    source: 'Bandit Lord',
  },
  Hyperstone: {
    id: 'Hyperstone',
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.UNCOMMON,
    icon: 'Hyperstone',
    description:
      'A stolen artifact that originally was hidden in the dark forest.',
    effects: ['+250 Damage'],
    source: 'Bandit Lord',
  },
  'Plated Steel': {
    id: 'Plated Steel',
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.UNCOMMON,
    icon: 'PlatedSteel',
    description:
      'Crafted with tough steel, its design resembles a head of a dragon.',
    effects: ['+45 Armor'],
    source: 'Bandit Lord',
  },
  'Ocean Stone': {
    id: 'Ocean Stone',
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.UNCOMMON,
    icon: 'OceanStone',
    description: 'A stone found in the deep ocean.',
    effects: ['+200 Intelligence'],
    source: 'Bandit Lord',
  },
  'Medallion of Resilience': {
    id: 'Medallion of Resilience',
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.UNCOMMON,
    icon: 'MedallionOfResilience',
    description:
      'Stolen away by the bandits from the Silvasian Guards, this symbolazies courage and bravery.',
    effects: ['+40 Armor'],
    source: 'Bandit Lord',
  },
  Sentinel: {
    id: 'Sentinel',
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.UNCOMMON,
    icon: 'Sentinel',
    description:
      'The bow of the dusk that night elves used during the demonic invasion.',
    effects: ['+250 Damage'],
    source: 'Bandit Lord',
  },
  'Dreaded Claw': {
    id: 'Dreaded Claw',
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.UNCOMMON,
    icon: 'DreadedClaw',
    description: 'A sharp claw, used by hunters to take down enemies at night.',
    effects: ['+250 Damage'],
    source: 'Bandit Lord',
  },
};
