import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ISettingsContext {
  wc3path: string;
  battleTag: string;
  extraLines: string;
  onlyT4Classes: boolean;
  setOnlyT4Classes: (onlyT4: boolean) => void;
  setExtra: (extra: string) => void;
  setBattleTag: (tag: string) => void;
  setWc3path: (path: string) => void;
}
export const SettingsContext = createContext({} as ISettingsContext);
export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [wc3path, setWc3path] = useState<string>('');
  const [battleTag, setBattleTag] = useState<string>('');
  const [extraLines, setExtra] = useState<string>(
    '-woff\n' +
    '-c\n' +
    'https://github.com/ArgentumHeart/EvoHelper\n' +
    'v0.3.0',
  );
  const [onlyT4Classes, setOnlyT4Classes] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      wc3path,
      battleTag,
      extraLines,
      onlyT4Classes,
      setOnlyT4Classes,
      setExtra,
      setBattleTag,
      setWc3path,
    }),
    [
      wc3path,
      battleTag,
      extraLines,
      onlyT4Classes,
      setOnlyT4Classes,
      setExtra,
      setBattleTag,
      setWc3path,
    ],
  );

  useEffect(() => {
    window.electron.ipcRenderer.on('settings_read', (arg: any) => {
      if (arg) {
        arg.hasOwnProperty('wc3path') && setWc3path(arg.wc3path);
        arg.hasOwnProperty('battleTag') && setBattleTag(arg.battleTag);
        arg.hasOwnProperty('extraLines') && setExtra(arg.extraLines);
        arg.hasOwnProperty('onlyT4') && setExtra(arg.onlyT4Classes);
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
