import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Class } from '../../main/maps/evo/load';
import { useCharacterContext } from '../../context';
import { EvoStash } from './Stash';
import { Button } from '@mui/material';

interface CharacterCardProps {
  character: Class;
}
export function CharacterCard({ character }: CharacterCardProps) {
  const navigate = useNavigate();
  const { onLoadClick } = useCharacterContext();
  return (
    <Box sx={{ padding: '10px' }}>
      <Card sx={{ width: 280, padding: '15px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '10px'
          }}
        >
          <Typography
            onClick={() => {
              navigate(`/character/${character.hero}`);
            }}
            sx={{ cursor: 'pointer' }}
            variant="body1"
          >
            {character.hero}
          </Typography>
          <Typography variant="body2">{character.level} lvl</Typography>
        </Box>
        <Box sx={{ paddingBottom: '10px' }}>
          <EvoStash
            sx={{ display: 'flex', flexDirection: 'row', gap: '2px' }}
            itemIds={character.inventory}
          />
        </Box>
        <Box  sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Button variant="contained" onClick={() => onLoadClick(character)}>
            Load
          </Button>
          <Button onClick={() => {
            navigate(`/character/${character.hero}`);
          }}>
            Details
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
