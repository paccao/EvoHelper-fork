import { FC } from 'react';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useCharacterContext } from '../../context';
import { EvoStash } from './Stash';

export const Character: FC = () => {
  const { getCharacterById, onLoadClick } = useCharacterContext();
  const { id } = useParams();

  const character = getCharacterById(id);
  if (!character) {
    return null;
  }

  return (
    <div>
      <h3>
        {character.hero} {character.level && ` - ${character.level} level`}
      </h3>
      <h5>Gold: {character.gold}</h5>
      <h5>PowerShards: {character.powerShards}</h5>
      <Grid container>
        <Grid
          item
          sx={{
            marginRight: '20px',
          }}
        >
          <EvoStash itemIds={character.inventory} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[0]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[1]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[2]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[3]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[4]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[5]} />
        </Grid>
      </Grid>

      <Divider />
      <Typography>
        Press load, it will set hotkey for A button. Head to wc3 and press A.
        Let it do its thing.
      </Typography>
      <Button onClick={() => onLoadClick(character)}>Load</Button>
    </div>
  );
};
