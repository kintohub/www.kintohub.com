import React from "react"
import styled from "styled-components"
import { Grid, Hidden, MuiThemeProvider, Typography } from "@material-ui/core"
import KintoFooterIcon from "resources/logo/footer.svg"
import { VerticalSpacer } from "components/Spacer"
import { bps, textThemeDark } from "theme/index"
import { Link } from "gatsby"
import ListItem from "@material-ui/core/ListItem/ListItem"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import List from "@material-ui/core/List/List"

const StyledDiv = styled.div`
  height: auto;
  background-color: ${props => props.theme.palette.secondary.light};

  a {
    text-decoration: none;
    color: ${props => props.theme.palette.text.hint};
  }

  .footer {
    ${bps.down("sm")} {
      flex-direction: column;
    }
  }

  .footer-logo {
    padding: 6px 0px 6px 12px;
  }
`

export default () => {
  return (
    <StyledDiv>
      <VerticalSpacer size={76} />
      <MuiThemeProvider theme={textThemeDark}>
        <Grid
          className="footer"
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={2}></Grid>
          <Grid item xs>
            <List dense>
              <ListItem className="footer-logo">
                <a href="https://kintohub.com">
                  <img src={KintoFooterIcon} alt="KintoHub" />
                </a>
              </ListItem>
              <VerticalSpacer size={20} />
              <ListItem>
                <a target="_blank" href="https://app.kintohub.com/auth/sign-up">
                  <Typography variant="body1">Create Account</Typography>
                </a>
              </ListItem>
              <ListItem>
                <Link target="_blank" to="/pricing">
                  <Typography variant="body1">Pricing</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank" to="/support">
                  <Typography variant="body1">Contact Us</Typography>
                </Link>
              </ListItem>
              <ListItem>
                <a target="_blank" href="https://kintohub.statuspage.io/">
                  <Typography variant="body1">Status</Typography>
                </a>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs>
            <List dense>
              <ListItem>
                <Typography color="textPrimary" variant="h6">
                  Community
                </Typography>
              </ListItem>
              <VerticalSpacer size={20} />
              <ListItem>
                <a target="_blank" href="https://kintohub.com/discord">
                  <Typography variant="body1">Discord Community</Typography>
                </a>
              </ListItem>
              <ListItem>
                <a target="_blank" href="https://feedback.kintohub.com/">
                  <Typography variant="body1">Roadmap</Typography>
                </a>
              </ListItem>
              <ListItem>
                <a
                  target="_blank"
                  href="https://feedback.kintohub.com/feature-requests"
                >
                  <Typography variant="body1">Feature Requests</Typography>
                </a>
              </ListItem>
              <ListItem>
                <a target="_blank" href="https://feedback.kintohub.com/bugs">
                  <Typography variant="body1">Report a Bug</Typography>
                </a>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs>
            <List dense>
              <ListItem>
                <Typography color="textPrimary" variant="h6">
                  Connect
                </Typography>
              </ListItem>
              <VerticalSpacer size={20} />
              <ListItem>
                <a target="_blank" href="https://github.com/kintohub">
                  <Typography variant="body1"> Github</Typography>
                </a>
              </ListItem>
              <ListItem>
                <a target="_blank" href="https://twitter.com/kintohub">
                  <Typography variant="body1"> Twitter</Typography>
                </a>
              </ListItem>
              <ListItem>
                <a target="_blank" href="https://facebook.com/KintoHub">
                  <Typography variant="body1">Facebook</Typography>
                </a>
              </ListItem>
              <ListItem>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/13376177/"
                >
                  <Typography variant="body1">Linkedin</Typography>
                </a>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <VerticalSpacer size={20} />

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className="footer"
        >
          <Grid item xs={2}></Grid>
          <Grid item>
            <ListItem>
              <Typography color="textPrimary" variant="subtitle2">
                © KintoHub 2020. All rights reserved.
              </Typography>
            </ListItem>
          </Grid>

          <Grid item>
            <ListItem>
              <Link target="_blank" to="/terms-of-service">
                <Typography color="textSecondary" variant="subtitle2">
                  Terms of Service
                </Typography>
              </Link>
            </ListItem>
          </Grid>
          <Hidden smDown>
            <Grid item>
              <ListItem>
                <Typography color="textSecondary" variant="subtitle2">
                  |
                </Typography>
              </ListItem>
            </Grid>
          </Hidden>

          <Grid item>
            <ListItem>
              <Link target="_blank" to="/privacy-policy">
                <Typography color="textSecondary" variant="subtitle2">
                  Privacy Policy
                </Typography>
              </Link>
            </ListItem>
          </Grid>

          <Grid item xs></Grid>
        </Grid>
      </MuiThemeProvider>
      <VerticalSpacer size={24} />
    </StyledDiv>
  )
}
