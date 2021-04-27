import * as React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';


const StyleProvider: React.FC = ({children}) => {
  return (
    <MUIThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MUIThemeProvider>
  )
}

export default StyleProvider;

