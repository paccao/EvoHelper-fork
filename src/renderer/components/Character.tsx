import { FC, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useCharacterContext } from '../../context';
import { EvoStash } from './Stash';
import { DependencyObj, getItemArrFlatDependenciesObject } from '../util/crafting';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { ItemIconAndTitle } from './Item';
import { evoItems } from '../../constants/items';
import { lightBlue } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export const Character: FC = () => {
  const { getCharacterById, onLoadClick } = useCharacterContext();
  const { id } = useParams();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };
  const character = getCharacterById(id);
  const [missingForGodly, _] = useMemo (() => {
    if (!character) {
      return [{ }, []] as [DependencyObj, string[]];
    } else {
      return getItemArrFlatDependenciesObject(
        ['Twilight', 'Eve'],
        [...character.inventory, ...character.stashes.flat()]
      )
    }
  }, [character]);

  if (!character) {
    return null;
  }

  return (
    <div>
      <Typography variant="h6">
        {character.hero} {character.level && ` - ${character.level} level`}
      </Typography>
      <Typography variant="caption">Gold: {character.gold}</Typography>
      <br />
      <Typography variant="caption">
        PowerShards: {character.powerShards}
      </Typography>
      <Grid container>
        <Grid item sx={{ marginRight: '20px' }}>
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

      <Divider sx={{ marginTop: '10px', marginBottom: '10px' }}/>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography>Godly progress</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {
          Object.keys(missingForGodly).map((key) => {
            return (
              <MissingItem id={key} amount={missingForGodly[key]} key={key} />
            );
          })
        }
      </Collapse>
      <Divider sx={{ marginTop: '10px', marginBottom: '10px' }}/>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          onClick={() => onLoadClick(character)}
        >
          Load
        </Button>
        <Tooltip
          sx={{ marginLeft: '15px'}}
          title={
          <Box>
            <Typography variant="body2">Press Load - it will set hotkey for A button.</Typography>
            <Typography variant="body2">Head to wc3 and press A.</Typography>
            <Typography variant="body2">Let it do its thing.</Typography>
            <Typography variant="caption">
              Tip: remember to turn off caps lock and switch to English
            </Typography>
        </Box>
        }>
          <InfoIcon color="primary"/>
        </Tooltip>
      </Box>
    </div>
  );
};

function MissingItem(props: {id: string, amount: number}) {
  const { id, amount } = props;
  const item = evoItems[id as keyof typeof evoItems];

  if (!item) {
    return (
      <Typography>
        {amount} x {id}
      </Typography>
    );
  }
  return (
    <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between'}}>
     <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
       <Typography sx={{ width: '30px'}}>{amount}  </Typography>
      <ItemIconAndTitle item={item} />
      </Box>
      { item.sourceShort && <Typography variant="body2" sx={{ color: lightBlue[300] }}>{item.sourceShort}</Typography> }
    </Box>
  )
}