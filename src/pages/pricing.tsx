import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"
import SEO from "../components/seo"
import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import Layout from "../components/Layout"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import Typography from "@material-ui/core/Typography/Typography"
import NavBar from "../components/NavBar"
import Card from "@material-ui/core/Card/Card"
import PricingHeroBg from "../images/hero-bg-pricing.svg"
import { VerticalSpacer } from "../components/Spacer"
import Grid from "@material-ui/core/Grid/Grid"
import { MuiThemeProvider } from "@material-ui/core"
import { bps, textThemeDark } from "../../plugins/custom-mui-theme/theme"
import ActionButton from "../components/Button"
import Divider from "@material-ui/core/Divider/Divider"
import PayAsYouGoBg from "../images/examples-chart.svg"
import SnoozeRoundedIcon from "@material-ui/icons/SnoozeRounded"
import DataUsageRoundedIcon from "@material-ui/icons/DataUsageRounded"
import WebRoundedIcon from "@material-ui/icons/WebRounded"
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded"
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon"
import PricingCalculator from "../components/PricingCalculator"
import Box from "@material-ui/core/Box/Box"
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded"
import { SvgIconComponent } from "@material-ui/icons"

type PricingCardProps = {
  serviceType: string
  allowedUsage: string
  serviceDescription: string
}

const StyledPricingCard = styled(Card)`
  width: 500px;
  min-width: 500;
  ${bps.down("xs")} {
    max-width: 500px;
    min-width: auto;
    min-height: auto;
  }
  height: 170px;
  margin: 16px 12px;
  padding: 22px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
`

const PricingCard = ({
  serviceType,
  allowedUsage,
  serviceDescription,
}: PricingCardProps) => {
  return (
    <StyledPricingCard>
      <MuiThemeProvider theme={textThemeDark}>
        <Typography variant="h6" color="textPrimary">
          {serviceType}
        </Typography>
        <VerticalSpacer size={5} />
        <Typography variant="h3" color="textPrimary">
          {allowedUsage}
        </Typography>{" "}
        <VerticalSpacer size={10} />
        <Typography variant="subtitle2" color="textPrimary">
          {serviceDescription}
        </Typography>
      </MuiThemeProvider>
    </StyledPricingCard>
  )
}

const StyledPricingHeroContainer = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${PricingHeroBg});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
`

const PricingHero = () => {
  return (
    <StyledPricingHeroContainer>
      <VerticalSpacer size={150} />
      <Typography variant="h2" color="textPrimary">
        Start for free, then pay to scale.
      </Typography>
      <VerticalSpacer size={16} />
      <Typography variant="body2" color="textSecondary">
        Flexible pay-as-you-go. Simple and no hidden costs.
      </Typography>
      <VerticalSpacer size={120} />
    </StyledPricingHeroContainer>
  )
}

const StyledPricingDetailContainer = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.primary.contrastText};

  .divider {
    height: 1px;
    background-color: ${props => props.theme.palette.divider};
    width: 55%;
  }
`
const PricingDetail = () => {
  return (
    <StyledPricingDetailContainer>
      <Box marginY={-8}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <PricingCard
              serviceType={"Static Websites"}
              allowedUsage={"FREE"}
              serviceDescription={
                "HTML, Javascript, Gatsby, React, Vue & more."
              }
            />
          </Grid>
          <Grid item>
            <PricingCard
              serviceType={"Memory"}
              allowedUsage={"Up to 1 GB Free"}
              serviceDescription={
                "Free plan includes 3 services with 256 MB each. $2 per gb month pay-as-you-go."
              }
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <PricingCard
              serviceType={"CPU Shared"}
              allowedUsage={"Up to 3 Shared vCPU Free"}
              serviceDescription={
                "Dedicated vCPU starting at $1.5 USD /month on pay-as-you-go."
              }
            />
          </Grid>
          <Grid item>
            <PricingCard
              serviceType={"Storage"}
              allowedUsage={"Up to 1 GB Persistent Data Free"}
              serviceDescription={"$.028 per GB/month on pay-as-you-go."}
            />
          </Grid>
        </Grid>
      </Box>
      <VerticalSpacer size={96} />
      <ActionButton
        variant="contained"
        buttonTitle="Try for Free"
        startIcon={<PowerSettingsNewIcon />}
        link={"https://app.kintohub.com/auth/sign-up"}
      />
      <VerticalSpacer size={54} />
      <Divider className="divider" />
      <VerticalSpacer size={54} />

      <MuiThemeProvider theme={textThemeDark}>
        <Typography variant="h1" color="textPrimary" align="center">
          Get full control of your cloud resources.
        </Typography>
        <VerticalSpacer size={20} />
        <Typography variant="body1" color="textPrimary" align="center">
          Configure your app to use the only resources you need.
        </Typography>
        <VerticalSpacer size={40} />
        <PricingCalculator />
      </MuiThemeProvider>
    </StyledPricingDetailContainer>
  )
}

type ExampleCardProps = {
  cardIcon: SvgIconComponent
  serviceName: string
  serviceType: string
  serviceDescription: string
  memory: string
  memoryPrice: String
  cpu: string
  cpuPrice: string
  minutesOrStorage: string
  minutesOrStoragePrice: string
  bandwidth: string
  bandwidthPrice: string
  sleep: string
  total: string
  totalPrice: string
}

const StyledExampleCard = styled.div`
  width: 330px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
  background-color: ${props => props.theme.palette.background.paper};
  border-radius: 8px;
  margin: 16px;
  padding: 16px 20px;
  position: relative;

  .example-card-icon {
    margin: 8px 18px;
    right: 0;
    position: absolute;
    height: 45px;
    width: 45px;
    color: ${props => props.theme.palette.background.default};
  }
`

const ExampleCard = ({
  cardIcon,
  serviceName,
  serviceType,
  serviceDescription,
  memory,
  memoryPrice,
  cpu,
  cpuPrice,
  minutesOrStorage,
  minutesOrStoragePrice,
  bandwidth,
  bandwidthPrice,
  sleep,
  total,
  totalPrice,
}: ExampleCardProps) => {
  return (
    <StyledExampleCard>
      <MuiThemeProvider theme={textThemeDark}>
        <SvgIcon>{cardIcon}</SvgIcon>

        <Typography variant="h6" color="textPrimary">
          {serviceName}
        </Typography>
        <VerticalSpacer size={5} />
        <Typography variant="h3" color="textPrimary">
          {serviceType}
        </Typography>
        <VerticalSpacer size={5} />
        <Typography variant="body2" color="textSecondary">
          {serviceDescription}
        </Typography>
        <VerticalSpacer size={15} />
        <Divider color="primary" />

        <VerticalSpacer size={15} />
        <Grid container spacing={2}>
          <Grid xs={9} item>
            <Typography variant="body2" color="textPrimary">
              {memory}
            </Typography>
          </Grid>
          <Grid xs={2} item>
            <Typography variant="h6" color="textPrimary">
              {memoryPrice}
            </Typography>
          </Grid>
          <Grid xs={9} item>
            <Typography variant="body2" color="textPrimary">
              {cpu}
            </Typography>
          </Grid>
          <Grid xs={2} item>
            <Typography variant="h6" color="textPrimary">
              {cpuPrice}
            </Typography>
          </Grid>
          <Grid xs={9} item>
            <Typography variant="body2" color="textPrimary">
              {minutesOrStorage}
            </Typography>
          </Grid>
          <Grid xs={2} item>
            <Typography variant="h6" color="textPrimary">
              {minutesOrStoragePrice}
            </Typography>
          </Grid>
          <Grid xs={9} item>
            <Typography variant="body2" color="textPrimary">
              {bandwidth}
            </Typography>
          </Grid>
          <Grid xs={2} item>
            <Typography variant="h6" color="textPrimary">
              {bandwidthPrice}
            </Typography>
          </Grid>
          <Grid xs={9} item>
            <Typography variant="body2" color="textPrimary">
              {sleep}
            </Typography>
          </Grid>
          <Grid xs={2} item></Grid>
          <Grid xs={12} item>
            <Divider color="primary" />
          </Grid>
          <Grid xs={9} item>
            <Typography variant="body2" color="textPrimary">
              {total}
            </Typography>
          </Grid>
          <Grid xs={2} item>
            <Typography variant="body1" color="textPrimary">
              {totalPrice}
            </Typography>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </StyledExampleCard>
  )
}

const StyledPayAsYouGoExampleContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.palette.background.default};
  display: flex;
  z-index: -999;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;

  .bg-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    z-index: -1;
    bottom: 0;
    background-size: contain;
  }

  .example-card {
    position: relative;
    z-index: 10;
  }
`

const PayAsYouGoExample = () => {
  return (
    <StyledPayAsYouGoExampleContainer>
      <VerticalSpacer size={86} />
      <Typography variant="h1" color="textPrimary">
        Pay-as-you-go examples
      </Typography>
      <VerticalSpacer size={12} />
      <Typography variant="body1" color="textSecondary">
        Free Plan discounts included and cost optimization is enabled in service
        examples. Once you input your credit card your free resources become
        flexible within Advanced Options.
      </Typography>
      <VerticalSpacer size={62} />
      <div className="example-card">
        <img src={PayAsYouGoBg} className="bg-wrapper"></img>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <ExampleCard
              cardIcon={WebRoundedIcon}
              serviceName={"Example Dev"}
              serviceType={"Web App"}
              serviceDescription={"Simple Backend Node"}
              memory={"512 MB Memory"}
              memoryPrice={"$0"}
              cpu={"Shared CPU"}
              cpuPrice={"$0"}
              minutesOrStorage={"3000 Mins Deploy Time"}
              minutesOrStoragePrice={"$0"}
              bandwidth={"10 GB Bandwidth"}
              bandwidthPrice={"$0"}
              sleep={"Sleep Mode"}
              total={"Monthly Total"}
              totalPrice={"$0"}
            />
          </Grid>
          <Grid item>
            <ExampleCard
              cardIcon={DataUsageRoundedIcon}
              serviceName={"Example Dev"}
              serviceType={"MongoDB"}
              serviceDescription={"Simple Database"}
              memory={"128 MB Memory (cost opt)"}
              memoryPrice={"$0"}
              cpu={"0.1 vCPU (dedicated)"}
              cpuPrice={"$1.5"}
              minutesOrStorage={"2 GB Persistent Storage"}
              minutesOrStoragePrice={"$0.56"}
              bandwidth={"10 GB Bandwidth"}
              bandwidthPrice={"$0"}
              sleep={"Sleep Mode"}
              total={"Monthly Total"}
              totalPrice={"$2.06"}
            />
          </Grid>
          <Grid item>
            <ExampleCard
              cardIcon={CategoryRoundedIcon}
              serviceName={"Example Prod"}
              serviceType={"Backend API"}
              serviceDescription={"Heavy-duty Business Logic"}
              memory={"4 GB Memory"}
              memoryPrice={"$8"}
              cpu={"2 vCPU (dedicated)"}
              cpuPrice={"$30"}
              minutesOrStorage={"4000 Mins Deploy Time"}
              minutesOrStoragePrice={"$1"}
              bandwidth={"120 GB Bandwidth"}
              bandwidthPrice={"$12"}
              sleep={"Never Sleeps"}
              total={"Monthly Total"}
              totalPrice={"$51"}
            />
          </Grid>
        </Grid>
      </div>
      <VerticalSpacer size={100} />
    </StyledPayAsYouGoExampleContainer>
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
        <PricingHero />
        <PricingDetail />
        <PayAsYouGoExample />
        <CallToAction
          title={"All your App's needs in one place. Try for Free."}
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
