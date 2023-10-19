import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import CachedIcon from '@mui/icons-material/Cached';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import Settings from './Settings';
import { Character } from './Evo/Character';
import theme from './theme';
import { useCharacterContext } from '../context';
import { tier4Classes } from '../constants/evo/classes';
import { useSettingsContext } from '../settingsContext';
import { Class } from '../main/maps/evo/load';

export default function App() {
  const { allClasses, loadClasses } = useCharacterContext();
  const { onlyT4Classes } = useSettingsContext();

  const classesMenu = useMemo(() => {
    if (!onlyT4Classes) return allClasses;
    return allClasses.filter((character) =>
      tier4Classes.includes(character.hero),
    );
  }, [allClasses, onlyT4Classes]);

  return (
    <Router initialEntries={['/settings']}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Box
            component="div"
            sx={{
              justifyContent: 'space-between',
              flexDirection: 'column',
              display: 'flex',
              width: 220,
              height: '100vh',
              position: 'relative',
            }}
          >
            <Box>
              <Box
                sx={{
                  height: '50px',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography>EvoLoader alpha</Typography>
                <IconButton onClick={loadClasses}>
                  <CachedIcon />
                </IconButton>
              </Box>
              <MenuList
                sx={{ overflowY: 'auto', height: 'calc(100vh - 90px)' }}
              >
                {classesMenu.map((character: Class) => (
                  <MenuItem
                    component={Link}
                    to={`/character/${character.hero}`}
                    key={character.hero.split(' ').join('_')}
                  >
                    <ListItemText>{character.hero}</ListItemText>
                  </MenuItem>
                ))}
              </MenuList>
            </Box>
            <Box
              sx={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                left: 0,
                backgroundColor: '#121212',
              }}
            >
              <Divider />
              <MenuItem component={Link} to="/settings">
                Settings
              </MenuItem>
            </Box>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
              paddingLeft: '20px',
              background: theme.palette.grey[900],
            }}
          >
            <Routes>
              <Route path="/settings" element={<Settings />} />
              <Route path="/character/:id" element={<Character />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}
