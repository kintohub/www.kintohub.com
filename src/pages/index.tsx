import Footer from "components/Footer"
import NavBar from "components/NavBar"
import Hero from "components/Hero"
import SEO from "components/seo"
import Testimonial from "components/Testimonial"
import React from "react"
import styled from "styled-components"
import Comparison from "components/Comparison"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import Layout from "components/Layout"
import KintoDeveloperTools from "resources/icons/developertools.svg"
import Grid from "@material-ui/core/Grid/Grid"
import { MuiThemeProvider, Typography } from "@material-ui/core"
import { VerticalSpacer } from "components/Spacer"
import { bps, textThemeDark } from "theme/index"
import ActionButton from "components/Button"
import Showcase from "components/Showcase"
import BlackSlantBg from "resources/background/black-slant.svg"
import CallToActionBg from "resources/background/calltoaction.svg"

const StyledCallToActionContainer = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${CallToActionBg});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
`

const CallToAction = () => {
  return (
    <StyledCallToActionContainer>
      <VerticalSpacer size={86} />
      <Typography align="center" variant="h1" color="textPrimary">
        Ready to start deploying your app?
      </Typography>
      <VerticalSpacer size={12} />
      <Typography variant="body1" align="center" color="textPrimary">
        Deploy for free. No CC required.
      </Typography>
      <VerticalSpacer size={42} />
      <ActionButton
        color="primary"
        variant="contained"
        startIcon={<PowerSettingsNewIcon/>}
        buttonTitle={"Start Deploying"}
        link={"https://app.kintohub.com/auth/sign-up"}
      />
      <VerticalSpacer size={142} />
    </StyledCallToActionContainer>
  )
}

const StyledFeatureDescriptionContainer = styled.div`
  width: 100%;
  height: auto;
  border-style: none;
  border: 0px;
  z-index: 9;
  position: relative;
  margin: 0px auto;
  overflow: hidden;
  background-color: ${props => props.theme.palette.secondary.light};

  .grid-container {
    flex-direction: row;
    align-content: center;
    ${bps.down("sm")} {
      flex-direction: column;
      align-items: center;
      padding: 0px 16px;
    }
  }

  .developer-features {
    padding: auto;
    ${bps.down("sm")} {
      flex-direction: column;
      align-self: center;
    }
  }

  .grid-box {
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    width: 500px;
    text-align: left;
    ${bps.down("sm")} {
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }

  .dev-tools {
    position: relative;
    z-index: 9;
    margin-left: 64px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${bps.down("md")} {
      display: block;
      margin-left: 0;
      padding: 24px;
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }

  .black-slant-bg-wrapper {
    background: url(${BlackSlantBg}) no-repeat center;
    height: 560px;
    z-index: -1;
    bottom: -290px;
    position: absolute;
    width: 100vw;
    background-size: cover;

    ${bps.down("sm")} {
      bottom: -270px;
    }
  }
`
const FeatureDescription = () => {
  return (
    <StyledFeatureDescriptionContainer>
      <MuiThemeProvider theme={textThemeDark}>
        <VerticalSpacer size={84} />
        <Grid
          container
          className="grid-container"
          justify="center"
          alignItems="flex-start"
        >
          <Grid container className="grid-box">
            <Typography color="primary" variant="subtitle1">
              DESIGNED BY DEVELOPERS
            </Typography>
            <VerticalSpacer size={12} />
            <Typography color="textPrimary" variant="h2">
              Powerful developer tools with a simple user-experience
            </Typography>
            <Grid container className="developer-features">
              <Grid item xs>
                <VerticalSpacer size={30} />
                <Typography color="textPrimary" variant="subtitle1">
                  Easy Build & Deployment
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Simply connect your repo and you're off! KintoHub can build
                  and deploy your code as-is.
                </Typography>
                <VerticalSpacer size={10} />
                <Typography color="textPrimary" variant="subtitle1">
                  Logs
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Drill down and debug your issues with real time logs.
                </Typography>
              </Grid>

              <Grid item xs>
                <VerticalSpacer size={30} />
                <Typography color="textPrimary" variant="subtitle1">
                  Advanced Configurations
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Click your way to cost effective development or scalable
                  production environments.
                </Typography>
                <VerticalSpacer size={10} />
                <Typography color="textPrimary" variant="subtitle1">
                  Command Line Interface (CLI)
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Use our CLI tools to connect tunnel to your secure databases.
                </Typography>
                <VerticalSpacer size={30} />
              </Grid>
            </Grid>
            <ActionButton
              variant="contained"
              color="primary"
              buttonTitle={"Try for Free"}
              link={"https://app.kintohub.com/auth/sign-up"}
            />
            <VerticalSpacer size={20} />
          </Grid>

          <Grid item>
            <img
              className="dev-tools"
              src={KintoDeveloperTools}
              alt="developer tools"
            ></img>
          </Grid>
        </Grid>
        <div className="black-slant-bg-wrapper"></div>
        <VerticalSpacer size={84} />
      </MuiThemeProvider>
    </StyledFeatureDescriptionContainer>
  )
}

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          keywords={[
            `kintohub`,
            `micro-services`,
            `backend`,
            `api`,
            `deployment`,
            `vercel`,
            `render`,
            `heroku`,
          ]}
        />
        <NavBar />
        <Hero />
        <FeatureDescription />
        <Comparison />
        <Showcase />
        <Testimonial />
        <CallToAction />
        <Footer />
      </Layout>
    )
  }
}

export default HomePage
