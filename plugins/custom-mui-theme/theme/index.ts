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
    contrastText: "#fff",
  },
  secondary: {
    main: "#ffffff",
    light: "#ff867c",
    dark: "#b61827",
    contrastText: "#000",
  },
  background: {
    default: "#f6f7f9",
    paper: "#ffffff",
  },
  action: {
    disabled: "",
  },
  text: {
    primary: "rgba(17, 34, 37)",
    secondary: "rgba(17, 34, 37, 0.8)",
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.74)",
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
    fontWeight: 700,
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
  },
  subtitle2: {
    fontFamily: bodyFontFamily,
    fontSize: 14,
    letterSpacing:0.25,
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
