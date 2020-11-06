import React, { Props } from "react"
import styled from "styled-components"
import { Grid, Hidden, MuiThemeProvider, Typography } from "@material-ui/core"
import KintoFooterIcon from "resources/logo/footer.svg"
import { VerticalSpacer } from "components/Spacer"
import { bps, textThemeDark } from "theme/index"
import { Link } from "gatsby"

interface SizedBoxProps {
  size: number
}

const SizedHBox = styled.div<SizedBoxProps>`
  width: ${props => props.size}px;
`

const StyledDiv = styled.div`
  height: auto;
  background-color: ${props => props.theme.palette.secondary.light};

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
    ${bps.down("sm")} {
      flex-direction: column;
    }
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  .row {
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    ${bps.down("sm")} {
      flex-direction: column;
      width: 100%;
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

      <VerticalSpacer size={16} />
      <MuiThemeProvider theme={textThemeDark}>
        <div className="footer-bottom">
          <Grid container direction="row">
            <ul className="row">
              <li>
                <Typography color="textPrimary" variant="subtitle2">
                  © KintoHub 2020. All rights reserved. <SizedHBox size={40} />
                </Typography>
              </li>
              <li>
                <SizedHBox size={40} />
              </li>
              <li>
                <Link target="_blank" to="/terms-of-service">
                  <Typography color="textSecondary" variant="subtitle2">
                    Terms of Service
                  </Typography>
                </Link>
              </li>
              <li>
                <SizedHBox size={10} />
              </li>
              <Hidden smDown>
                <li>
                  <Typography color="textPrimary" variant="subtitle2">
                    |
                  </Typography>
                </li>
              </Hidden>

              <li>
                <SizedHBox size={10} />
              </li>
              <li>
                <Link target="_blank" to="/privacy-policy">
                  <Typography color="textSecondary" variant="subtitle2">
                    Privacy Policy
                  </Typography>
                </Link>
              </li>
            </ul>
          </Grid>
        </div>
      </MuiThemeProvider>
      <VerticalSpacer size={24} />
    </StyledDiv>
  )
}
