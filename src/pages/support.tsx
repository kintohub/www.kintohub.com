import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import CallToAction from "../components/CallToAction"
import SEO from "../components/seo"
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "../components/Layout"
import HeroBg from "../images/hero-bg-contact.svg"
import ForumRoundedIcon from "@material-ui/icons/ForumRounded"
import { Divider, Grid, MuiThemeProvider, Typography } from "@material-ui/core"
import TextField from "@material-ui/core/TextField/TextField"
import CallToActionButton from "../components/Button"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import SendIcon from "@material-ui/icons/Send"
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded"
import { VerticalSpacer } from "../components/Spacer"
import { textThemeDark } from "../../plugins/custom-mui-theme/theme"
import ContactSupportRoundedIcon from "@material-ui/icons/ContactSupportRounded"

const StyledHeaderContainer = styled.div`
  width: 100%;
  height: auto;
  background-position: center;
  background-image: url(${HeroBg});
  background-size:cover;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
`
const SupportHeader = () => {
  return (
    <StyledHeaderContainer>
      <VerticalSpacer size={126} />
      <Typography variant="h2" color="textPrimary" align="center">
        Contact Our Team
      </Typography>
      <VerticalSpacer size={16} />
      <Typography variant="body2" color="textSecondary" align="center">
        Let us know how we can help. If you need support, it’s best to join our
        Discord to chat with our developers.
      </Typography>
      <VerticalSpacer size={96} />
    </StyledHeaderContainer>
  )
}

const StyledFormContainer = styled.div`
  height: auto;
  width: 500px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  text-align: left;

  .form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 30px;
  }

  .message-button {
    width: 180px;
  }
`

const ContactForm = () => {
  return (
    <StyledFormContainer>
      <MuiThemeProvider theme={textThemeDark}>
        <form noValidate autoComplete="off" className="form">
          <TextField
            id="outlined-basic"
            label="Message Type"
            variant="outlined"
          />
          <VerticalSpacer size={24} />
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <VerticalSpacer size={24} />
          <TextField
            id="outlined-basic"
            label="Laste Name"
            variant="outlined"
          />
          <VerticalSpacer size={24} />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />{" "}
          <VerticalSpacer size={24} />
          <TextField
            id="outlined-basic"
            rows={6}
            multiline
            label="How can we help?"
            variant="outlined"
          />
          <VerticalSpacer size={24} />
          <CallToActionButton
            className="message-button"
            buttonTitle={"Send Message"}
            startIcon={<SendIcon />}
            variant="contained"
          />
          <VerticalSpacer size={24} />
          <Typography align="left" variant="subtitle2" color="textSecondary">
            Make sure the email is correct so we can reach you.
            <div>Usually we respond within 24 hours.</div>
          </Typography>
        </form>
      </MuiThemeProvider>
    </StyledFormContainer>
  )
}

const StyledNextActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;
  text-align: left;
  margin: 64px;

  a {
    text-decoration: none;
  }

  .grid-container {
    position: relative;
  }

  .divider {
    height: 1px;
    width: 100%;
    color: rgba(0, 0, 0, 0.3);
  }

  .contact-option-icon {
    position: absolute;
    color: #717275;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0;
  }
`
const NextAction = () => {
  return (
    <StyledNextActionContainer>
      <MuiThemeProvider theme={textThemeDark}>
        
      </MuiThemeProvider>
    </StyledNextActionContainer>
  )
}

const StyledContactUsBodyContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  background-color:#f7f9ff;

  .contact-div {
    margin: 0px auto;
  }
`

const ContactUsBody = () => {
  return (
    <StyledContactUsBodyContainer>
      <div className="contact-div">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={6}
        >
          <ContactForm />
          <NextAction />
        </Grid>
      </div>
      <VerticalSpacer size={124} />
    </StyledContactUsBodyContainer>
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
        <SupportHeader />
        <ContactUsBody />
        <CallToAction
          title={"The best way to deploy full stack apps"}
          subtitle={"Deploy for free. No CC required."}
          buttonTitle={"Try for Free"}
          buttonIcon={PowerSettingsNewIcon}
          variant="contained"
        />
        <Footer />
      </Layout>
    )
  }
}

export default HomePage
