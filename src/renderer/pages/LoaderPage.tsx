import Box from '@mui/material/Box';
import { useCharacterContext } from '../../context';
import { CharacterCard } from '../components/CharacterCard';
import { useSettingsContext } from '../../settingsContext';
import { useMemo } from 'react';
import { tier4Classes } from '../../constants/classes';
import Divider from '@mui/material/Divider';

export function LoaderPage() {
  const { allClasses } = useCharacterContext();
  const { onlyT4Classes, favouriteClasses } = useSettingsContext();

  const favouriteClassList = useMemo(() => {
    return allClasses.filter((character) => {
        const filteredByT4 = onlyT4Classes && !tier4Classes.includes(character.hero);
        const isFavourite = favouriteClasses.includes(character.hero);
        return isFavourite && !filteredByT4
      }
    );
  }, [allClasses, onlyT4Classes, favouriteClasses]);

  const restClassesList = useMemo(() => {
    return allClasses.filter((character) => {
        const filteredByT4 = onlyT4Classes && !tier4Classes.includes(character.hero);
        const isFavourite = favouriteClasses.includes(character.hero);
        return !isFavourite && !filteredByT4
      }
    );
    }, [allClasses, onlyT4Classes, favouriteClasses]
  )

  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', paddingBottom: '30px' }}>
        {favouriteClassList.map((character) => (
          <CharacterCard
            key={`${character.hero}_${character.level}`}
            character={character}
            favourite={true}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {restClassesList.map((character) => (
          <CharacterCard
            key={`${character.hero}_${character.level}`}
            character={character}
          />
        ))}
      </Box>
    </Box>
  );
}
