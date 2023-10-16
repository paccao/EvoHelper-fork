import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ISettingsContext {
  wc3path: string;
  battleTag: string;
  extraLines: string;
  setExtra: (extra: string) => void;
  setBattleTag: (tag: string) => void;
  setWc3path: (path: string) => void;
  onWriteSettings: () => void;
}
export const SettingsContext = createContext({} as ISettingsContext);
export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [wc3path, setWc3path] = useState<string>('');
  const [battleTag, setBattleTag] = useState<string>('');
  const [extraLines, setExtra] = useState<string>(
    '-woff\n-c\nhttps://github.com/ArgentumHeart/WC3RPGLoader\nLoader is in alpha state.\nPlease report bugs on github.',
  );
  const onWriteSettings = () => {
    window.electron.ipcRenderer.sendMessage('settings_write', {
      wc3path,
      battleTag,
    });
  };

  const value = {
    wc3path,
    battleTag,
    extraLines,
    setExtra,
    setBattleTag,
    setWc3path,
    onWriteSettings,
  };

  useEffect(() => {
    window.electron.ipcRenderer.on('settings_read', (arg: any) => {
      if (arg) {
        arg.hasOwnProperty('wc3path') && setWc3path(arg.wc3path);
        arg.hasOwnProperty('battleTag') && setBattleTag(arg.battleTag);
        arg.hasOwnProperty('extraLines') && setExtra(arg.extraLines);
      }
    });
    window.electron.ipcRenderer.sendMessage('settings_read');
  }, []);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
export const useSettingsContext = () => useContext(SettingsContext);
