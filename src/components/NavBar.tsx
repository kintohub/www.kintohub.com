import {
  AppBar,
  Divider,
  Grid,
  MuiThemeProvider,
  useScrollTrigger,
} from "@material-ui/core"
import Box from "@material-ui/core/Box/Box"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Typography from "@material-ui/core/Typography/Typography"
import KintoBlackLogo from "resources/logo/black.svg"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ActionButton from "components/Button"
import KintoWhiteLogo from "resources/logo/white.svg"
import { HorizontalSpacer } from "components/Spacer"
import { Drawer as MUIDrawer } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem/ListItem"
import List from "@material-ui/core/List/List"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import { textThemeDark } from "theme/index"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded"
import TuneRoundedIcon from "@material-ui/icons/TuneRounded"
import LiveHelpRoundedIcon from "@material-ui/icons/LiveHelpRounded"
import MailRoundedIcon from "@material-ui/icons/MailRounded"
import Hidden from "@material-ui/core/Hidden/Hidden"

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
        <ActionButton
          buttonTitle="Login"
          variant="outlined"
          link={"https://app.kintohub.com/auth/login"}
        />
        <ActionButton
          buttonTitle="Signup Free"
          variant="contained"
          color="primary"
          link={"https://app.kintohub.com/auth/sign-up"}
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

const StyledNavContainer = styled.div`
  a {
    text-decoration: none;
  }

  .solidNav {
    background-color: ${props => props.theme.palette.background.paper};
    a {
      color: ${props => props.theme.palette.text.hint};
    }
  }
  .transparentNav {
    background-color: transparent;
    
    box-shadow: none;
    a {
      color: ${props => props.theme.palette.text.primary};
    }
  }

  .fade {
    transition: 0.3s;
  }

  .active {
    text-decoration: underline;
  }
`

interface Props {
  window?: () => Window
}

export default (props: Props) => {
  const { window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  })

  return (
    <StyledNavContainer>
      <Hidden smDown>
        <AppBar className={trigger ? "solidNav fade" : "transparentNav fade"}>
          <Toolbar>
            <Grid container alignItems="center" justify="center">
              <Box mx="auto">
                <Link to="/" activeClassName="active">
                  <img
                    src={trigger ? KintoBlackLogo : KintoWhiteLogo}
                    alt="logo"
                  />
                </Link>
              </Box>
              <Box mx="auto">
                <Grid container>
                  <HorizontalSpacer size={28} />
                  <Box>
                    <Link to="/pricing" activeClassName="active">
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
                    <Link to="/support" activeClassName="active">
                      <Typography variant="subtitle2">Support</Typography>
                    </Link>
                  </Box>
                </Grid>
              </Box>
              <Box mx="auto">
                <Grid container>
                  <Box>
                    <ActionButton
                      buttonTitle={"Login"}
                      link={"https://app.kintohub.com/auth/login"}
                    />
                  </Box>
                  <HorizontalSpacer size={16} />
                  <Box>
                    <ActionButton
                    color="primary"
                      variant="contained"
                      buttonTitle={"Signup Free"}
                      link={"https://app.kintohub.com/auth/sign-up"}
                    />
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Hidden>
    </StyledNavContainer>
  )
}
