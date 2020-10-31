import Footer from "components/Footer"
import NavBar from "components/NavBar"
import CallToAction from "components/Calltoaction"
import SEO from "components/seo"
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "components/Layout"
import HeroBg from "resources/background/contact_compressed.svg"
import {
  Divider,
  Grid,
  Hidden,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import ContactForm from "components/Contact-from"
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
  padding: 0px 16px;
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

const StyledExploreOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: left;
  text-align: left;
  height: auto;
  width: 100%;
  overflow: hidden;
  margin-left: 16px;

  a {
    text-decoration: none;
  }

  .divider {
    height: 1px;
    width: 100%;
    color: ${props => props.theme.palette.divider};
  }

  ${bps.down("md")} {
    max-width: 600px;
    width: auto;
  }

  ${bps.down("sm")} {
    margin: 48px 16px 0px 16px;
    width: auto;
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
      <Grid container justify="center" alignItems="center" className="contact">
        <Grid item>
          <ContactForm />
        </Grid>
        <AutoGrowSpacer size={0.08} />
        <Grid item>
          <ExploreOptions />
        </Grid>
      </Grid>

      <Hidden smDown>
        <VerticalSpacer size={124} />
      </Hidden>
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
