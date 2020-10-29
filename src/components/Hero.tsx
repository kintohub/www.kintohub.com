import React from "react"
import styled from "styled-components"
import HeroBg from "resources/background/landing.png"
import { Typography } from "@material-ui/core"
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
import mongo from "resources/icons/catalog/mongo.svg"
import mysql from "resources/icons/catalog/mysql.svg"
import postgresql from "resources/icons/catalog/postgresql.svg"
import redis from "resources/icons/catalog/redis.svg"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkRoundedIcon from "@material-ui/icons/LinkRounded"
import { bps } from "theme"

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  background: url(${HeroBg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 16px;
  background-color: ${props => props.theme.palette.background.paper};

  .heading {
    font-size: 60px;
    max-width: 764px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.palette.primary.light};
  }

  .feature-container .feature-suggestion-container {
    margin: 20px;
  }

  .grid-container {
    display: flex;
    flex-direction: row;
    ${bps.down("md")} {
      justify-items: space-evenly;
      flex-direction: column;
    }
  }

  .icons {
    width: 30px;
    height: 30px;
    margin-right: 16px;
  }
`

export default () => {
  return (
    <StyledDiv>
      <VerticalSpacer size={200} />
      <Typography align="center" className="heading" color="textPrimary">
        The best way to deploy fullstack apps
      </Typography>
      <VerticalSpacer size={34} />
      <ActionButton
        variant="contained"
        buttonTitle={"Start Deploying"}
        startIcon={<PowerSettingsNewIcon />}
        link={"https://app.kintohub.com/auth/sign-up"}
      />
      <VerticalSpacer size={20} />
      <Typography variant="caption" color="textSecondary">
        No credit card required.
      </Typography>
      <VerticalSpacer size={85} />
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
      >
        <Grid item>
          <TechStackCard
            TechStackTitle={"Frontend"}
            TechStackDescription={
              "Static files, JAMStack sites, and dynamic web apps with SSR enabled can all be deployed with ease."
            }
            Category={"popular frameworks"}
            AvatarSrc={[angular, gatsby, hugo, nextjs, react, vue, more]}
          />
        </Grid>
        <Grid item>
          <TechStackCard
            TechStackTitle={"Backend"}
            TechStackDescription={
              "Scale APIs, consume messages with background workers or create repeatable jobs."
            }
            Category={"popular Languages"}
            AvatarSrc={[docker, node, golang, ruby, python, more]}
          />
        </Grid>
        <Grid item>
          <TechStackCard
            TechStackTitle={"Data & Storage"}
            TechStackDescription={
              "Scalable databases, queues, image, file, and in-memory cache are all possible on KintoHub. No 3rd party clouds required."
            }
            Category={"popular catalogs"}
            AvatarSrc={[mongo, postgresql, mysql, redis]}
          />
        </Grid>
      </Grid>

      <VerticalSpacer size={20} />

      <Grid container justify="center">
        <Grid item>
          <Typography variant="h6" color="textPrimary">
            Deploy an Existing Project with Git
          </Typography>
          <Typography color="textPrimary">
            Use our Git integrations with{" "}
            <a href="https://docs.kintohub.com/repository/github-apps">
              <b>GitHub </b>
            </a>{" "}
            or use an
            <a href="https://docs.kintohub.com/repository/import%20url">
              <b>import url.</b>
            </a>
          </Typography>
          <VerticalSpacer size={8} />

          <a href="https://docs.kintohub.com/repository/github-apps">
            <GitHubIcon className="icons" color="secondary" />
          </a>

          <a
            className="import"
            href="https://docs.kintohub.com/repository/import%20url"
          >
            <LinkRoundedIcon className="icons" color="secondary" />
          </a>
        </Grid>
        <AutoGrowSpacer size={0.15} />
        <Grid item>
          <Typography variant="h6" color="textPrimary">
            Connect Your Custom Domains
          </Typography>
          <Typography color="textPrimary">
            Once deployed, your projects can be assigned to a custom domain.
          </Typography>
          <Typography color="textPrimary">
            <a href="https://docs.kintohub.com/anatomy/domains">
              <b>Learn more →</b>
            </a>
          </Typography>
        </Grid>
      </Grid>
      <VerticalSpacer size={82} />
    </StyledDiv>
  )
}
