import React from "react"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import { TestimonialCard } from "./Card"
import Grid from "@material-ui/core/Grid/Grid"
import TestimonialBg from "../images/TestimonialBg.png"

const StyledDiv = styled.div`
  width: 100%;
  height: 580px;
  align-items: center;
  padding-top: 80px;
  background-color: #f7f9ff;
  display: flex;
  flex-direction: column;
  background-image: url(${TestimonialBg});
  

  .heading {
    font-size: 34px;
    font-weight: 300;
    text-align: center;
    letter-spacing: -0.53px;
    line-height: 40px;
  }

  .subheading {
    margin: 10px 0px 32px 0px;
    font-weight: normal;
    letter-spacing: 0.15px;
    line-height: 24px;
  }

  .intro-text {
    height: 24px;
    color: rgb(98, 0, 238);
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.15px;
    line-height: 24px;
  }

  span {
    color: rgb(98, 0, 238);
  }
`

export default () => {
  return (
    <StyledDiv>
      <Typography className="intro-text">Dev Community</Typography>
      <Typography className="heading">
        Built for <b>developers</b> like you
      </Typography>
      <Typography className="subheading">
        Real responses from our <span>Discord support</span> channel from our
        members.
      </Typography>
      <Grid container direction="row" justify="center" alignItems="center">
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
    </StyledDiv>
  )
}
