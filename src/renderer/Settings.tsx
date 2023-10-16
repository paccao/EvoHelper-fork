import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSettingsContext } from '../settingsContext';

export default function Settings() {
  const { wc3path, battleTag, extraLines, setExtra, setBattleTag, setWc3path } =
    useSettingsContext();
  const onSave = () => {
    window.electron.ipcRenderer.sendMessage('settings_write', {
      wc3path,
      battleTag,
      extraLines,
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 20px 0 0px',
        gap: '15px',
      }}
    >
      <h3>Settings</h3>
      <TextField
        value={wc3path}
        onChange={(e) => setWc3path(e.target.value)}
        id="path"
        label="Warcraft path"
        variant="standard"
      />
      <TextField
        value={battleTag}
        onChange={(e) => setBattleTag(e.target.value)}
        id="tag"
        label="Battle tag"
        variant="standard"
      />
      <TextField
        value={extraLines}
        onChange={(e) => setExtra(e.target.value)}
        id="extra"
        label="extra lines"
        variant="standard"
        multiline
        maxRows={10}
      />
      <Box sx={{ padding: '10px' }}>
        <Button onClick={onSave} sx={{ width: '100px' }}>
          Save
        </Button>
      </Box>
    </Box>
  );
}
