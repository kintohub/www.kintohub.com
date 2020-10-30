import Footer from "components/Footer"
import NavBar from "components/NavBar"
import Hero from "components/Hero"
import CallToAction from "components/Calltoaction"
import SEO from "components/seo"
import Testimonial from "components/Testimonial"
import React from "react"
import Helmet from "react-helmet"
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

const StyledFeatureDescriptionContainer = styled.div`
  width: 100%;
  height: auto;

  ${bps.down("sm")} {
    padding: 0px 16px;
    width: auto;
  }

  background-color: ${props => props.theme.palette.background.paper};
  overflow: hidden;

  .grid-container {
    flex-direction: row;
    align-content: center;
    ${bps.down("sm")} {
      flex-direction: column;
    }
  }

  .developer-features {
    ${bps.down("sm")} {
      flex-direction: column;
    }
  }

  .grid-box {
    width: 500px;
    ${bps.down("xs")} {
      padding:0px 16px;
      width: 100%;
    }
  }

  .dev-tools {
    ${bps.down("sm")} {
      padding:16px;
      max-height: auto;
      max-width: 100%;
      align-items: center;
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
          spacing={4}
        >
          <Grid item container className="grid-box">
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
          </Grid>

          <Grid item>
            <img
              className="dev-tools"
              src={KintoDeveloperTools}
              alt="developer tools"
            ></img>
          </Grid>
        </Grid>
        <VerticalSpacer size={48} />
      </MuiThemeProvider>
    </StyledFeatureDescriptionContainer>
  )
}

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="KintoHub - The best way to deploy fullstack apps"
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
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[
            {
              name: "KintoHub",
              content: "Sample page",
            },
          ]}
          title={"Kintohub"}
        />
        <NavBar />
        <Hero />
        <FeatureDescription />
        <Comparison />
        <Showcase />
        <Testimonial />
        <CallToAction
          title={"Ready to start deploying your app?"}
          subtitle={"Deploy for free. No CC required."}
          buttonTitle={"Start Deploying"}
          buttonIcon={PowerSettingsNewIcon}
          variant="contained"
        />
        <Footer />
      </Layout>
    )
  }
}

export default HomePage
