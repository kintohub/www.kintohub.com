import { AppBar, Divider, Grid, useScrollTrigger } from "@material-ui/core"
import Box from "@material-ui/core/Box/Box"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Typography from "@material-ui/core/Typography/Typography"
import KintoBlackLogo from "resources/logo/black.svg"
import React, { useState } from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import ActionButton from "components/Button"
import KintoWhiteLogo from "resources/logo/white.svg"
import {
  AutoExpandSpacer,
  HorizontalSpacer,
  VerticalSpacer,
} from "components/Spacer"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded"
import TuneRoundedIcon from "@material-ui/icons/TuneRounded"
import MailRoundedIcon from "@material-ui/icons/MailRounded"
import Hidden from "@material-ui/core/Hidden/Hidden"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import CloseRoundedIcon from "@material-ui/icons/CloseRounded"
import List from "@material-ui/core/List/List"
import ListItem from "@material-ui/core/ListItem/ListItem"

const StyledNavContainer = styled.div`
  .solidNav {
    z-index: 3;
    background-color: ${props => props.theme.palette.background.paper};
    a {
      color: ${props => props.theme.palette.text.hint};
    }
    a:hover {
      color: ${props => props.theme.palette.primary.dark};
    }
  }

  .transparentNav {
    z-index: 3;
    background-color: transparent;
    box-shadow: none;
    a {
      color: ${props => props.theme.palette.text.primary};
    }
    a:hover {
      color: ${props => props.theme.palette.primary.dark};
    }
  }

  .fade {
    transition: 0.3s;
  }

  .active {
    text-decoration: underline;
  }

  .sidenav {
    height: 100%;
    position: fixed;
    z-index: 3;
    background-color: ${props => props.theme.palette.background.paper};
    transition: 0.3s;
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
    top: 20px;
    left: 20px;
  }

  .menu-item {
    display: inline-flex;
    padding: 8px 0px;
  }

  .menu-item-icon {
    color: ${props => props.theme.palette.secondary.dark};
  }

  .open {
    width: 100%;
    z-index: 5;
  }
  .closed {
    width: 0%;
    z-index: -5;
  }
`

interface Props {
  window?: () => Window
}

export default (props: Props) => {
  const { window } = props
  const isBrowser = () => typeof window !== "undefined"
  if (isBrowser() && location.pathname) {
    navigate(location.pathname)
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  })

  const [drawer, setDrawer] = useState(false)
  const openNav = () => {
    console.log("pl")
    setDrawer(true)
  }

  const closeNav = () => {
    setDrawer(false)
  }

  return (
    <StyledNavContainer>
      <Hidden lgUp>
        <AppBar className={trigger ? "solidNav fade" : "transparentNav fade"}>
          <Toolbar>
            <Box>
              <Link to="/" activeClassName="active">
                <img
                  src={trigger ? KintoBlackLogo : KintoWhiteLogo}
                  alt="logo"
                />
              </Link>
            </Box>
            <AutoExpandSpacer />
            <Box>
              <MenuRoundedIcon
                color={trigger ? "primary" : "secondary"}
                onClick={openNav}
              />
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
                <Typography variant="subtitle1" className="menu-item-icon">
                  <Link to="/">Home</Link>
                </Typography>
                <AutoExpandSpacer />
                <HomeRoundedIcon className="menu-item-icon" />
              </ListItem>
              <Divider />
              <ListItem button className="menu-item">
                <Typography variant="subtitle1" color="textPrimary">
                  <Link to="/pricing">Pricing</Link>
                </Typography>
                <AutoExpandSpacer />
                <TuneRoundedIcon className="menu-item-icon" />
              </ListItem>
              <Divider />
              <ListItem button className="menu-item">
                <Typography variant="subtitle1" color="textPrimary">
                  <a href="https://docs.kintohub.com">
                    Documentation{" "}
                  </a>
                </Typography>

                <AutoExpandSpacer />
                <LibraryBooksRoundedIcon className="menu-item-icon" />
              </ListItem>
              <Divider />
              <ListItem button className="menu-item">
                <Typography variant="subtitle1" color="textPrimary">
                  <Link to="/support">Support</Link>
                </Typography>
                <AutoExpandSpacer />
                <MailRoundedIcon className="menu-item-icon" />
              </ListItem>
              <Divider />
            </List>
          </div>
        </div>
      </Hidden>
      <Hidden mdDown>
        <AppBar className={trigger ? "solidNav fade" : "transparentNav fade"}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item xs></Grid>
              <Grid item md={2}>
                <Link to="/" activeClassName="active">
                  <img
                    src={trigger ? KintoBlackLogo : KintoWhiteLogo}
                    alt="logo"
                  />
                </Link>
              </Grid>
              <Grid item md={4}>
                <Grid container justify="center">
                  <Link to="/pricing" activeClassName="active">
                    <Typography variant="subtitle2">Pricing</Typography>
                  </Link>
                  <HorizontalSpacer size={24} />
                  <a target="_blank" href="https://docs.kintohub.com">
                    <Typography variant="subtitle2">Docs</Typography>
                  </a>
                  <HorizontalSpacer size={24} />
                  <Link to="/support" activeClassName="active">
                    <Typography variant="subtitle2">Support</Typography>
                  </Link>
                </Grid>
              </Grid>
              <Grid item md={2}>
                <Grid container direction="row" justify="flex-end">
                  <ActionButton
                    color="inherit"
                    buttonTitle={"Login"}
                    link={"https://app.kintohub.com/auth/login"}
                  />
                  <HorizontalSpacer size={16} />
                  <ActionButton
                    color="primary"
                    variant="contained"
                    buttonTitle={"Signup Free"}
                    link={"https://app.kintohub.com/auth/sign-up"}
                  />
                </Grid>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Hidden>
    </StyledNavContainer>
  )
}
