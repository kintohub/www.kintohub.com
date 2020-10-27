import { AppBar, Divider, Grid, MuiThemeProvider } from "@material-ui/core"
import Box from "@material-ui/core/Box/Box"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Typography from "@material-ui/core/Typography/Typography"
import KintoBlackLogo from "../images/kinto-black-logo.svg"
import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { CallToActionButton } from "./Button"
import KintoWhiteLogo from "../images/kinto-white-logo.svg"
import { HorizontalSpacer } from "./Spacer"
import { Drawer as MUIDrawer } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem/ListItem"
import List from "@material-ui/core/List/List"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import { textThemeDark } from "../../plugins/custom-mui-theme/theme"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded"
import TuneRoundedIcon from "@material-ui/icons/TuneRounded"
import LiveHelpRoundedIcon from "@material-ui/icons/LiveHelpRounded"
import MailRoundedIcon from "@material-ui/icons/MailRounded"

const Drawer = () => {
  const itemList = [
    { text: "Pricing", icon: <TuneRoundedIcon /> },
    { text: "Documentation", icon: <LibraryBooksRoundedIcon /> },
    { text: "Support", icon: <LiveHelpRoundedIcon /> },
    { text: "Contact Us", icon: <MailRoundedIcon /> },
  ]

  return (
    <MuiThemeProvider theme={textThemeDark}>
      <MUIDrawer style={{ width: "900px" }}>
        <CallToActionButton buttonTitle="Login" variant="outlined" />
        <CallToActionButton
          buttonTitle="Signup Free"
          variant="contained"
          color="primary"
        />
        <List>
          {itemList.map((item, index) => {
            const { text, icon } = item

            return (
              <>
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                  <ListItemIcon>{icon}</ListItemIcon>
                  <Divider />
                </ListItem>
              </>
            )
          })}
        </List>
      </MUIDrawer>
    </MuiThemeProvider>
  )
}

const StyledContainer = styled.div`
  .active {
    background-color: #fff;
    a {
      color: #000000;
    }
    a:link {
      color: #6200ee;
    }

    /* visited link */
    a:visited {
      color: #f55555;
    }

    /* mouse over link */
    a:hover {
      font-weight: 900;
    }

    /* selected link */
    a:active {
      color: yellow;
    }

    .inactive {
      background-color: transparent;
      box-shadow: none;
    }
  }
`

const StyledBox = styled(Box)``

export default () => {
  const [navbar, setNavbar] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeNavbarColor)

  return (
    <StyledContainer>
      <AppBar className={navbar ? "active" : "inactive"}>
        <Drawer />
        <Toolbar>
          <Grid container alignItems="center" justify="center">
            <Box mx="auto">
              <Link to="/">
                <img
                  src={navbar ? KintoBlackLogo : KintoWhiteLogo}
                  alt="logo"
                />
              </Link>
            </Box>
            <Box mx="auto">
              <Grid container>
                <HorizontalSpacer size={28} />
                <Box>
                  <Link to="/pricing">
                    <Typography variant="subtitle2">Pricing</Typography>
                  </Link>
                </Box>
                <HorizontalSpacer size={28} />
                <Box>
                  <a href="https://docs.kintohub.com">
                    <Typography variant="subtitle2">Docs</Typography>
                  </a>
                </Box>
                <HorizontalSpacer size={28} />
                <Box>
                  <Link to="/support">
                    <Typography variant="subtitle2">Support</Typography>
                  </Link>
                </Box>
              </Grid>
            </Box>
            <Box mx="auto">
              <Grid container>
                <Box>
                  <a href="https://app.kintohub.com/auth/sign-up">
                    <CallToActionButton buttonTitle={"Login"} />
                  </a>
                </Box>
                <HorizontalSpacer size={16} />
                <Box>
                  <a href="https://app.kintohub.com/auth/sign-up">
                    <CallToActionButton
                      variant="contained"
                      buttonTitle={"Signup Free"}
                    />
                  </a>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </StyledContainer>
  )
}
