import React, { Props } from "react"
import styled from "styled-components"
import { Grid } from "@material-ui/core"
import KintoFooterIcon from "../images/kinto-footer.svg"
import { VerticalSpacer } from "./Spacer"
import { bps } from "../../plugins/custom-mui-theme/theme"

const StyledDiv = styled.div`
  height: auto;
  background-color: #ffffff;

  .list-header {
    font-size: 18px;
    font-weight: 500;
    margin: 50px 0px 25px 0px;
  }

  .footer {
    flex-direction: row;

    ${bps.down("md")} {
      flex-direction: column;
    }
  }

  ul {
    list-style-type: none;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.5px;
    line-height: 30px;
  }
`

export default () => {
  return (
    <StyledDiv>
      <div>
        <Grid
          container
          className="footer"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Grid item>
            <ul>
              <li className="list-header">
                <img src={KintoFooterIcon} alt="KintoHub" />
              </li>
              <li>Create Account</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Status</li>
            </ul>
          </Grid>
          <Grid item>
            <ul>
              <li className="list-header">Community</li>
              <li>Discord Community</li>
              <li>Roadmap</li>
              <li>Request Features</li>
              <li>Report a Bug</li>
            </ul>
          </Grid>
          <Grid item>
            <ul>
              <li className="list-header">Connect</li>
              <li>GitHub</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>YouTube</li>
              <li>Linkedin</li>
            </ul>
          </Grid>
        </Grid>
      </div>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={3}>
          © KintoHub 2020. All rights reserved.
        </Grid>
        <Grid item xs={3}>
          Terms of Service | Privacy
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <VerticalSpacer size={16} />
    </StyledDiv>
  )
}
