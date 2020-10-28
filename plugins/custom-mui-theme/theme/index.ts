import { createMuiTheme } from "@material-ui/core/styles"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"
import createPalette, {
  PaletteOptions,
} from "@material-ui/core/styles/createPalette"

export const headingFontFamily = "Roboto"
export const bodyFontFamily = "Roboto"
export const bps = createBreakpoints({})

const palette: PaletteOptions = {
  primary: {
    light: "rgb(122, 104, 232)",
    main: "#6200ee",
    dark: "rgb(122, 104, 232)",
    contrastText: "#f7f9ff",
  },
  secondary: {
    main: "#ffffff",
    light: "#dedede",
    dark: "#b8b8b8",
    contrastText: "#000",
  },
  background: {
    default: "#111111",
    paper: "#ffffff",
  },
  action: {
    disabled: "",
  },
  text: {
    primary: "rgba(255,255,255,.87)",
    secondary: "rgba(255,255,255,0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.8)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  common: {
    black: "#000",
    white: "#fff",
  },
}

export const typography = {
  useNextVariants: true,
  xsmallFontSize: 12,
  smallFontSize: 14,
  fontSize: 16,
  fontFamily: headingFontFamily,
  h1: {
    fontFamily: headingFontFamily,
    fontSize: 34,
    fontWeight: 700,
  },
  h2: {
    fontFamily: headingFontFamily,
    fontSize: 30,
    fontWeight: 700,
  },
  h3: {
    fontFamily: headingFontFamily,
    fontSize: 26,
    fontWeight: 500,
  },
  h4: {
    fontFamily: headingFontFamily,
    fontSize: 24,
    fontWeight: 700,
  },
  h5: {
    fontFamily: bodyFontFamily,
    fontSize: 20,
    fontWeight: 700,
  },
  h6: {
    fontFamily: bodyFontFamily,
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: 0.4,
  },
  subtitle1: {
    fontFamily: bodyFontFamily,
    fontSize: 16,
    fontWeight: 500,
  },
  subtitle2: {
    fontFamily: bodyFontFamily,
    fontSize: 14,
    letterSpacing: 0.25,
  },
  body1: {
    fontFamily: bodyFontFamily,
    fontSize: 16,
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: bodyFontFamily,
    fontSize: 14,
    letterSpacing: 0.25,
  },
  caption: {
    fontFamily: bodyFontFamily,
    fontSize: 12,
    letterSpacing: 0.4,
  },
  overline: {
    fontFamily: bodyFontFamily,
    fontSize: 10,
    letterSpacing: "1.4px",
    lineHeight: "16px",
  },
  button: {
    fontFamily: bodyFontFamily,
    fontSize: 16,
    fontWeight: 700,
  },
}

export const mainTheme = createMuiTheme({
  typography,
  palette: createPalette(palette),
})


export const textThemeDark = createMuiTheme({
  typography,
  palette: createPalette({
    ...palette,
    text: {
      primary: "rgba(0,0,0,.87)",
      secondary: "rgba(0,0,0,0.6)",
    },
  }),
})

export const pricingCaculatorTheme = createMuiTheme({
  typography: {
    ...typography,
    h4: {
      fontFamily: bodyFontFamily,
      fontSize: 24,
      fontWeight: 700,
    },
    h6: {
      fontFamily: bodyFontFamily,
      fontSize: 18,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.5,
      letterSpacing: 0.25,
    }
  },
  palette: createPalette({
    ...palette,
    secondary: {
      main: 'rgb(6, 0, 45)',
    },
    text: {
      primary: "rgba(0,0,0,.87)",
      secondary: "rgba(0,0,0,0.6)",
    },
    divider: 'rgb(185, 213, 236)'
  })
});
