import React, { Props } from "react"
import styled from "styled-components"
import { Grid, MuiThemeProvider, Typography } from "@material-ui/core"
import KintoFooterIcon from "../images/logo/footer.svg"
import { HorizontalSpacer, VerticalSpacer } from "./Spacer"
import { bps, textThemeDark } from "../../plugins/custom-mui-theme/theme"
import { Link } from "gatsby"

const StyledDiv = styled.div`
  height: auto;
  background-color: ${props => props.theme.palette.background.paper};

  .list-header {
    color: ${props => props.theme.palette.text.hint};
    font-size: 18px;
    font-weight: 500;
    margin: 50px 0px 25px 0px;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.palette.text.hint};
  }

  .footer {
    flex-direction: row;

    ${bps.down("md")} {
      flex-direction: column;
    }
  }

  ul {
    list-style-type: none;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.5px;
    line-height: 30px;
  }
`

export default () => {
  return (
    <StyledDiv>
      <div>
        <Grid
          container
          className="footer"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Grid item>
            <ul>
              <li className="list-header">
                <img src={KintoFooterIcon} alt="KintoHub" />
              </li>
              <li>
                <a target="_blank" href="https://app.kintohub.com/auth/sign-up">
                  Create Account
                </a>
              </li>
              <li>
                <Link to="/pricing"> Pricing</Link>
              </li>
              <li>
                <a target="_blank" href="https://kintohub.com/">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/support">Contact Us</Link>
              </li>
              <li>
                <a target="_blank" href="https://kintohub.statuspage.io/">
                  {" "}
                  Status
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item>
            <ul>
              <li className="list-header">Community</li>
              <li>
                <a target="_blank" href="https://kintohub.com/discord">
                  Discord Community
                </a>
              </li>
              <li>
                <a target="_blank" href="https://feedback.kintohub.com/">
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://feedback.kintohub.com/feature-requests"
                >
                  Feature Requests
                </a>
              </li>
              <li>
                <a target="_blank" href="https://feedback.kintohub.com/bugs">
                  Report a Bug
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item>
            <ul>
              <li className="list-header">Connect</li>
              <li>
                <a target="_blank" href="https://github.com/kintohub">
                  Github
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/kintohub">
                  Twitter
                </a>
              </li>
              <li>
                <a target="_blank" href="https://facebook.com/KintoHub">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCpJJc0zcfzdHPw64BSP3GyQ"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/13376177/"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="footer"
      >
        <MuiThemeProvider theme={textThemeDark}>
          <Grid item>
            <Typography
              display="inline"
              align="center"
              color="textPrimary"
              variant="subtitle2"
            >
              © KintoHub 2020. All rights reserved.
            </Typography>
          </Grid>
          <HorizontalSpacer size={32} />
          <Grid item>
            <a target="_blank" href="https://www.kintohub.com/terms-of-service">
              <Typography
                display="inline"
                align="center"
                color="textSecondary"
                variant="subtitle2"
              >
                Terms of Service
              </Typography>
            </a>
          </Grid>
          <HorizontalSpacer size={16} />
          <Typography
            display="inline"
            align="center"
            color="textSecondary"
            variant="subtitle2"
          >
            |
          </Typography>
          <HorizontalSpacer size={16} />
          <Grid item>
            <a target="_blank" href="https://www.kintohub.com/privacy-policy">
              <Typography
                display="inline"
                align="center"
                color="textSecondary"
                variant="subtitle2"
              >
                Privacy Policy
              </Typography>
            </a>
          </Grid>
        </MuiThemeProvider>
      </Grid>
      <VerticalSpacer size={16} />
    </StyledDiv>
  )
}
