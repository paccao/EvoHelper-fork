import { createRoot } from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CharacterProvider } from '../context';
import { SettingsProvider } from '../settingsContext';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <SettingsProvider>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </SettingsProvider>,
);
