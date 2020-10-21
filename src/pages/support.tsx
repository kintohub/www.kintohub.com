import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import CallToAction from "../components/Calltoaction"
import SEO from "../components/seo"
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "../components/Layout"
import HeroBg from "../images/Hero.png"
import ForumIcon from "@material-ui/icons/Forum"
import { Button, Grid, Typography } from "@material-ui/core"
import TextField from "@material-ui/core/TextField/TextField"
import { CallToActionButton, SimpleButton } from "../components/Button"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import { typography } from "../../plugins/custom-mui-theme/theme"
import { Link } from "gatsby"

const SupportHeader = () => {
  const StyledDiv = styled.div`
    width: 100%;
    height: 321px;
    background-position: center;
    background-image: url(${HeroBg});
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .title {
      color: rgba(255, 255, 255, 0.87);
      font-size: 30px;
      font-weight: 500;
      letter-spacing: -0.25px;
      line-height: 38px;
      padding-top: 126px;
    }
    .subtitle {
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
      letter-spacing: 0.1px;
      line-height: 24px;
      font-size: 14px;
      width: 500px;
      text-align: center;
    }
  `

  return (
    <StyledDiv>
      <div className="container">
        <Typography className="title">Contact Our Team</Typography>
        <Typography className="subtitle">
          Let us know how we can help. If you need support, it’s best to join
          our Discord to chat with our developers.
        </Typography>
      </div>
    </StyledDiv>
  )
}

const ContactForm = () => {
  const StyledDiv = styled.div`
    height: 681px;
    width: 500px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
      0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    .form {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 30px;
    }

    .form-field {
      margin-bottom: 30px;
    }
  `

  return (
    <StyledDiv>
      <form noValidate autoComplete="off" className="form">
        <TextField
          id="outlined-basic"
          label="Message Type"
          variant="outlined"
          className="form-field"
        />
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          className="form-field"
        />
        <TextField
          id="outlined-basic"
          label="Laste Name"
          variant="outlined"
          className="form-field"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="form-field"
        />
        <TextField
          id="outlined-basic"
          rows={4}
          multiline
          label="How can we help?"
          variant="outlined"
          className="form-field"
        />

        <CallToActionButton
          title={"Send Message"}
          startIcon={PowerSettingsNewIcon}
        />
      </form>
    </StyledDiv>
  )
}

const NextActions = () => {
  const StyledDiv = styled.div`
    margin: 64px;

    .action {
      width: 447px;
      height: 95px;
      text-align: left;
    }
  `

  return (
    <StyledDiv>
      <div className="action">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div>
            <ForumIcon />
          </div>
          <div>
            <Typography variant="h6"> Discord chat support</Typography>
            <Typography variant="body2">
              Need help with your deployment? Chat with the Kinto dev team to
              solve your issues.
            </Typography>
            <Link to="https://kintohub.com/discord">
              <Typography variant="body2" color="primary">
                Join KintoHub Discord →
              </Typography>
            </Link>
          </div>
        </Grid>
      </div>
      <div className="action">
        <Typography variant="h6">Read our documentation</Typography>
        <Typography variant="body2">
          Explore all KintoHub has to offer by sifting through our features and
          our simple code examples.
        </Typography>
        <Link to="https://docs.kintohub.com">
          <Typography variant="body2" color="primary">
            Go to docs →
          </Typography>
        </Link>
      </div>
      <div className="action">
        <Typography variant="h6"> Frequently Asked Questions</Typography>
        <Typography variant="body2">
          Asking a general question? There’s a good chance that someone else did
          too.
        </Typography>
        <Link to="https://kintohub.com">
          <Typography variant="body2" color="primary">
            Go to FAQ →
          </Typography>
        </Link>
      </div>
    </StyledDiv>
  )
}

const ContactUsBody = () => {
  const StyledDiv = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;

    .contact-div {
      margin: 0px auto;
    }
  `

  return (
    <StyledDiv>
      <div className="contact-div">
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={6}
        >
          <ContactForm />
          <NextActions />
        </Grid>
      </div>
    </StyledDiv>
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
        />
        <Footer />
      </Layout>
    )
  }
}

export default HomePage
