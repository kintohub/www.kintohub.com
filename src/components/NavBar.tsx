import {
  AppBar,
  Divider,
  Grid,
  IconButton,
  MuiThemeProvider,
  SvgIcon,
  useScrollTrigger,
} from "@material-ui/core"
import Box from "@material-ui/core/Box/Box"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Typography from "@material-ui/core/Typography/Typography"
import KintoBlackLogo from "resources/logo/black.svg"
import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ActionButton from "components/Button"
import KintoWhiteLogo from "resources/logo/white.svg"
import {
  AutoExpandSpacer,
  HorizontalSpacer,
  VerticalSpacer,
} from "components/Spacer"
import { textThemeDark } from "theme/index"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded"
import TuneRoundedIcon from "@material-ui/icons/TuneRounded"
import MailRoundedIcon from "@material-ui/icons/MailRounded"
import Hidden from "@material-ui/core/Hidden/Hidden"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import CloseRoundedIcon from "@material-ui/icons/CloseRounded"
import List from "@material-ui/core/List/List"
import ListItem from "@material-ui/core/ListItem/ListItem"

const StyledMobileDrawerContainer = styled.div`
  .sidenav {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.palette.background.paper};
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .items {
    width: 100%;
    padding: 0px 32px;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-decoration: none;
    font-size: 25px;
    text-align: left;
    transition: 0.3s;
  }

  a {
    color: ${props => props.theme.palette.background.default};
  }

  .closebtn {
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 36px;
    color: ${props => props.theme.palette.background.default};
  }

  .mobile-logo {
    position: absolute;
    display: inline-block;
    top: 25px;
    left: 25px;
  }

  .menu-item {
    display: inline-flex;
  }

  .open {
    width: 100%;
  }
  .closed {
    width: 0%;
  }
`

const MobileDrawer = () => {
  const [drawer, setDrawer] = useState(false)
  const openNav = () => {
    setDrawer(true)
  }

  const closeNav = () => {
    setDrawer(false)
  }

  return (
    <MuiThemeProvider theme={textThemeDark}>
      <StyledMobileDrawerContainer>
        <AppBar position="static">
          <Toolbar>
            <Box>
              <MenuRoundedIcon onClick={openNav} />
            </Box>

            <Box mx="auto">
              <Link to="/" activeClassName="active">
                <img src={KintoWhiteLogo} alt="logo" />
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <div className={`sidenav navbar ${drawer ? "open" : "closed"}`}>
          <VerticalSpacer size={64} />
          <img className="mobile-logo" src={KintoBlackLogo} alt="logo" />
          <CloseRoundedIcon className="closebtn" onClick={closeNav} />

          <div className="items">
            <ActionButton
              fullWidth
              buttonTitle={"Login"}
              variant="outlined"
              color="primary"
              link={"https://app.kintohub.com/login"}
            />
            <VerticalSpacer size={16} />
            <ActionButton
              fullWidth
              color="primary"
              variant="contained"
              buttonTitle={"Signup Free"}
              link={"https://app.kintohub.com/auth/sign-up"}
            />
            <VerticalSpacer size={32} />
            <List>
              <ListItem button className="menu-item">
                <Typography variant="subtitle1" color="textPrimary">
                  <Link to="/">Home</Link>
                </Typography>
                <AutoExpandSpacer />
                <HomeRoundedIcon color="primary" />
              </ListItem>
              <Divider />
              <ListItem button className="menu-item">
                <Typography variant="subtitle1" color="textPrimary">
                  <Link to="/">Pricing</Link>
                </Typography>
                <AutoExpandSpacer />
                <TuneRoundedIcon color="primary" />
              </ListItem>
              <Divider />
              <ListItem button className="menu-item">
                <Typography variant="subtitle1" color="textPrimary">
                  <Link to="/">Documentation</Link>
                </Typography>
                <AutoExpandSpacer />
                <LibraryBooksRoundedIcon color="primary" />
              </ListItem>
              <Divider />
              <ListItem button className="menu-item">
                <Typography variant="subtitle1" color="textPrimary">
                  <Link to="/">Support</Link>
                </Typography>
                <AutoExpandSpacer />
                <MailRoundedIcon color="primary" />
              </ListItem>
              <Divider />
            </List>
          </div>
        </div>
      </StyledMobileDrawerContainer>
    </MuiThemeProvider>
  )
}

const StyledNavContainer = styled.div`
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
      <Hidden mdUp>
        <MobileDrawer />
      </Hidden>
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
                      color="inherit"
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
