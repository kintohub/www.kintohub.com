import React from "react"
import styled from "styled-components"
import HeroBgMobile from "resources/background/landing_mobile.svg"
import HeroBgDesktop from "resources/background/landing_desktop.svg"
import { MuiThemeProvider, Typography } from "@material-ui/core"
import ActionButton from "components/Button"
import { TechStackCard } from "components/Card"
import Grid from "@material-ui/core/Grid/Grid"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import { AutoGrowSpacer, VerticalSpacer } from "components/Spacer"
import angular from "resources/icons/fe/angular.svg"
import gatsby from "resources/icons/fe/gatsby.svg"
import hugo from "resources/icons/fe/hugo.svg"
import nextjs from "resources/icons/fe/nextjs.svg"
import react from "resources/icons/fe/react.svg"
import vue from "resources/icons/fe/vue.svg"
import more from "resources/icons/fe/more.svg"
import docker from "resources/icons/be/docker.svg"
import golang from "resources/icons/be/golang.svg"
import node from "resources/icons/be/node.svg"
import python from "resources/icons/be/python.svg"
import ruby from "resources/icons/be/ruby.svg"
import rust from "resources/icons/be/rust.svg"
import mongo from "resources/icons/catalog/mongo.svg"
import minio from "resources/icons/catalog/minio.svg"
import mysql from "resources/icons/catalog/mysql.svg"
import postgresql from "resources/icons/catalog/postgresql.svg"
import redis from "resources/icons/catalog/redis.svg"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkRoundedIcon from "@material-ui/icons/LinkRounded"
import { bps, textThemeDark } from "theme"
import Hidden from "@material-ui/core/Hidden/Hidden"
import WhiteSlantBg from "resources/background/white-slant.svg"

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  z-index: 1;
  background: url(${HeroBgDesktop}) no-repeat top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 16px;
  margin: 0 auto;
  position: relative;
  background-color: ${props => props.theme.palette.background.paper};

  ${bps.down("xs")} {
    background-size: 100%;
    margin-top: -1px;
    background: url(${HeroBgMobile}) no-repeat top center;
    background-color: ${props => props.theme.palette.background.paper};
  }

  .heading {
    font-size: 60px;
    max-width: 764px;
    font-weight: 500;
    color: ${props => props.theme.palette.text.primary};

    ${bps.down("md")} {
      font-size: 44px;
    }
  }

  .mobile-icons {
    ${bps.down("md")} {
      align-items: center;
      display: flex;
      flex-direction: row;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.palette.primary.dark};
  }

  .grid-container {
    ${bps.down("md")} {
      text-align: center;
      align-items: center;
      flex-direction: column;
    }
    ${bps.down("xs")} {
      color: ${props => props.theme.palette.common.black};
    }
  }

  .icons {
    width: 30px;
    height: 30px;
    margin-right: 16px;
    opacity: 50%;
    color: ${props => props.theme.palette.common.black};
  }

  .white-slant-bg-wrapper {
    background: url(${WhiteSlantBg}) no-repeat center;
    height: 500px;
    z-index: -1;
    bottom: -1px;
    position: absolute;
    width: 100%;
    background-size: cover;
    ${bps.down("md")} {
      height: 650px;
    }
    ${bps.down("xs")} {
      bottom: 100px;
    }
  }
`

export default () => {
  return (
    <StyledDiv>
      <Hidden smDown>
        <VerticalSpacer size={200} />
        <Typography align="center" className="heading">
          The best way to deploy fullstack apps
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <VerticalSpacer size={100} />
        <Typography align="center" className="heading">
          The best way to deploy fullstack apps
        </Typography>
      </Hidden>
      <VerticalSpacer size={34} />
      <ActionButton
        color="primary"
        variant="contained"
        buttonTitle={"Start Deploying"}
        startIcon={<PowerSettingsNewIcon />}
        link={"https://app.kintohub.com/auth/sign-up"}
      />
      <VerticalSpacer size={20} />
      <Typography variant="caption" color="textSecondary">
        No credit card required.
      </Typography>
      <Hidden smDown>
        <VerticalSpacer size={85} />
      </Hidden>
      <Hidden mdUp>
        <VerticalSpacer size={50} />
      </Hidden>
      <Typography variant="subtitle1" color="textPrimary" align="center">
        <div>
          KintoHub is an all-in-one deployment platform designed for fullstack
        </div>
        <div>developers by fullstack developers</div>
      </Typography>
      <VerticalSpacer size={90} />
      <Typography variant="body1">ALL YOUR APP'S NEEDS IN ONE PLACE</Typography>

      <VerticalSpacer size={70} />
      <Grid
        container
        className="grid-container"
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={2}></Grid>
        <Grid item xs={12} sm={10} lg>
          <TechStackCard
            techStackTitle={"Frontend"}
            techStackDescription={
              "Static files, JAMStack sites, and dynamic web apps with SSR enabled can all be deployed with ease."
            }
            chipColor={"blue"}
            category={"popular frameworks"}
            avatarSrc={[angular, gatsby, hugo, nextjs, react, vue, more]}
          />
        </Grid>
        <Grid item xs={12} sm={10} lg>
          <TechStackCard
            techStackTitle={"Backend"}
            techStackDescription={
              "Scale APIs, consume messages with background workers or create repeatable jobs."
            }
            chipColor={"green"}
            category={"popular Languages"}
            avatarSrc={[docker, node, golang, ruby, python, rust, more]}
          />
        </Grid>
        <Grid item xs={12} sm={10} lg>
          <TechStackCard
            techStackTitle={"Data & Storage"}
            techStackDescription={
              "Scalable databases, queues, image, file, and in-memory cache are all possible on KintoHub. No 3rd party clouds required."
            }
            chipColor={"yellow"}
            category={"popular catalogs"}
            avatarSrc={[mongo, postgresql, mysql, redis, minio]}
          />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <VerticalSpacer size={20} />
      <MuiThemeProvider theme={textThemeDark}>
        <Grid
          container
          className="grid-container"
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={2}></Grid>
          <Grid item md={12} lg={4}>
            <Grid container direction="column">
              <Typography variant="h6" color="textPrimary">
                Deploy an Existing Project with Git
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Use our Git integrations with{" "}
                <a href="https://docs.kintohub.com/repository/github-apps">
                  Github
                </a>{" "}
                or use an{" "}
                <a href="https://docs.kintohub.com/repository/import%20url">
                  import url
                </a>
              </Typography>
              <VerticalSpacer size={8} />
              <Grid container>
                <a href="https://docs.kintohub.com/repository/github-apps">
                  <GitHubIcon className="icons" />
                </a>
                <a
                  className="import"
                  href="https://docs.kintohub.com/repository/import%20url"
                >
                  <LinkRoundedIcon className="icons" />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} lg={4}>
            <Grid container direction="column">
              <Typography variant="h6" color="textPrimary">
                Connect Your Custom Domains
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Once deployed, your projects can be assigned to a custom domain.
              </Typography>
              <Typography variant="subtitle2">
                <a href="https://docs.kintohub.com/anatomy/domains">
                  Learn more →
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </MuiThemeProvider>
      <div className="white-slant-bg-wrapper"></div>
      <VerticalSpacer size={64} />
    </StyledDiv>
  )
}
