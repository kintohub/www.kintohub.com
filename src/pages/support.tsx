import Footer from "components/Footer"
import NavBar from "components/NavBar"
import CallToAction from "components/Calltoaction"
import SEO from "components/seo"
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "components/Layout"
import HeroBg from "resources/background/contact.svg"
import {
  Divider,
  Grid,
  Hidden,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core"
import TextField from "@material-ui/core/TextField/TextField"
import ActionButton from "components/Button"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import SendIcon from "@material-ui/icons/Send"
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded"
import { AutoGrowSpacer, VerticalSpacer } from "components/Spacer"
import { bps, textThemeDark } from "theme/index"
import ContactSupportRoundedIcon from "@material-ui/icons/ContactSupportRounded"
import ForumRoundedIcon from "@material-ui/icons/ForumRounded"

const StyledHeaderContainer = styled.div`
  width: 100%;
  height: auto;
  background-position: center;
  background-image: url(${HeroBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
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
  width: 500px;
  height: auto;
  overflow: hidden;

  ${bps.down("sm")} {
    width: auto;
    margin: -32px 16px 0px 16px;
  }

  background-color: ${props => props.theme.palette.background.paper};
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: -44px;

  .form {
    padding: 32px;
  }
`

const ContactForm = () => {
  return (
    <StyledFormContainer>
      <MuiThemeProvider theme={textThemeDark}>
        <form noValidate autoComplete="off" className="form">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <TextField
              id="outlined-basic"
              label="Message Type"
              variant="outlined"
              fullWidth
            />
            <VerticalSpacer size={24} />
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              fullWidth
            />
            <VerticalSpacer size={24} />
            <TextField
              id="outlined-basic"
              label="Laste Name"
              variant="outlined"
              fullWidth
            />
            <VerticalSpacer size={24} />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <VerticalSpacer size={24} />
            <TextField
              id="outlined-basic"
              rows={6}
              multiline
              label="How can we help?"
              variant="outlined"
              fullWidth
            />
            <VerticalSpacer size={24} />
            <ActionButton
              buttonTitle={"Send Message"}
              startIcon={<SendIcon />}
              variant="contained"
            />
            <VerticalSpacer size={24} />
            <Typography align="left" variant="subtitle2" color="textSecondary">
              Make sure the email is correct so we can reach you.
              <div>Usually we respond within 24 hours.</div>
            </Typography>
          </Grid>
        </form>
      </MuiThemeProvider>
    </StyledFormContainer>
  )
}

const StyledExploreOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;
  text-align: left;
  height: auto;
  overflow: hidden;

  a {
    text-decoration: none;
  }

  .divider {
    height: 1px;
    width: 100%;
    color: ${props => props.theme.palette.divider};
  }

  ${bps.down("sm")} {
    margin: 48px 16px 0px 16px;
  }

  .explore-option-icon {
    color: ${props => props.theme.palette.secondary.dark};
    width: 40px;
    height: 40px;
  }
`
const ExploreOptions = () => {
  return (
    <StyledExploreOptionsContainer>
      <MuiThemeProvider theme={textThemeDark}>
        <VerticalSpacer size={40} />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid container>
            <Hidden smDown>
              <Grid item xs={1}>
                <ForumRoundedIcon className="explore-option-icon" />
              </Grid>
            </Hidden>

            <Grid item xs={11}>
              <Typography variant="h6" color="textPrimary">
                Discord chat support
              </Typography>
              <VerticalSpacer size={5} />
              <Typography variant="subtitle2" color="textSecondary">
                Need help with your deployment? Chat with the Kinto dev team to
                solve your issues.
              </Typography>
              <VerticalSpacer size={5} />
              <a href="https://kintohub.com/discord" target="_blank">
                <Typography variant="subtitle2" color="primary">
                  Join KintoHub Discord →
                </Typography>
              </a>
            </Grid>
          </Grid>
          <VerticalSpacer size={22} />
          <Divider className="divider" />

          <VerticalSpacer size={22} />

          <Grid container>
            <Hidden smDown>
              {" "}
              <Grid item xs={1}>
                <LibraryBooksRoundedIcon className="explore-option-icon" />
              </Grid>
            </Hidden>

            <Grid item xs={11}>
              <Typography variant="h6" color="textPrimary">
                Read our documentation
              </Typography>
              <VerticalSpacer size={5} />
              <Typography variant="subtitle2" color="textSecondary">
                Explore all KintoHub has to offer by sifting through our
                features and our simple code examples.
              </Typography>
              <VerticalSpacer size={5} />
              <a href="https://docs.kintohub.com" target="_blank">
                <Typography variant="subtitle2" color="primary">
                  Go to docs →
                </Typography>
              </a>
            </Grid>
          </Grid>
          <VerticalSpacer size={22} />
          <Divider className="divider" />
          <VerticalSpacer size={22} />

          <Grid container>
            <Hidden smDown>
              <Grid item xs={1}>
                <ContactSupportRoundedIcon className="explore-option-icon" />
              </Grid>
            </Hidden>

            <Grid item xs={11}>
              <Typography variant="h6" color="textPrimary">
                Frequently Asked Questions
              </Typography>
              <VerticalSpacer size={5} />
              <Typography variant="subtitle2" color="textSecondary">
                Asking a general question? There’s a good chance that someone
                else did too.
              </Typography>
              <VerticalSpacer size={5} />
              <a href="https://kintohub.com" target="_blank">
                <Typography variant="subtitle2" color="primary">
                  Go to FAQ →
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </StyledExploreOptionsContainer>
  )
}

const StyledContactUsBodyContainer = styled.div`
  width: 100%;
  height: auto;

  .contact {
    align-items: flex-start;
    flex-direction: row;

    ${bps.down("sm")} {
      flex-direction: column;
      align-items: center;
    }
  }

  background-color: ${props => props.theme.palette.background.paper};
`

const ContactUsBody = () => {
  return (
    <StyledContactUsBodyContainer>
      <Grid
        container
        justify="center"
        alignItems="center"
        className="contact"
        spacing={4}
      >
        <Grid item>
          <ContactForm />
        </Grid>

        <Grid item>
          <ExploreOptions />
        </Grid>
      </Grid>

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
