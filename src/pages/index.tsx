import Footer from "../components/Footer"
import Header from "../components/NavBar"
import Hero from "../components/Hero"
import CallToAction from "../components/CallToAction"
import SEO from "../components/seo"
import Testimonial from "../components/Testimonial"
import React from "react"
import Helmet from "react-helmet"
import styled, { ThemeProvider } from "styled-components"
import Comparison from "../components/Comparison"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import Layout from "../components/Layout"
import KintoDeveloperTools from "../images/kintohub-developer-tools.svg"
import Grid from "@material-ui/core/Grid/Grid"
import { MuiThemeProvider, Typography } from "@material-ui/core"
import { VerticalSpacer } from "../components/Spacer"
import { bps, textThemeDark } from "../../plugins/custom-mui-theme/theme"

const StyledFeatureDescriptionContainer = styled.div`
  width: 100%;
  height: auto;
  background-color:#f7f9ff;
  overflow:hidden;


.grid-container{
  flex-direction: row;
  align-content:center;
  ${bps.down("xs")} {
      flex-direction: column;
    }
}
  

  .grid-box {
    width: 500px;
  }
`
const FeatureDescription = () => {
  return (
    <StyledFeatureDescriptionContainer>
      <MuiThemeProvider theme={textThemeDark}>
        <Grid container className="grid-container" justify="center" alignItems="flex-start" spacing={4}>
        
          <Grid item className="grid-box"><VerticalSpacer size={84} />
            <Typography color="primary" variant="subtitle1">
              DESIGNED BY DEVELOPERS
            </Typography>
            <VerticalSpacer size={12} />
            <Typography color="textPrimary" variant="h1">
              Powerful developer tools with a simple user-experience
            </Typography>
            <VerticalSpacer size={30} />
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs>
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
                <Typography color="textPrimary" variant="subtitle1">
                  Advanced Configurations
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Click your way to cost effective development or scalable production
                  environments. 
                </Typography>
                <VerticalSpacer size={10} />
                <Typography color="textPrimary" variant="subtitle1">
                  Command Line Interface (CLI)
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Use our CLI tools to connect tunnel to your secure databases.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <VerticalSpacer size={84} />
            <img src={KintoDeveloperTools}></img>
          </Grid>
        </Grid>
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
        <Header />
        <Hero />
        <FeatureDescription />
        <Comparison />
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
