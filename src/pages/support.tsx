import Footer from "components/Footer"
import NavBar from "components/NavBar"
import ActionButton from "components/Button"
import React from "react"
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
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import ContactForm from "components/Contact-form"
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded"
import { AutoGrowSpacer, VerticalSpacer } from "components/Spacer"
import { bps, textThemeDark } from "theme/index"
import ContactSupportRoundedIcon from "@material-ui/icons/ContactSupportRounded"
import ForumRoundedIcon from "@material-ui/icons/ForumRounded"
import SEO from "components/seo"
import Box from "@material-ui/core/Box/Box"

const StyledHeaderContainer = styled.div`
  width: 100%;
  height: auto;
  background-position: center;
  background-image: url(${HeroBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0px 16px;

  a {
    color: ${props => props.theme.palette.primary.dark};
  }
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
        Let us know how we can help. If you need support, it’s best to{" "}
        <span>
          {" "}
          <a href="https://kintohub.com/discord">join our Discord</a>{" "}
        </span>{" "}
        to chat with our developers.
      </Typography>
      <VerticalSpacer size={96} />
    </StyledHeaderContainer>
  )
}

const StyledExploreOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;
  text-align: left;
  height: auto;
  width: 100%;

  a {
    text-decoration: none;
  }

  .divider {
    height: 1px;
    width: 100%;
    color: ${props => props.theme.palette.divider};
  }

  .explore-option-icon {
    color: ${props => props.theme.palette.secondary.dark};
    width: 40px;
    height: 40px;
    margin: 4px 10px;
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
              <ForumRoundedIcon className="explore-option-icon" />
            </Hidden>

            <Grid item xs={10}>
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
              <LibraryBooksRoundedIcon className="explore-option-icon" />
            </Hidden>

            <Grid item xs={10}>
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
              <ContactSupportRoundedIcon className="explore-option-icon" />
            </Hidden>

            <Grid item xs={10}>
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
        <VerticalSpacer size={64} />
      </MuiThemeProvider>
    </StyledExploreOptionsContainer>
  )
}

const StyledContactUsBodyContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 24px;
  .contact {
    align-items: flex-start;
    justify-items: center;
    flex-direction: row;
    ${bps.down("md")} {
      flex-direction: column;
      align-items: center;
    }
  }

  background-color: ${props => props.theme.palette.secondary.light};
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
        <Grid item xs={2}></Grid>
        <Grid item xs lg={4}>
          <ContactForm />
        </Grid>
        <Grid item xs lg={4}>
          <ExploreOptions />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <Hidden smDown>
        <VerticalSpacer size={124} />
      </Hidden>
    </StyledContactUsBodyContainer>
  )
}

const StyledCallToActionContainer = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  background-color: #06002d;
`
const CallToAction = () => {
  return (
    <StyledCallToActionContainer>
      <VerticalSpacer size={64} />
      <Typography align="center" variant="h2" color="textPrimary">
        The best way to deploy full stack apps
      </Typography>
      <VerticalSpacer size={12} />
      <Typography variant="body1" align="center" color="textPrimary">
        Deploy for free. No CC required.
      </Typography>
      <VerticalSpacer size={40} />

      <ActionButton
        color="primary"
        variant={"contained"}
        startIcon={<PowerSettingsNewIcon />}
        buttonTitle={"Try for Free"}
        link={"https://app.kintohub.com/auth/sign-up"}
      />

      <VerticalSpacer size={75} />
    </StyledCallToActionContainer>
  )
}

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Support"
          keywords={[`kintohub`, `contact`, `support`, `correspondance`]}
        />

        <NavBar />
        <SupportHeader />
        <ContactUsBody />
        <CallToAction />
        <Footer />
      </Layout>
    )
  }
}

export default HomePage
