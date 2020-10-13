import { createMuiTheme } from '@material-ui/core/styles';
import createPalette, { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { kintoGreen, kintoPurple, KINTO_ERROR, KINTO_ERROR_DARK, KINTO_ERROR_LIGHT } from './colors';

export const headingFontFamily = 'Roboto';

const palette: PaletteOptions = {
    primary: {
      light: kintoPurple(200),
      main: kintoPurple(500),
      dark: kintoPurple(700),
      contrastText: '#fff',
    },
    action: {
      hover: 'rgba(86, 0, 232, 0.07)',
    },
    secondary: {
      main: '#ffffff',
      light: '#ff867c',
      dark: '#b61827',
      contrastText: '#000',
    },
    background: {
      default: '#f6f7f9',
      paper: '#ffffff',
    },
    common: {
      black: '#121212',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.74)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    error: {
      light: KINTO_ERROR_LIGHT,
      main: KINTO_ERROR,
      dark: KINTO_ERROR_DARK,
      contrastText: '#fff',
    },
    success: {
      light: kintoGreen(200),
      main: kintoGreen(400),
      dark: kintoGreen(700),
      contrastText: '#fff',
    },
  };
  
  export const typography = {
    useNextVariants: true,
    xsmallFontSize: 12,
    smallFontSize: 14,
    fontSize: 16,
    fontFamily: headingFontFamily,
    h1: {
      fontFamily: headingFontFamily,
      fontSize: 34,
      fontWeight: 500,
    },
    h2: {
      fontFamily: headingFontFamily,
      fontSize: 30,
      fontWeight: 500,
    },
    h3: {
      fontFamily: headingFontFamily,
      fontSize: 26,
      fontWeight: 500,
    },
    h4: {
      fontFamily: headingFontFamily,
      fontSize: 24,
      fontWeight: 500,
    },
    h5: {
      fontFamily: headingFontFamily,
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontFamily: headingFontFamily,
      fontSize: 18,
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: headingFontFamily,
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: headingFontFamily,
      fontSize: 14,
    },
    body1: {
      fontFamily: headingFontFamily,
      fontSize: 16,
      letterSpacing: 0.5,
    },
    body2: {
      fontFamily: headingFontFamily,
      fontSize: 14,
      letterSpacing: 0.25,
    },
    caption: {
      fontFamily: headingFontFamily,
      fontSize: 12,
      letterSpacing: 0.4,
    },
    overline: {
      fontFamily: headingFontFamily,
      fontSize: 10,
      letterSpacing: '1.4px',
      lineHeight: '16px',
    },
    button: {
      fontFamily: headingFontFamily,
      fontSize: 14,
      letterSpacing: '1.25px',
      lineHeight: '16px',
    },
  };

export const mainTheme = createMuiTheme({
    typography,
    palette: createPalette(palette),
  });