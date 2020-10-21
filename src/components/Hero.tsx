import React from "react"
import styled from "styled-components"
import HeroBg from "../images/Hero.png"
import { Typography } from "@material-ui/core"
import { CallToActionButton } from "./Button"
import { FeatureCard } from "./Card"
import Grid from "@material-ui/core/Grid/Grid"
import angular from "../images/fe/angular.svg"

const StyledDiv = styled.div`
  width: 100%;
  background-image: url(${HeroBg}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  .CallToActionButton {
    margin-top: 30px;
  }

  .heading {
    font-size: 60px;
    width: 764px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 34px;
    margin-top: 164px;
  }

  .credit-text {
    margin-top: 20px;
  }

  .tagline-text {
    margin: 85px 0px;
    width: 509px;
    text-align: center;
  }

  .feature-text {
    margin-bottom: 60px;
    width: 509px;
    text-align: center;
    text-transform: uppercase;
  }

  .feature-container .feature-suggestion-container {
    margin: 20px;
  }
`

export default () => {
  return (
    <StyledDiv>
      <Typography className="heading">
        The best way to deploy fullstack apps
      </Typography>
      <CallToActionButton buttonTitle={"Start Deploying"} />
      <Typography variant="body1" className="credit-text">
        No credit card required.
      </Typography>
      <Typography variant="body1" className="tagline-text">
        KintoHub is an all-in-one deployment platform designed for fullstack
        developers by fullstack developers.
      </Typography>
      <Typography variant="body1" className="feature-text">
        All your App's needs in one place
      </Typography>

      <Grid container direction="row" justify="center" alignItems="center">
        <FeatureCard
          featureTitle={"Frontend"}
          featureDescription={
            "Static files, JAMStack sites, and dynamic web apps with SSR enabled can all be deployed with ease."
          }
          featureCategory={"popular frameworks"}
          src={angular}
        />
        <FeatureCard
          featureTitle={"Backend"}
          featureDescription={
            "Scale APIs, consume messages with background workers or create repeatable jobs."
          }
          featureCategory={"popular Languages"}
        />
        <FeatureCard
          featureTitle={"Data & Storage"}
          featureDescription={
            "Scalable databases, queues, image, file, and in-memory cache are all possible on KintoHub. No 3rd party clouds required."
          }
          featureCategory={"popular catalogs"}
        />
      </Grid>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="feature-container"
      >
        <div className="feature-suggestion-container">
          <Typography variant="h6">Deploy an Existing Project with Git</Typography>
          <Typography>
            Use our Git integrations with GitHub or use an import url.
          </Typography>
          <Typography>okok</Typography>
        </div>
        <div className="feature-suggestion-container">
          <Typography>Connect Your Custom Domains</Typography>
          <Typography>
            Once deployed, your projects can be assigned to a custom domain.
          </Typography>
          <Typography>Learn more →</Typography>
        </div>
      </Grid>
    </StyledDiv>
  )
}
