import {darkColors, lightColors} from '@rneui/base';
import {createTheme} from '@rneui/themed';
import {ThemeProvider} from '@rneui/themed-edge';
import {useState} from 'react';

const CustomThemeProvider = ({children}: any) => {
  const [mode, setMode] = useState('light');

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
