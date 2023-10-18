import { weaponsMasterItems } from './forging/weaponsMaster';
import { armorsmithItems } from './merchants/armorsmith';
import { icyHighlandItems } from './easy/icyHighland';
import { hell4Items } from './hell/hell4';
import { imp1Items } from './imp/imp1';
import { angelCloudsItems } from './forging/angelClouds';
import { weaponsDealerItems } from './merchants/weaponsDealer';
import { imp2Items } from './imp/imp2';
import { magicWizardItems } from './forging/magicWizard';
import { ancientSoulItems } from './forging/ancientSoul';
import { bobBuilderItems } from './forging/bobBuilder';
import { hell3Items } from './hell/hell3';
import { hell2Items } from './hell/hell2';
import { hell1Items } from './hell/hell1';
import { nagaItems } from './nightmare/naga';
import { sewersItems } from './nightmare/sewers';
import { goldmineItems } from './hard/goldmine';
import { centaurItems } from './hard/centaur';
import { puzzleItems } from './hard/puzzle';
import { imp3Items } from './imp/imp3';
import { fragmentedSoul } from './merchants/fragmentedSoul';
import { ancientSoul } from './merchants/ancientSoul';
import { banditLordItems } from './merchants/banditLord';
import { pieces } from './forging/pieces';
import { angelNature } from './forging/angelNature';
import { angelSunItems } from './forging/angelSun';
import { mysteryItems } from './merchants/mystery';
import { flameItems } from './forging/flame';
import { godlyItems } from './forging/godly';

export const evoItems = {
  ...pieces,
  // vendors
  ...weaponsDealerItems,
  ...armorsmithItems,
  ...fragmentedSoul,
  ...ancientSoul,
  ...banditLordItems,

  ...weaponsMasterItems,
  ...ancientSoulItems,
  ...bobBuilderItems,
  ...magicWizardItems,
  ...angelCloudsItems,
  ...angelNature,
  ...angelSunItems,
  ...mysteryItems,
  ...flameItems,
  ...godlyItems,
  //
  ...icyHighlandItems,

  ...goldmineItems,
  ...centaurItems,
  ...puzzleItems,

  ...nagaItems,
  ...sewersItems,
  ...hell1Items,
  ...hell2Items,
  ...hell3Items,
  ...hell4Items,
  ...imp1Items,
  ...imp2Items,
  ...imp3Items,
};
