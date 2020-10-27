import React from "react"
import styled, { ThemeProvider } from "styled-components"
import HeroBg from "../images/Hero.png"
import { MuiThemeProvider, Typography } from "@material-ui/core"
import { CallToActionButton } from "./Button"
import { TechStackCard } from "./Card"
import Grid from "@material-ui/core/Grid/Grid"
import angular from "../images/fe/angular.svg"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import { VerticalSpacer } from "./Spacer"
import { textThemeDark } from "../../plugins/custom-mui-theme/theme"

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${HeroBg}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .heading {
    font-size: 60px;
    width: 764px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #6200ee;
  }

  .feature-container .feature-suggestion-container {
    margin: 20px;
  }

  .hero-wrapper {
    position: absolute;
    height: 85%;
    width: 100%;
    z-index: -999;
    background-size: contain;
  }
`

export default () => {
  return (
    <StyledDiv>
      <img src={HeroBg} className="hero-wrapper" />
      <VerticalSpacer size={200} />

      <Typography align="center" className="heading" color="textPrimary">
        The best way to deploy fullstack apps
      </Typography>
      <VerticalSpacer size={34} />
      <CallToActionButton
        variant="contained"
        buttonTitle={"Start Deploying"}
        startIcon={<PowerSettingsNewIcon />}
      />
      <VerticalSpacer size={20} />
      <Typography variant="caption" color="textSecondary">
        No credit card required.
      </Typography>
      <VerticalSpacer size={85} />
      <Typography variant="subtitle1" color="textPrimary" align="center">
        <div>
          KintoHub is an all-in-one deployment platform designed for fullstack
        </div>
        <div>developers by fullstack developers</div>
      </Typography>
      <VerticalSpacer size={90} />
      <Typography variant="body1">
        ALL YOUR APPS'S NEEDS IN ONE PLACE
      </Typography>

      <VerticalSpacer size={70} />
      <Grid container direction="row" justify="center" alignItems="center">
        <TechStackCard
          TechStackTitle={"Frontend"}
          TechStackDescription={
            "Static files, JAMStack sites, and dynamic web apps with SSR enabled can all be deployed with ease."
          }
          Category={"popular frameworks"}
          AvatarSrc={[angular,angular]}
        />
        <TechStackCard
          TechStackTitle={"Backend"}
          TechStackDescription={
            "Scale APIs, consume messages with background workers or create repeatable jobs."
          }
          Category={"popular Languages"}
        />
        <TechStackCard
          TechStackTitle={"Data & Storage"}
          TechStackDescription={
            "Scalable databases, queues, image, file, and in-memory cache are all possible on KintoHub. No 3rd party clouds required."
          }
          Category={"popular catalogs"}
        />
      </Grid>

      <MuiThemeProvider theme={textThemeDark}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="feature-container"
        >
          <div className="feature-suggestion-container">
            <Typography variant="h6" color="textPrimary">
              Deploy an Existing Project with Git
            </Typography>
            <Typography color="textPrimary">
              Use our Git integrations with{" "}
              <a href="https://docs.kintohub.com/repository/github-apps">
                GitHub
              </a>
              or use an
              <a href="https://docs.kintohub.com/repository/import%20url">
                {" "}
                import url.
              </a>
            </Typography>
          </div>
          <div className="feature-suggestion-container">
            <Typography variant="h6" color="textPrimary">
              Connect Your Custom Domains
            </Typography>
            <Typography color="textPrimary">
              Once deployed, your projects can be assigned to a custom domain.
            </Typography>
            <Typography color="textPrimary">
              <a href="https://docs.kintohub.com/anatomy/domains">
                Learn more →
              </a>
            </Typography>
          </div>
        </Grid>
      </MuiThemeProvider>
    </StyledDiv>
  )
}
