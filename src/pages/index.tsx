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

import { MuiThemeProvider, Typography } from "@material-ui/core"
import { VerticalSpacer } from "components/Spacer"

import ActionButton from "components/Button"
import Showcase from "components/Showcase"

import CallToActionBg from "resources/background/calltoaction.svg"
import DevTools from "components/DevTools"



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
        startIcon={<PowerSettingsNewIcon />}
        buttonTitle={"Start Deploying"}
        link={"https://app.kintohub.com/auth/sign-up"}
      />
      <VerticalSpacer size={142} />
    </StyledCallToActionContainer>
  )
}

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
        title=""
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
        <DevTools />
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
