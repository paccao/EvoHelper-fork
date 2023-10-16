import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { lightBlue } from '@mui/material/colors';
import { evoRarity } from './rarity';
import { EvoItem } from './items';
import { evoItemRestrictions } from './restrictions';

const ItemCard: FC<{ item: EvoItem }> = (props) => {
  const { item } = props;
  const { color } = evoRarity[item.rarity];
  return (
    <>
      <Typography variant="subtitle2" color={color}>
        {item.id}
      </Typography>
      <Divider />
      <Typography variant="subtitle1" color={lightBlue[300]}>
        {evoItemRestrictions[item.restriction]}
      </Typography>
      {item.description && (
        <Typography variant="body2">{item.description}</Typography>
      )}
      {item.description && item.effects.length > 0 && <Divider />}
      {item.effects.map((effect, index) => (
        <Typography key={effect + index} variant="body1">
          {effect}
        </Typography>
      ))}
    </>
  );
};

export default ItemCard;
