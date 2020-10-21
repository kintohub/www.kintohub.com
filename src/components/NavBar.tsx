import { AppBar, Grid } from "@material-ui/core"
import Box from "@material-ui/core/Box/Box"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Typography from "@material-ui/core/Typography/Typography"
import useScrollTrigger from "@material-ui/core/useScrollTrigger/useScrollTrigger"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { SimpleButton } from "./Button"
import KintoWhiteLogo from "../images/kinto-white-logo.svg"

const NavBar = styled(AppBar)`
  margin: 0;
  padding: 0;
  box-shadow: none;
  z-index:999;
`

const StyledBox = styled(Box)`
  margin: 0px 16px;
`

interface Props {
  window?: () => Window
  children: React.ReactElement
}

function ElevationScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Header = () => (
  <NavBar color="transparent">
    <Toolbar>
      <Grid container alignItems="center" justify="center">
        <Box mx="auto">
          <img
            src={KintoWhiteLogo}
            alt="logo"
          />
        </Box>
        <Box mx="auto">
          <Grid container>
            <StyledBox>
              <Link to="/pricing">
                <Typography variant="subtitle2">Pricing</Typography>
              </Link>
            </StyledBox>
            <StyledBox>
              <Link to="https://docs.kintohub.com">
                <Typography variant="subtitle2">Docs</Typography>
              </Link>
            </StyledBox>
            <StyledBox>
              <Link to="/support">
                <Typography variant="subtitle2">Support</Typography>
              </Link>
            </StyledBox>
          </Grid>
        </Box>
        <Box mx="auto">
          <Grid container>
            <Box>
              <Link to="/">
                <SimpleButton buttonTitle={"Login"} />
              </Link>
            </Box>
            <Box>
              <SimpleButton buttonTitle={"Signup Free"} />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Toolbar>
  </NavBar>
)

export default Header
