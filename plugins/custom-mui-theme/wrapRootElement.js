import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { ThemeProvider } from "styled-components"
import {mainTheme} from "./theme/index"

export const wrapRootElement = ({ element }) => {
  return (
    <MuiThemeProvider theme={mainTheme}>
      <ThemeProvider theme={mainTheme}>
        {element}
      </ThemeProvider>
    </MuiThemeProvider>
  )
}
