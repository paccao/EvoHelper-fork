export const enum EvoRarity {
  'COMMON' = 1,
  'UNCOMMON' = 2,
  'RARE' = 3,
  'EPIC' = 4,
  'LEGENDARY' = 5,
  'GODLY' = 6,
  'MYTHIC' = 7,
  'FORGED' = 8,
}
export const evoRarity = {
  [EvoRarity.COMMON]: {
    id: EvoRarity.COMMON,
    name: 'Common',
    color: '#999999',
  },
  [EvoRarity.UNCOMMON]: {
    id: EvoRarity.UNCOMMON,
    name: 'Uncommon',
    color: '#00FF00',
  },
  [EvoRarity.RARE]: {
    id: EvoRarity.RARE,
    name: 'Rare',
    color: '#4A86E8',
  },
  [EvoRarity.EPIC]: {
    id: EvoRarity.EPIC,
    name: 'Epic',
    color: '#9900FF',
  },
  [EvoRarity.LEGENDARY]: {
    id: EvoRarity.LEGENDARY,
    name: 'Legendary',
    color: '#FF0000',
  },
  [EvoRarity.GODLY]: {
    id: EvoRarity.GODLY,
    name: 'Godly',
    color: '#FFFF00',
  },
  [EvoRarity.MYTHIC]: {
    id: EvoRarity.MYTHIC,
    name: 'Mythic',
    color: '#EE82EE',
  },
  [EvoRarity.FORGED]: {
    id: EvoRarity.FORGED,
    name: 'Forged',
    color: '#8B4513',
  },
};
