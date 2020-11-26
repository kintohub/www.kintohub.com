import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { ThemeProvider } from "styled-components"
import { mainTheme } from "./src/theme/index"

const AnaylticWrapper = ({ children }) => {
  React.useEffect(() => {
    // https://segment.com/docs/connections/spec/identify/#anonymous-id
    window.analytics && window.analytics.identify({})
  }, [])
  return <>{children}</>
}

export const wrapRootElement = ({ element }) => {
  return (
    <AnaylticWrapper>
      <MuiThemeProvider theme={mainTheme}>
        <ThemeProvider theme={mainTheme}>{element}</ThemeProvider>
      </MuiThemeProvider>
    </AnaylticWrapper>
  )
}
