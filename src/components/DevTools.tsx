import BlackSlantBg from "resources/background/black-slice.svg"
import KintoDeveloperTools from "resources/icons/developertools.svg"
import Grid from "@material-ui/core/Grid/Grid"
import { bps, textThemeDark } from "theme"
import styled from "styled-components"
import React from "react"
import { AutoGrowSpacer, VerticalSpacer } from "components/Spacer"
import { MuiThemeProvider } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography/Typography"
import ActionButton from "components/Button"
import Hidden from "@material-ui/core/Hidden/Hidden"

const StyledFeatureDescriptionContainer = styled.div`
  width: 100%;
  height: auto;

  position: relative;
  background-color: ${props => props.theme.palette.secondary.light};

  .dev-tools-image {
    z-index: 2;
    width: 90%;
    height: 90%;
    ${bps.down("sm")} {
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
  }

  .mobile {
    padding: 0 20px;
    ${bps.down("md")} {
      align-items: center;
      text-align: center;
      flex-direction: column;

      .inner-grid {
        align-items: center;
        text-align: center;
        flex-direction: column;
      }
    }
  }

  .black-slant-bg-wrapper {
    background: url(${BlackSlantBg}) no-repeat center;
    z-index: 0;
    height: 100%;
    width: 100%;
    bottom: 0;
    position: absolute;
    background-size: cover;
    ${bps.down("md")} {
      height:850px;
    }
  }
`
export default () => {
  return (
    <StyledFeatureDescriptionContainer>
      <MuiThemeProvider theme={textThemeDark}>
        <VerticalSpacer size={80} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          className="mobile"
        >
          <Grid item xs={2}></Grid>
          <Grid item xs={12} lg={4}>
            <Typography color="primary" variant="subtitle1">
              DESIGNED BY DEVELOPERS
            </Typography>
            <VerticalSpacer size={12} />
            <Typography color="textPrimary" variant="h2">
              Powerful developer tools with a simple user-experience
            </Typography>
            <Grid container direction="row" className="inner-grid">
              <Grid item xs>
                <Grid container direction="column">
                  <VerticalSpacer size={30} />
                  <Typography color="textPrimary" variant="subtitle1">
                    Easy Build & Deployment
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    Simply connect your repo and you're off! KintoHub can build
                    and deploy your code as-is.
                  </Typography>
                  <VerticalSpacer size={10} />
                  <Typography color="textPrimary" variant="subtitle1">
                    Logs
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    Drill down and debug your issues with real time logs.
                  </Typography>
                </Grid>
              </Grid>

              <AutoGrowSpacer size={0.06} />

              <Grid item xs>
                <Grid container direction="column">
                  <VerticalSpacer size={30} />
                  <Typography color="textPrimary" variant="subtitle1">
                    Advanced Configurations
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    Click your way to cost effective development or scalable
                    production environments.
                  </Typography>
                  <VerticalSpacer size={10} />
                  <Typography color="textPrimary" variant="subtitle1">
                    Command Line Interface (CLI)
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    Use our CLI tools to connect tunnel to your secure
                    databases.
                  </Typography>
                  <VerticalSpacer size={30} />
                </Grid>
              </Grid>
            </Grid>
            <ActionButton
              variant="contained"
              color="primary"
              buttonTitle={"Try for Free"}
              link={"https://app.kintohub.com/auth/sign-up"}
            />
            <VerticalSpacer size={20} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Grid container alignItems="center">
              <img
                className="dev-tools-image"
                src={KintoDeveloperTools}
                alt="developer tools"
              ></img>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <VerticalSpacer size={90} />
        <div className="black-slant-bg-wrapper"></div>
      </MuiThemeProvider>
    </StyledFeatureDescriptionContainer>
  )
}
