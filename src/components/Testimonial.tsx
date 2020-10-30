import React from "react"
import styled from "styled-components"
import { MuiThemeProvider, Typography } from "@material-ui/core"
import { TestimonialCard } from "components/Card"
import Grid from "@material-ui/core/Grid/Grid"
import TestimonialBg from "resources/background/testimonial.png"
import { bps, textThemeDark } from "theme/index"
import { VerticalSpacer } from "components/Spacer"

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  background-image: url(${TestimonialBg});

  span {
    color: ${props => props.theme.palette.primary.main};
  }

  ${bps.down("md")} {
    .grid-container {
      flex-direction: column;
    }
  }
`

export default () => {
  return (
    <StyledDiv>
      <MuiThemeProvider theme={textThemeDark}>
        <VerticalSpacer size={80} />
        <Typography align="center" variant="subtitle1" color="primary">
          DEV COMMUNITY
        </Typography>
        <Typography align="center" variant="h1" color="textPrimary">
          Built for <b>developers</b> like you
        </Typography>
        <VerticalSpacer size={12} />
        <Typography align="center" variant="body2" color="textSecondary">
          Real responses from our{" "}
          <span>
            <a target="_blank" href="https://kintohub.com/discord">
              <b> Discord support</b>
            </a>
          </span>{" "}
          channel from our members.
        </Typography>
        <VerticalSpacer size={32} />
        <Grid
          container
          direction="row"
          className="grid-container"
          justify="center"
          alignItems="center"
        >
          <TestimonialCard
            avatarText={"N"}
            testimonialText={
              "“I can’t believe I’m just now finding this amazing service. It’s a great alternative to Heroku.”"
            }
          />
          <TestimonialCard
            avatarText={"H"}
            testimonialText={
              "“KintoHub is the only next-gen cloud provider that can spin up a Mongo, Postgres or MySQL instance alongside a serverless backend API within a few clicks.”"
            }
          />
          <TestimonialCard
            avatarText={"F"}
            testimonialText={
              "“I’ve been looking for something Heroku-like, but where I can host a bunch of small, low-traffic apps more cheaply, so this seems super promising.”"
            }
          />
        </Grid>
        <VerticalSpacer size={100} />
      </MuiThemeProvider>
    </StyledDiv>
  )
}
