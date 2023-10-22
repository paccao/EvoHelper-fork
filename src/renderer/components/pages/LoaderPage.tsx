import Box from '@mui/material/Box';
import { useCharacterContext } from '../../../context';
import { CharacterCard } from '../CharacterCard';
import { useSettingsContext } from '../../../settingsContext';
import { useMemo } from 'react';
import { tier4Classes } from '../../../constants/evo/classes';

export function LoaderPage() {
  const { allClasses } = useCharacterContext();
  const { onlyT4Classes } = useSettingsContext();

  const classesMenu = useMemo(() => {
    if (!onlyT4Classes) return allClasses;
    return allClasses.filter((character) =>
      tier4Classes.includes(character.hero),
    );
  }, [allClasses, onlyT4Classes]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {classesMenu.map((character) => (
        <CharacterCard
          key={`${character.hero}_${character.level}`}
          character={character}
        />
      ))}
    </Box>
  );
}
